import { memo, useEffect, useState } from 'react'
import { PlayerHandle } from './types'

export type PlayerKind = 'media-chrome' | 'video-js' | 'youtube'
export type VideoPlayerProps = {
  src?: string
  fullPage?: boolean
  player: PlayerKind
  playerHandleRef?: React.Ref<PlayerHandle>
}

export const VideoPlayer = memo(({ player, src, fullPage, playerHandleRef }: VideoPlayerProps) => {
  const [VideoPlayerComponent, setVideoPlayerComponent] = useState<React.ReactNode>(null)

  useEffect(() => {
    async function lazyLoadPlayer() {
      if (!src) {
        setVideoPlayerComponent(null)
        return
      }

      switch (player) {
        case 'media-chrome':
          const { MediaChromePlayer } = await import('../../components/MediaChromePlayer')
          setVideoPlayerComponent(<MediaChromePlayer src={src} fullPage={fullPage} />)
          break
        case 'video-js':
          const { VideoJsPlayer } = await import('../../components/VideoJsPlayer')
          setVideoPlayerComponent(<VideoJsPlayer src={src} fullPage={fullPage} />)
          break
        case 'youtube':
          const { YoutubePlayer } = await import('../YoutubePlayer')
          setVideoPlayerComponent(<YoutubePlayer src={src} fullPage={fullPage} playerHandleRef={playerHandleRef} />)
          break
        default:
          break
      }
    }

    lazyLoadPlayer()
  }, [player, src, fullPage, playerHandleRef])

  return <>{VideoPlayerComponent}</>
})

export const players: PlayerKind[] = ['media-chrome', 'video-js', 'youtube']
