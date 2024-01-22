// Third party
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// Internal
import { autenticarAssistido } from '../services'

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        cpf: { label: 'CPF', type: 'string' },
        atendimento: { label: 'Atendimento', type: 'string' },
      },
      async authorize(credentials) {
        return await autenticarAssistido({
          cpf: credentials?.cpf,
          atendimento: credentials?.atendimento,
        })
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        return {
          ...token,
        }
      }

      return token
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        dados: {
          id: token.id,
          name: token.name,
        },
      }
    },
  },
  pages: {
    signIn: '/login',
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
