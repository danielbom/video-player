import { PlayerKind } from '../../components/VideoPlayer'

export type PlaylistItem = {
  src: string
  title: string
  player: PlayerKind
}

export type PlayerState = {
  player: PlayerKind
  src: string | undefined
}

export type Settings = {
  player: PlayerKind
  src: string | undefined
  current: number
  playlist: PlaylistItem[]
}

export type PlayerEvent = 'play-pause' | 'next' | 'previous' | 'fullscreen' | 'import' | 'export'
