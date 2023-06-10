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
  const stateRef = useRef({ playing: false })
  const youtubeRef = useRef<YouTube>(null)

  useImperativeHandle(playerRef, () => ({
    play: () => {
      youtubeRef.current?.getInternalPlayer()?.playVideo()
    },
    pause: () => {
      youtubeRef.current?.getInternalPlayer()?.pauseVideo()
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
  }))

  return (
    <YouTube
      ref={youtubeRef}
      videoId={src && extractVideoIdFromUrl(src)}
      iframeClassName={fullPage ? 'fullpage' : ''}
      onPause={() => {
        stateRef.current.playing = false
      }}
      onPlay={() => {
        stateRef.current.playing = true
      }}
    />
  )
}

function extractVideoIdFromUrl(url: string) {
  const match = url.match(/v=([^&]+)/)
  if (!match) return undefined
  return match[1]
}
