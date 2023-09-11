// Internal
import { Bens } from './Bens'
import { Investimento } from './Investimento'

export type QualificacaoFianceira = {
  numeroMembrosFamilia: number
  numeroMembrosFamiliaAtivos: string
  rendaIndividual: number
  rendaFamiliar: number
  bens: Bens[]
  investimentos: Investimento[]
  aceitoTermosCondicoes: boolean
}
