import { z } from 'zod'
import { cadastroAssistidoSchema } from '../schemas'

export type CadastroAssistidoInputsForm = z.infer<
  typeof cadastroAssistidoSchema
>
