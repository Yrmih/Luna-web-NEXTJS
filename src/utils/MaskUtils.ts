export class MaskUtils {
  static maskCpfCnpj = (value: string | undefined) => {
    if (!value) return ''

    const cleanedValue = value.replace(/\D/g, '')

    if (cleanedValue.length <= 11) {
      const cpf = cleanedValue
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
      return cpf
    } else {
      const cnpj = cleanedValue
        .replace(/^(\d{2})(\d)/, '$1.$2')
        .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1/$2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(-\d{2})(\d+?)/, '$1')
      return cnpj
    }
  }

  static maskAtendimento = (value: string | undefined) => {
    if (!value) return ''

    const cleanedValue = value.replace(/\D/g, '')

    return cleanedValue
      .replace(/^(\d{6})(\d)/, '$1.$2')
      .replace(/^(\d{6})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/(\.\d{3})(\d+?)/, '$1')
  }

  static stringToNumberConverter = (value: string): number => {
    value = value.replace(/\D/g, '')
    const moneyValue: number = Number(value) / 100
    return parseFloat(moneyValue.toFixed(2))
  }

  static maskMoney = (value: string | undefined): string => {
    if (!value) return '0'

    value = value.replace('.', '').replace(',', '').replace(/\D/g, '')
    const options = { minimumFractionDigits: 2 }
    const result = new Intl.NumberFormat('pt-BR', options).format(
      parseFloat(value) / 100,
    )

    return result
  }

  static maskCelular = (value: string | undefined): string => {
    if (!value) return ''

    const celularNormalizado = value
      .replace(/[\D]/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})(\d+?)/, '$1')

    return celularNormalizado
  }

  static maskTelefone = (value: string | undefined) => {
    if (!value) return ''

    return value
      .replace(/[\D]/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})(\d+?)/, '$1')
  }

  static maskCertidao(value: string) {
    if (!value) return ''

    return value
      .replace(/[\D]/g, '')
      .replace(
        /(\d{0,6})?(\d{0,2})?(\d{0,2})?(\d{0,4})?(\d{0,1})?(\d{0,5})?(\d{0,3})?(\d{0,7})?(\d{0,2})/,
        '$1 $2 $3 $4 $5 $6 $7 $8 $9',
      )

      .replace(/\s+$/, '')
      .replace(/^(.{40}).*$/, '$1')
  }

  static maskCep = (value: string | undefined) => {
    if (!value) return ''

    const normalizado = value
      .replace(/\D/g, '')
      .replace(/^(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})(\d+?)/, '$1')
    return normalizado
  }

  static limitarTamanhoString = (string: string, limite: number) => {
    // Use a regex para remover qualquer caractere que apareça após os primeiros 'limite' caracteres.
    return string.replace(new RegExp(`^(.{${limite}}).*$`), '$1')
  }

  static getOnlyDigits(value: string | undefined) {
    if (!value) return ''
    return value.replace(/\D/g, '')
  }
}
