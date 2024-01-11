// Internal

import { CadastroAssistido } from '@/features/cadastro-assistido/components/pages'

export type CadastroAssitidoPageSearchParams = {
  step: string
}
export default function CadastroAssistidoPage({
  searchParams,
}: {
  searchParams?: CadastroAssitidoPageSearchParams
}) {
  return (
    <main>
      <CadastroAssistido step={searchParams?.step} />
    </main>
  )
}
