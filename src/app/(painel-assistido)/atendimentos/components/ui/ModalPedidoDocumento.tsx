'use client'

// Third party
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  SxProps,
  Theme,
} from '@mui/material'

// Animação de alerta

// Define tipos da proriedade da ModalPedidoDocumento
interface ModalPedidoDocumentoProps {
  nome?: string
  ehDocumento: boolean
  situacao: number
}

// interface StylesProps {
//   situacao: number
//   parte: 'title' | 'content' | 'actions'
//   ehDocumento: boolean
// }

// function styles({ situacao, parte, ehDocumento }: StylesProps): SxProps<Theme> {
//   const cores = {
//     vermelho: 'rgb(220, 0, 0, 1)',
//     verde: 'rgb(0, 100, 0, 1)',
//     azul: 'rgb(39, 122, 149, 1)',
//     azulEscuro: 'rgb(0, 45, 120, 1)',
//     cinza: 'rgb(169, 169, 169, 1)',
//   }

//   let cor = ''

//   console.log(ehDocumento)

//   // Faz o tratamento de tudo quando não é documento
//   if (!ehDocumento) {
//     // Title do dialog

//     switch (situacao) {
//       case 2:
//         cor = cores.azul
//         break
//       case 4:
//         cor = cores.verde
//         break
//     }
//   }

//   console.log(cor)

//   return {
//     backgroundColor:
//       parte === 'title'
//         ? cor.replace(/..$/g, '0.5)')
//         : cor.replace(/..$/g, '0.3)'),
//     borderBottom: parte === 'content' ? `1px solid ${cores.cinza}` : '',
//     paddingTop: parte === 'content' ? '15px !important' : '',
//   }
// }

export function ModalPedidoDocumento({
  nome,
  ehDocumento,
  situacao,
}: ModalPedidoDocumentoProps) {
  return (
    <>
      {/* Titulo da modal */}
      <DialogTitle>{nome}</DialogTitle>

      {/* Conteúdo da modal */}
      <DialogContent>teste</DialogContent>

      {/* Ações da modal */}
      <DialogActions>{situacao}</DialogActions>
    </>
  )
}
