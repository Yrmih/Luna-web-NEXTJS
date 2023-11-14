export class ObjectUtils {
  static isObjectEmpty(obj: Record<string, unknown>): boolean {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false
      }
    }
    return true
  }
}
