import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        cpf: { label: 'CPF', type: 'string' },
        atendimento: { label: 'Atendimento', type: 'string' },
      },
      async authorize(credentials) {
        const requestUrl =
          process.env.ENDPOINT_SOLAR +
          'auth-assistido-luna/' +
          `?cpf=${credentials?.cpf}&atendimento=${credentials?.atendimento}`

        const fetchData = fetch(requestUrl, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Token ${process.env.TOKEN_SOLAR}`,
          },
        })
          .then((response) => response.json())
          .then((response) => {
            return response
          })

        const data = await fetchData
        if (data.count > 0) {
          const user = {
            id: data.results[0].pessoa_id,
            name: data.results[0].pessoa_nome,
          }

          console.log(user)

          return user
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
