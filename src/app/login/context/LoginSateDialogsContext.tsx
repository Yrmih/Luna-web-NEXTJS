'use client'
// Framework
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

interface LoginSateDialogsContextStateProps {
  children: ReactNode
}

export type LoginStateDialogs = {
  cpf: string
  atendimento: string
  setCpf: Dispatch<SetStateAction<string>>
  setAtendimento: Dispatch<SetStateAction<string>>
  openLoginAtendimentoDialog: boolean
  handlenOpenLoginAtendimentoDialog: () => void
  openAtendimentoNaoEncontradoDialog: boolean
  handleOpenAtendimentoNaoEncontradoDialog: () => void
  openRecuperarAtendimentoDialog: boolean
  handleOpenRecuperarAtendimentoDialog: () => void
  openFalhaRecuperarAtendimentoDialog: boolean
  handleOpenFalhaRecuperarAtendimentoDialog: () => void
  openCPFNaoEncontradoDialog: boolean
  handleOpenCPFNaoEncontradoDialog: () => void
  openNaoTemAtendimentoDialog: boolean
  handleOpenNaoTemAtendimentoDialog: () => void
}

const LoginStateDialogsContext = createContext<LoginStateDialogs | undefined>(
  undefined,
)

export function LoginStateDialogsProvider({
  children,
}: LoginSateDialogsContextStateProps) {
  const [cpf, setCpf] = useState<string>('')
  const [atendimento, setAtendimento] = useState<string>('')

  const [openLoginAtendimentoDialog, setOpenLoginAtendimentoDialog] =
    useState(false)

  const handlenOpenLoginAtendimentoDialog = () => {
    setOpenLoginAtendimentoDialog(!openLoginAtendimentoDialog)
  }

  const [
    openAtendimentoNaoEncontradoDialog,
    setOpenAtendimentoNaoEncontradoDialog,
  ] = useState(false)

  const handleOpenAtendimentoNaoEncontradoDialog = () => {
    setOpenAtendimentoNaoEncontradoDialog(!openAtendimentoNaoEncontradoDialog)
  }

  const [openRecuperarAtendimentoDialog, setOpenRecuperarAtendimentoDialog] =
    useState(false)

  const handleOpenRecuperarAtendimentoDialog = () => {
    setOpenRecuperarAtendimentoDialog(!openRecuperarAtendimentoDialog)
  }

  const [
    openFalhaRecuperarAtendimentoDialog,
    setOpenFalhaRecuperarAtendimentoDialog,
  ] = useState(false)

  const handleOpenFalhaRecuperarAtendimentoDialog = () => {
    setOpenFalhaRecuperarAtendimentoDialog(!openFalhaRecuperarAtendimentoDialog)
  }

  const [openCPFNaoEncontradoDialog, setOpenCPFNaoEncontradoDialog] =
    useState(false)

  const handleOpenCPFNaoEncontradoDialog = () => {
    setOpenCPFNaoEncontradoDialog(!openCPFNaoEncontradoDialog)
  }

  const [openNaoTemAtendimentoDialog, setOpenNaoTemAtendimentoDialog] =
    useState(false)

  const handleOpenNaoTemAtendimentoDialog = () => {
    setOpenNaoTemAtendimentoDialog(!openNaoTemAtendimentoDialog)
  }

  return (
    <LoginStateDialogsContext.Provider
      value={{
        cpf,
        atendimento,
        setCpf,
        setAtendimento,
        openLoginAtendimentoDialog,
        handlenOpenLoginAtendimentoDialog,
        openAtendimentoNaoEncontradoDialog,
        handleOpenAtendimentoNaoEncontradoDialog,
        openRecuperarAtendimentoDialog,
        handleOpenRecuperarAtendimentoDialog,
        openFalhaRecuperarAtendimentoDialog,
        handleOpenFalhaRecuperarAtendimentoDialog,
        openCPFNaoEncontradoDialog,
        handleOpenCPFNaoEncontradoDialog,
        openNaoTemAtendimentoDialog,
        handleOpenNaoTemAtendimentoDialog,
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
