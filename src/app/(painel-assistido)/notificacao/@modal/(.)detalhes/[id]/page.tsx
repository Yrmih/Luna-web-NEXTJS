import { ModalDetalhesNotificacao } from '../../../components/ui/ModalDetalhesNotificacao'

export default function ModalDetalhesNotificacaoPage({
  params: { id },
}: {
  params: { id: string }
}) {
  return <ModalDetalhesNotificacao params={{ id }} />
}
