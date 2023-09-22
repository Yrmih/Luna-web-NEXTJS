export const FORMULARIO_ERROS_MENSAGENS = {
  required: 'Campo Obrigatório',
  apenasLetras: 'O texto deve conter apenas letras',
  number: 'Somente números são permitidos',
  string: 'Somente textos são permitidos',
  cpf: 'número de CPF inválido',
  cep: 'CEP inválido',
  telefone: 'Telefone inválido',
  celular: 'Celular inválido',
  email: 'Email inválido',
}

export const INPUT_MASK_REGEX = {
  cpf: /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/,
  cep: /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/,
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  celular: /\(\d{2}\)\s\d{5}-\d{4}/g,
  telefone: /\(\d{2}\)\s\d{4}-\d{4}/g,
  apenasLetras: /^[a-záàâãéèêíïóôõöúçñ ]+$/i,
}
