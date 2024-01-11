// Third party
import { z } from 'zod'

// Internal
import { editarContatoSchema } from './editarContatoSchema'

export type EditarContatoInputsForm = z.infer<typeof editarContatoSchema>
