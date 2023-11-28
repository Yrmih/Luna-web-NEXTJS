// import { NextRequest, NextResponse } from 'next/server'
// export async function middleware(request: NextRequest) {
//   // Como o fomulario é chamado na _app.tsx, ele não chama o getServerSidePros
//   if (request.nextUrl.pathname === '/') {
//     return NextResponse.redirect(new URL('/login', request.url))
//   }
// }
import {
  withAuth,
  NextRequestWithAuth,
  NextAuthMiddlewareOptions,
} from 'next-auth/middleware'
import { NextResponse } from 'next/server'

const middleware = (request: NextRequestWithAuth) => {
  if (
    request.nextUrl.pathname === '/' ||
    request.nextUrl.pathname === '/home'
  ) {
    return NextResponse.redirect(new URL('/atendimentos', request.url))
  }
}

const callbackOptions: NextAuthMiddlewareOptions = {}

export default withAuth(middleware, callbackOptions)

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
}

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      */
//     '/((?!api|_next/static|_next/image|favicon.ico).*)',
//   ],
// }
