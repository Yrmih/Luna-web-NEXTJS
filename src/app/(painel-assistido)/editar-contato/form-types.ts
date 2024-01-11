// Third party
import { z } from 'zod'

// Internal
import { editarContatoSchema } from './editar-contato-schema'

export type EditarContatoInputsForm = z.infer<typeof editarContatoSchema>
