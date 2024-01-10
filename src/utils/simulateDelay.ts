export const simulateDelay = (delayMilliseconds: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
      console.log('delay')
    }, delayMilliseconds)
  })
}
