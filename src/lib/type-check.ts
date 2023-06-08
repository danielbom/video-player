export type TypeCheck<T> = {
  [K in keyof T]: (it: unknown) => boolean
}

export function checkObject<T>(value: unknown, checkKeys: TypeCheck<T>): value is T {
  if (typeof value !== 'object' || value === null) {
    return false
  }
  for (const key in checkKeys) {
    if (!checkKeys[key]((value as any)[key])) {
      return false
    }
  }
  return true
}

export function checkArray<T>(value: unknown, checkKeys: TypeCheck<T>): value is T[] {
  if (!Array.isArray(value)) {
    return false
  }
  return value.every((item) => checkObject(item, checkKeys))
}
