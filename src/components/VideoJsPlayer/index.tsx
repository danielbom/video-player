import { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

// https://videojs.com/guides/react/

type VideoJs = typeof videojs
type Player = ReturnType<VideoJs>

type VideoSource = {
  src: string
  type: string // video/mp4
}

type VideoJsProps = {
  autoplay: boolean
  controls: boolean
  responsive: boolean
  fluid: boolean
  sources: VideoSource[]
  onReady?: (player: Player, videojs: VideoJs) => void
}

export const VideoJs = ({ onReady, ...options }: VideoJsProps) => {
  const videoRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<Player>()

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!videoRef.current) return

    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement('video-js')
      videoElement.classList.add('vjs-big-play-centered')
      videoRef.current.appendChild(videoElement)

      playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(playerRef.current!, videojs)
      })
    } else {
      // You could update an existing player in the `else` block here
      // on prop change, for example:
      playerRef.current.autoplay(options.autoplay)
      playerRef.current.src(options.sources)
    }

    return () => {
      if (playerRef.current && !playerRef.current.isDisposed()) {
        playerRef.current.dispose()
        playerRef.current = undefined
      }
    }
  }, [videoRef, options])

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  )
}

type VideoJsPlayerProps = {
  src: string
}

export const VideoJsPlayer = ({ src }: VideoJsPlayerProps) => {
  return (
    <VideoJs
      autoplay={false}
      controls={true}
      responsive={true}
      fluid={true}
      sources={[{ src, type: 'video/mp4' }]}
      onReady={(video) => {
        console.log(video)
      }}
    />
  )
}
