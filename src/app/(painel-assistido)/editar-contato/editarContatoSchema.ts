import { z } from 'zod'

export const formularioSchema = z.object({
  // email está como opcional
  email: z
    .string()
    .email('Você deve inserir um email válido')
    .optional()
    .or(z.literal('')),
  ddd: z.string().min(3, 'O DDD deve conter 3 digitos'),
  telefone: z.string().min(7, 'Você deve inserir um telefone válido'),
})
