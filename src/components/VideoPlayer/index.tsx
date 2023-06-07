import { MediaChromePlayer } from '../../components/MediaChromePlayer'
import { VideoJsPlayer } from '../../components/VideoJsPlayer'

export type PlayerKind = 'media-chrome' | 'video-js'
export type VideoPlayerProps = {
  src?: string
  fullPage?: boolean
  player: PlayerKind
}

export function VideoPlayer({ player, src, fullPage }: VideoPlayerProps) {
  if (!src) return null

  switch (player) {
    case 'media-chrome':
      return <MediaChromePlayer src={src} fullPage={fullPage} />
    case 'video-js':
      return <VideoJsPlayer src={src} fullPage={fullPage} />
    default:
      return null
  }
}
