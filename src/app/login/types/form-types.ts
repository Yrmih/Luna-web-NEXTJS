// Third party
import { z } from 'zod'

// Internal
import { loginSchema } from '../schemas/login-schema'

export type LoginInputsFrom = z.infer<typeof loginSchema>

export type LoginInputsFromDirtyFiels = {
  cpf?: boolean
  atendimento?: boolean
}
