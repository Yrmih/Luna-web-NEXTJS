import { ModalDetalhesNotificacao } from '@/features/painel-assistido/notificacao/components/pages'

export default function DetalhesNotificacaoPage({
  params: { id },
}: {
  params: { id: string }
}) {
  return <ModalDetalhesNotificacao params={{ id }} />
}
