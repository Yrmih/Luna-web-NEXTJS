'use client'

import { useSession } from 'next-auth/react'

export default function TestePage() {
  const { data: session } = useSession()

  return (
    <div>
      <h1>Teste page</h1>
      {session && <pre>{JSON.stringify(session, null, 2)}</pre>}
    </div>
  )
}
