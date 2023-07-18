import { PlayerEvent } from './types'
import { Shortcut } from './useShortcuts'

export const KEYBOARD_SHORTCUTS: Shortcut<PlayerEvent>[] = [
  { key: 'K', event: 'play-pause' },
  { key: 'L', event: 'next' },
  { key: 'J', event: 'previous' },
  { key: 'I', event: 'import' },
  { key: 'E', event: 'export' },
  { key: 'F', event: 'fullscreen' },
]
