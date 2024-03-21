import { ReactNode } from 'react'

export type TextFieldAttributes = {
  name?: string
  label: string
  textHelper: string
  placeHolder: string
  icon: ReactNode
}

export interface ServiceResponse<D, E> {
  sucesso: boolean
  resultado?: D
  erro?: E
}
