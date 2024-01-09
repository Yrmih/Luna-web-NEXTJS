import { z } from 'zod'
import { editarContatoSchema } from './editarContatoSchema'

export type EditarContatoInputsForm = z.infer<typeof editarContatoSchema>
