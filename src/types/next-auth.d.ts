import 'next-auth'

declare module 'next-auth' {
  interface User {
    pessoa: string
    nome: string
    email?: string
    tipo?: 0 | 1 | 4 | 5
  }
}
