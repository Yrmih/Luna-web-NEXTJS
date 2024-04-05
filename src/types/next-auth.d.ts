import 'next-auth'

declare module 'next-auth' {
  interface User {
    id_pessoa: string
    nome: string
    email?: string
    tipo?: 0 | 1 | 4 | 5
  }
}
