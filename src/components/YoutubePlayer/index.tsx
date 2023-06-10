import { useImperativeHandle, useRef, useState } from 'react'
import YouTube from 'react-youtube'
import { PlayerHandle } from '../VideoPlayer/types'
import './index.css'

type YoutubePlayerProps = {
  src?: string
  fullPage?: boolean
  playerHandleRef?: React.Ref<PlayerHandle>
}

export function YoutubePlayer({ src, fullPage, playerHandleRef: playerRef }: YoutubePlayerProps) {
  const [autoplay, setAutoplay] = useState(false)
  const stateRef = useRef({ playing: false, onEnd: () => {} })
  const youtubeRef = useRef<YouTube>(null)

  useImperativeHandle(playerRef, () => ({
    play: () => {
      youtubeRef.current?.getInternalPlayer()?.playVideo()
      setAutoplay(true)
    },
    pause: () => {
      youtubeRef.current?.getInternalPlayer()?.pauseVideo()
      setAutoplay(false)
    },
    fullscreen: () => {
      youtubeRef.current
        ?.getInternalPlayer()
        ?.getIframe()
        .then((iframe) => {
          ;(iframe.querySelector('.ytp-fullscreen-button.ytp-button') as HTMLButtonElement)?.click()
        })
    },
    isPlaying: () => stateRef.current.playing,
    onEnd: (callback) => {
      stateRef.current.onEnd = callback
    },
  }))

  return (
    <YouTube
      opts={{ playerVars: { autoplay: autoplay ? 1 : 0 } }}
      ref={youtubeRef}
      videoId={src && extractVideoIdFromUrl(src)}
      iframeClassName={fullPage ? 'fullpage' : ''}
      onPause={() => {
        stateRef.current.playing = false
      }}
      onPlay={() => {
        stateRef.current.playing = true
      }}
      onEnd={() => {
        stateRef.current.onEnd()
      }}
    />
  )
}

function extractVideoIdFromUrl(url: string) {
  const match = url.match(/v=([^&]+)/)
  if (!match) return undefined
  return match[1]
}
