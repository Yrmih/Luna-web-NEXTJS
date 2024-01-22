'use client'

// Third party
import { zodResolver } from '@hookform/resolvers/zod'
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  UseFormWatch,
  useForm,
} from 'react-hook-form'

// Framework
import { ReactNode, createContext, useContext } from 'react'
import { LoginInputsFrom, LoginInputsFromDirtyFiels } from '../types'
import { loginSchema } from '../schemas'

// Internal
interface LoginUseFormStateContextProps {
  children: ReactNode
}

export type LoginUseFormState = {
  handleSubmit: UseFormHandleSubmit<LoginInputsFrom>
  register: UseFormRegister<LoginInputsFrom>
  errors: FieldErrors<LoginInputsFrom>
  setValue: UseFormSetValue<LoginInputsFrom>
  trigger: UseFormTrigger<LoginInputsFrom>
  watch: UseFormWatch<LoginInputsFrom>
  dirtyFields: Partial<Readonly<LoginInputsFromDirtyFiels>>
  isSubmitting: boolean
  isValid: boolean
}

const LoginUseFormStateContext = createContext<LoginUseFormState | undefined>(
  undefined,
)

export function LoginUseFormStateProvider({
  children,
}: LoginUseFormStateContextProps) {
  const {
    handleSubmit,
    register,
    setValue,
    trigger,
    watch,
    formState: { errors, isValid, isSubmitting, dirtyFields },
  } = useForm<LoginInputsFrom>({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  })

  return (
    <LoginUseFormStateContext.Provider
      value={{
        handleSubmit,
        register,
        errors,
        setValue,
        trigger,
        watch,
        dirtyFields,
        isSubmitting,
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
