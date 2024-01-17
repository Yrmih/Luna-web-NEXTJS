import { ModalDetalhesNotificacao } from '../../../components/ui/ModalDetalhesNotificacao'

export default function DetalhesNotificacaoPage({
  params: { id },
}: {
  params: { id: string }
}) {
  return <ModalDetalhesNotificacao params={{ id }} />
}
