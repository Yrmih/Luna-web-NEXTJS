// Internal

import { DetalhesNotificacao } from '../../components/pages'

export default function DetalhesNotificacaoPage({
  params: { id },
}: {
  params: { id: string }
}) {
  return <DetalhesNotificacao params={{ id }} />
}
