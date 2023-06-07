import { useState } from 'react'

export default function useStateStorage<T>(key: string, defaultValue: T, storage = localStorage) {
  const [value, _setValue] = useState<T>(() => {
    const value = storage.getItem(key)
    if (value) return JSON.parse(value)
    return defaultValue
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
