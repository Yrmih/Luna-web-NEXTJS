'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface LoginSateDialogsContextStateProps {
  children: ReactNode
}

export type LoginStateDialogs = {
  openLoginAtendimentoDialog: boolean
  onCloseLoginAtendimentoDialog: () => void
}

const LoginStateDialogsContext = createContext<LoginStateDialogs | undefined>(
  undefined,
)

export const LoginStateDialogsProvider = ({
  children,
}: LoginSateDialogsContextStateProps) => {
  const [openLoginAtendimentoDialog, setOpenLoginAtendimentoDialog] =
    useState(false)

  const handlenCloseLoginAtendimentoDialog = () => {
    setOpenLoginAtendimentoDialog(!openLoginAtendimentoDialog)
  }
  return (
    <LoginStateDialogsContext.Provider
      value={{
        openLoginAtendimentoDialog,
        onCloseLoginAtendimentoDialog: handlenCloseLoginAtendimentoDialog,
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
