import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  // Como o fomulario é chamado na _app.tsx, ele não chama o getServerSidePros

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/atendimentos', request.url))
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
