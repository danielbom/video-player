import { MediaChromePlayer } from '../../components/MediaChromePlayer'
import { VideoJsPlayer } from '../../components/VideoJsPlayer'
import { YoutubePlayer } from '../YoutubePlayer'

export type PlayerKind = 'media-chrome' | 'video-js' | 'youtube'
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
    case 'youtube':
      return <YoutubePlayer src={src} fullPage={fullPage} />
    default:
      return null
  }
}
