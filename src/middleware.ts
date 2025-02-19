import { JWT } from 'next-auth/jwt'
import {
  withAuth,
  NextRequestWithAuth,
  NextAuthMiddlewareOptions,
} from 'next-auth/middleware'
import { NextRequest, NextResponse } from 'next/server'

const middleware = (request: NextRequestWithAuth) => {
  if (
    request.nextUrl.pathname === '/' ||
    request.nextUrl.pathname === '/home'
  ) {
    return NextResponse.redirect(new URL('/atendimentos', request.url))
  }
}

// formas de autorização de acesso às telas
const authorized = async (params: { token: JWT | null; req: NextRequest }) => {
  const cookies = params.req.cookies

  const isSemCadastro = params.req.nextUrl.pathname === '/cadastro-assistido'
  const isSemAtendimento =
    cookies.has('sem-atendimento') &&
    params.req.nextUrl.pathname === '/nova-solicitacao'

  // Permitir o assistido acessar a página de cadastro e de nova solicitação se necessário
  return isSemCadastro || isSemAtendimento || !!params.token // forcer ser booleano
}
const callbackOptions: NextAuthMiddlewareOptions = { callbacks: { authorized } }

export default withAuth(middleware, callbackOptions)

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
}
