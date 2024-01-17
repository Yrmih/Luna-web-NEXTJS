'use client'

// Framework
import {
  ReactNode,
  SyntheticEvent,
  createContext,
  useContext,
  useState,
} from 'react'

// Internal
import { SnackBarType } from '../types/snackbar-types'

interface SnackbarAreaAssistidoStateProps {
  children: ReactNode
}

type SnackbarAreaAssistidoState = {
  open: boolean
  handleClose: (event?: SyntheticEvent | Event, reason?: string) => void
  type: SnackBarType
  message: string
  showSnackbarAreaAssistido: (message: string, type: SnackBarType) => void
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

  const showSnackbarAreaAssistido = (message: string, type: SnackBarType) => {
    setType(type)
    setMessage(message)
    handleClose()
  }

  return (
    <SnackBarAreaAssistidoStateContext.Provider
      value={{ open, handleClose, type, message, showSnackbarAreaAssistido }}
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
