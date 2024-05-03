// Third party
import NextAuth, { NextAuthOptions, User } from 'next-auth'
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
        if (!credentials?.cpf || !credentials?.atendimento) {
          throw new Error('CPF e atendimento são obrigatórios')
        }

        const response = await autenticarAssistido({
          cpf: credentials.cpf,
          atendimento: credentials.atendimento,
        })

        if (response.sucesso) {
          return response.resultado as User
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.pessoaId = user.pessoa
        token.nome = user.nome
        token.email = user.email
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
          pessoaId: token.pessoaId,
          nome: token.nome,
          email: token.email,
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
