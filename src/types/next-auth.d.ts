import 'next-auth'

declare module 'next-auth' {
  interface User {
    id: number
    id_pessoa: number
    nome: string
    email?: string
    tipo?: 0 | 1 | 4 | 5
  }
}
