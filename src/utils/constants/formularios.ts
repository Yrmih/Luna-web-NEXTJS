export const FORMULARIOS_ERROS_MENSAGENS = {
  required: 'Campo Obrigatório',
  apenasLetras: 'O texto deve conter apenas letras',
  number: 'Somente números são permitidos',
  string: 'Somente textos são permitidos',
  cpf: 'número de CPF inválido',
  rg: 'número de RG inválido',
  certidao: 'número de certidão inválido',
  cep: 'CEP inválido',
  telefone: 'Telefone inválido',
  celular: 'Celular inválido',
  email: 'Email inválido',
}

export const FORMULARIOS_REGEX_DAS_MASCARAS = {
  cpf: /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/,
  cnpj: /^(([0-9]{2}.[0-9]{3}.[0-9]{3}\/[0-9]{4}-[0-9]{2}))$/,
  atendimento: /^(([0-9]{6}.[0-9]{3}.[0-9]{3}))$/,
  certidao:
    /^(([0-9]{6} [0-9]{2} [0-9]{2} [0-9]{4} [0-9]{1} [0-9]{5} [0-9]{3} [0-9]{7} [0-9]{2}))$/,
  cep: /^(([0-9]{5}-[0-9]{3}))$/,
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  celular: /\(\d{2}\)\s\d{5}-\d{4}/g,
  telefone: /\(\d{2}\)\s\d{4}-\d{4}/g,
  apenasLetras: /^[a-záàâãéèêíïóôõöúçñ ]+$/i,
  apenasUmaLetra: /^[a-záàâãéèêíïóôõöúçñ ]{1}/,
}
