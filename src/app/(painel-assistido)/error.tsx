'use client'

import { PageErrorAreaAssistido } from './components'

// Internal

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return <PageErrorAreaAssistido error={error} reset={reset} />
}
