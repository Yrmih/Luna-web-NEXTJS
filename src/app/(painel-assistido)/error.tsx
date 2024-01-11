'use client'

// Internal
import { PageErrorAreaAssistido } from '../../features/painel-assistido/components/ui/PageErrorAreaAssistido'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return <PageErrorAreaAssistido error={error} reset={reset} />
}
