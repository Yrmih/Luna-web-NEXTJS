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

  static maskMoney = (value: string) => {
    value = value.replace(/\D/g, '')
    const moneyValue: number = Number(value) / 100
    return moneyValue.toFixed(2).toString()
  }

  static maskCelular = (value: string | undefined) => {
    if (!value) return ''

    const celularNornalizado = value
      .replace(/[\D]/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})(\d+?)/, '$1')

    return celularNornalizado
  }

  static maskTelefone = (value: string | undefined) => {
    if (!value) return ''

    return value
      .replace(/[\D]/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{4})(\d+?)/, '$1')
  }

  static limitarTamanhoString = (string: string, limite: number) => {
    // Use a regex para remover qualquer caractere que apareça após os primeiros 'limite' caracteres.
    return string.replace(new RegExp(`^(.{${limite}}).*$`), '$1')
  }
}
