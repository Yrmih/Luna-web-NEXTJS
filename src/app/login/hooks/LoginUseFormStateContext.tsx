'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode, createContext, useContext } from 'react'
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
  useForm,
} from 'react-hook-form'
import { loginSchema } from '../schemas/loginSchema'
import { LoginInputsFrom, LoginInputsFromDirtyFiels } from '../types/formTypes'

interface LoginUseFormStateContextProps {
  children: ReactNode
}

export type LoginUseFormState = {
  handleSubmit: UseFormHandleSubmit<LoginInputsFrom>
  register: UseFormRegister<LoginInputsFrom>
  errors: FieldErrors<LoginInputsFrom>
  setValue: UseFormSetValue<LoginInputsFrom>
  trigger: UseFormTrigger<LoginInputsFrom>
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
