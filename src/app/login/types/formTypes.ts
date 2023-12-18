import { z } from 'zod'
import { loginSchema } from '../schemas/loginSchema'

export type LoginInputsFrom = z.infer<typeof loginSchema>
