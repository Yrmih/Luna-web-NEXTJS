export class CpfUtils {
  static isValidCPF(cpf: string) {
    // Validar se é String
    if (typeof cpf !== 'string') return false

    // Tirar formatação
    cpf = cpf.replace(/[^\d]+/g, '')

    // Validar se tem tamanho 11 ou se é uma sequência de digitos repetidos
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false

    // String para Array
    const cpfArray = cpf.split('')
    const validator = cpfArray
      .filter(
        (digit: string, index: number, array: string[]) =>
          index >= array.length - 2 && digit,
      )
      .map((el: string | number) => +el)

    // Pegar Array de items para validar
    const toValidate = (pop: number) =>
      cpfArray
        .filter(
          (digit: string, index: number, array: string[]) =>
            index < array.length - pop && digit,
        )
        .map((el: string | number) => +el)

    const rest = (count: number, pop: number) =>
      ((toValidate(pop)
        // Calcular Soma dos digitos e multiplicar por 10
        .reduce(
          (soma: number, el: number, i: number) => soma + el * (count - i),
          0,
        ) *
        10) %
        // Pegar o resto por 11
        11) %
      // transformar de 10 para 0
      10

    return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1])
  }
}
