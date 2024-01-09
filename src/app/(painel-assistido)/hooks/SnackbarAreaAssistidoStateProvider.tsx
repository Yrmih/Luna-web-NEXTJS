'use client'

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  SyntheticEvent,
  createContext,
  useContext,
  useState,
} from 'react'
import { SnackBarType } from '../types/snackbar-types'

interface SnackbarAreaAssistidoStateProps {
  children: ReactNode
}

type SnackbarAreaAssistidoState = {
  open: boolean
  handleClose: (event?: SyntheticEvent | Event, reason?: string) => void
  setType: Dispatch<SetStateAction<SnackBarType>>
  type: SnackBarType
  setMessage: Dispatch<SetStateAction<string>>
  message: string
}

const SnackBarAreaAssistidoStateContext = createContext<
  SnackbarAreaAssistidoState | undefined
>(undefined)

export function SnackbarAreaAssistidoStateProvider({
  children,
}: SnackbarAreaAssistidoStateProps) {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState<SnackBarType>('success')

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(true)

    setTimeout(() => {
      setOpen(false)
    }, 6000)
  }

  return (
    <SnackBarAreaAssistidoStateContext.Provider
      value={{ open, handleClose, setType, type, setMessage, message }}
    >
      {children}
    </SnackBarAreaAssistidoStateContext.Provider>
  )
}

export const useSnackbarAreaAssistidoState = () => {
  const context = useContext(SnackBarAreaAssistidoStateContext)

  if (!context) {
    throw new Error(
      'useSnackbarAreaAssistidoState só pode ser usado dentro do provider SnackbarAreaAssistidoStateProvider',
    )
  }

  return context
}
