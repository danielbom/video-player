import { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import './index.css'
import useFullpage from '../../hooks/useFullpage'

// https://videojs.com/guides/react/

type VideoJsFn = typeof videojs
type Player = ReturnType<VideoJsFn>

type VideoSource = {
  src: string
  type: string // video/mp4
}

type VideoJsProps = {
  autoplay: boolean
  controls: boolean
  responsive: boolean
  fluid: boolean
  fullPage: boolean
  sources: VideoSource[]
  onReady?: (player: Player, videojs: VideoJsFn) => void
}

export const VideoJs = ({ onReady, fullPage, ...options }: VideoJsProps) => {
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
  }, [videoRef, options, onReady])

  useFullpage(videoRef, fullPage)

  return (
    <div className={fullPage ? 'videojs-container fullpage' : ''}>
      <div ref={videoRef} data-vjs-player />
    </div>
  )
}

type VideoJsPlayerProps = {
  src: string
  fullPage?: boolean
}

export const VideoJsPlayer = ({ src, fullPage = false }: VideoJsPlayerProps) => {
  return (
    <VideoJs
      autoplay={false}
      controls={true}
      responsive={true}
      fluid={true}
      fullPage={fullPage}
      sources={[{ src, type: 'video/mp4' }]}
    />
  )
}
