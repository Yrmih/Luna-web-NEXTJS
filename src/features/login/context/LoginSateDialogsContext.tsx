'use client'
// Framework
import { ReactNode, createContext, useContext, useState } from 'react'

interface LoginSateDialogsContextStateProps {
  children: ReactNode
}

export type LoginStateDialogs = {
  openLoginAtendimentoDialog: boolean
  handlenCloseLoginAtendimentoDialog: () => void
  openAtendimentoNaoEncontradoDialog: boolean
  handleCloseAtendimentoNaoEncontradoDialog: () => void
  openRecuperarAtendimentoDialog: boolean
  handleCloseRecuperarAtendimentoDialog: () => void
  openFalhaRecuperarAtendimentoDialog: boolean
  handleCloseFalhaRecuperarAtendimentoDialog: () => void
  openCPFNaoEncontradoDialog: boolean
  handleCloseCPFNaoEncontradoDialog: () => void
}

const LoginStateDialogsContext = createContext<LoginStateDialogs | undefined>(
  undefined,
)

export function LoginStateDialogsProvider({
  children,
}: LoginSateDialogsContextStateProps) {
  const [openLoginAtendimentoDialog, setOpenLoginAtendimentoDialog] =
    useState(false)

  const handlenCloseLoginAtendimentoDialog = () => {
    setOpenLoginAtendimentoDialog(!openLoginAtendimentoDialog)
  }

  const [
    openAtendimentoNaoEncontradoDialog,
    setOpenAtendimentoNaoEncontradoDialog,
  ] = useState(false)

  const handleCloseAtendimentoNaoEncontradoDialog = () => {
    setOpenAtendimentoNaoEncontradoDialog(!openAtendimentoNaoEncontradoDialog)
  }

  const [openRecuperarAtendimentoDialog, setOpenRecuperarAtendimentoDialog] =
    useState(false)

  const handleCloseRecuperarAtendimentoDialog = () => {
    setOpenRecuperarAtendimentoDialog(!openRecuperarAtendimentoDialog)
  }

  const [
    openFalhaRecuperarAtendimentoDialog,
    setOpenFalhaRecuperarAtendimentoDialog,
  ] = useState(false)

  const handleCloseFalhaRecuperarAtendimentoDialog = () => {
    setOpenFalhaRecuperarAtendimentoDialog(!openFalhaRecuperarAtendimentoDialog)
  }

  const [openCPFNaoEncontradoDialog, setOpenCPFNaoEncontradoDialog] =
    useState(false)

  const handleCloseCPFNaoEncontradoDialog = () => {
    setOpenCPFNaoEncontradoDialog(!openCPFNaoEncontradoDialog)
  }

  return (
    <LoginStateDialogsContext.Provider
      value={{
        openLoginAtendimentoDialog,
        handlenCloseLoginAtendimentoDialog,
        openAtendimentoNaoEncontradoDialog,
        handleCloseAtendimentoNaoEncontradoDialog,
        openRecuperarAtendimentoDialog,
        handleCloseRecuperarAtendimentoDialog,
        openFalhaRecuperarAtendimentoDialog,
        handleCloseFalhaRecuperarAtendimentoDialog,
        openCPFNaoEncontradoDialog,
        handleCloseCPFNaoEncontradoDialog,
      }}
    >
      {children}
    </LoginStateDialogsContext.Provider>
  )
}

export const useLoginStateDialogs = (): LoginStateDialogs => {
  const context = useContext(LoginStateDialogsContext)

  if (!context) {
    throw Error(
      'useLoginStateDialogs deve ser usado no context de LoginStateDialogsProvider',
    )
  }

  return context
}
