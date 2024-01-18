// Third party
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

// Internal
import { SITUACAO_AUTENTICADO } from '../constants'
import { AuthAssistidoAPI } from '@/lib/api/solar/client'
import { HttpStatusCodes } from '@/lib/api/fetch/types'

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        cpf: { label: 'CPF', type: 'string' },
        atendimento: { label: 'Atendimento', type: 'string' },
      },
      async authorize(credentials) {
        const resposta = await AuthAssistidoAPI.autenticar({
          cpf: credentials?.cpf,
          numero_atendimento: credentials?.atendimento,
        })

        if (resposta.status === HttpStatusCodes.OK) {
          return resposta.data
        } else {
          return null
        }
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
