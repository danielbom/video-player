import { useEffect } from 'react'

export type Shortcut<T> = {
  key: string
  event: T
}

export function useShortcuts<T>(shortcuts: Array<Shortcut<T>>, onEvent: (event: T) => void) {
  useEffect(() => {
    let lock = false
    function onKeyDown(e: KeyboardEvent) {
      if (lock) return
      if (document.activeElement && document.activeElement.tagName === 'INPUT') return
      if (e.ctrlKey || e.altKey || e.metaKey) return
      lock = true
      setTimeout(() => (lock = false), 100)
      const shortcut = shortcuts.find((it) => it.key === e.key)
      if (shortcut) onEvent(shortcut.event)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onEvent])
}
