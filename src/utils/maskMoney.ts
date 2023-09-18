export const maskMoney = (value: string) => {
  value = value.replace(/\D/g, '')
  const moneyValue: number = Number(value) / 100
  return moneyValue.toFixed(2).toString()
}
