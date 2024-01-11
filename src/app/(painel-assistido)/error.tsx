'use client'

// Internal
import { PageErrorAreaAssistido } from './components/ui/PageErrorAreaAssistido'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return <PageErrorAreaAssistido error={error} reset={reset} />
}
