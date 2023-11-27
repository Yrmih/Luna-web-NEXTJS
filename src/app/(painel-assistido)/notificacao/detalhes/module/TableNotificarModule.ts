import { ReactNode } from "react"

export interface TableNotificarModulo {
  id: number
  title: string
  emviadoem: string
  conteudo: string
}

export interface TableNotificaProps {
  createData: TableNotificarModulo[]
}
