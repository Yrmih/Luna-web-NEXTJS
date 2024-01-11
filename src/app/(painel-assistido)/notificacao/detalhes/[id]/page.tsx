// Internal

import { DetalhesNotificacao } from '@/features/painel-assistido/notificacao/components/pages'

export default function DetalhesNotificacaoPage({
  params: { id },
}: {
  params: { id: string }
}) {
  return <DetalhesNotificacao params={{ id }} />
}
