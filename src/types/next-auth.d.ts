import 'next-auth'

declare module 'next-auth' {
  interface User {
    id: number
    nome: string
    email?: string
    tipo?: 0 | 1 | 4 | 5
  }
}
