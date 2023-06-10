export type PlayerHandle = {
  play: () => void
  pause: () => void
  fullscreen: () => void
  isPlaying: () => boolean
}
