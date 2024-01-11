// Third party
import { z } from 'zod'
import { editarContatoSchema } from '../schemas'

// Internal

export type EditarContatoInputsForm = z.infer<typeof editarContatoSchema>
