'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

interface IFormInputs {
  firstName: string
  age: number
}

const schema = z
  .object({
    firstName: z.string().nonempty().max(6),
    age: z.string(),
  })
  .required()

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: zodResolver(schema),
  })
  const onSubmit = (data: IFormInputs) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div>
          <input {...register('firstName')} />
          <p>{errors.firstName?.message}</p>
        </div>
      </div>

      <div>
        <div>
          <input type="number" {...register('age')} />
          <p>{errors.age?.message}</p>
        </div>
      </div>

      <input type="submit" />
    </form>
  )
}
