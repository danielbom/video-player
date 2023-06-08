import { useState } from 'react'

type UseStateStorageOptions<T> = {
  storage?: Storage
  onInit?: (value?: T) => void
}

export default function useStateStorage<T>(
  key: string,
  defaultValue?: T,
  { storage = localStorage, onInit = (value?: T) => value }: UseStateStorageOptions<T> = {},
) {
  const [value, _setValue] = useState<T>(() => {
    const value = storage.getItem(key)
    const result = value ? JSON.parse(value) : defaultValue
    onInit(result)
    return result
  })

  const setValue: React.Dispatch<React.SetStateAction<T>> = (value) => {
    if (typeof value === 'function') {
      _setValue((prev) => {
        const newValue = (value as any)(prev)
        storage.setItem(key, JSON.stringify(newValue))
        return newValue
      })
    } else {
      _setValue(value)
      storage.setItem(key, JSON.stringify(value))
    }
  }

  return [value, setValue] as const
}
