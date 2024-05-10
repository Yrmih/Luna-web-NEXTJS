import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface User {
    pessoa: string | undefined
    nome: string | undefined
    email?: string
    tipo?: 0 | 1 | 4 | 5
  }
}

declare module 'next-auth' {
  interface Session {
    user: User & DefaultSession['user']
  }
}
