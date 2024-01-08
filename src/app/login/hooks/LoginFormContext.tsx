import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode, createContext, useContext } from 'react'
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  useForm,
} from 'react-hook-form'
import { loginSchema } from '../schemas/loginSchema'
import { LoginInputsFrom } from '../types/formTypes'

interface LoginUseFormStateContextProps {
  children: ReactNode
}

type LoginUseFormState = {
  register: UseFormRegister<LoginInputsFrom>
  errors: FieldErrors<LoginInputsFrom>
  setValue: UseFormSetValue<LoginInputsFrom>
  isLoading: boolean
  isValid: boolean
}

const LoginUseFormStateContext = createContext<LoginUseFormState | undefined>(
  undefined,
)

export const LoginUseFormStateProvider = ({
  children,
}: LoginUseFormStateContextProps) => {
  const {
    register,
    setValue,
    formState: { errors, isValid, isLoading },
  } = useForm<LoginInputsFrom>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  })

  return (
    <LoginUseFormStateContext.Provider
      value={{
        register,
        errors,
        setValue,
        isLoading,
        isValid,
      }}
    >
      {children}
    </LoginUseFormStateContext.Provider>
  )
}

export const useLoginUseFormSate = (): LoginUseFormState => {
  const context = useContext<LoginUseFormState | undefined>(
    LoginUseFormStateContext,
  )
  if (!context) {
    throw new Error(
      'useLoginUseFormSate deve ser usado dentro do contexto useLoginUseFormStateProvider',
    )
  }

  return context
}
