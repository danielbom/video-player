import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
  MediaPlaybackRateButton,
} from 'media-chrome/dist/react'
import React, { useEffect, useRef } from 'react'
import useFullpage from '../../hooks/useFullpage'
import './index.css'

type MediaChromePlayerProps = {
  src: string
  fullPage?: boolean
}

export const MediaChromePlayer = ({ src, fullPage }: MediaChromePlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useRestoreCurrentTime(videoRef, src)
  useIntervalToSaveCurrentTime(videoRef)
  useFullpage(videoRef, fullPage)

  return (
    <div className={fullPage ? 'media-controller-container fullpage' : ''}>
      <MediaController>
        <video
          ref={videoRef}
          slot="media"
          src={src}
          preload="auto"
          onDoubleClick={() => toggleFullscreenOnElement(videoRef.current!)}
          className={fullPage ? 'fullscreen' : ''}
        />
        <MediaControlBar>
          <MediaPlayButton></MediaPlayButton>
          <MediaTimeDisplay showDuration></MediaTimeDisplay>
          <MediaTimeRange></MediaTimeRange>
          <MediaPlaybackRateButton></MediaPlaybackRateButton>
          <MediaMuteButton></MediaMuteButton>
          <MediaVolumeRange className="display-on-hover"></MediaVolumeRange>
          <MediaSeekBackwardButton></MediaSeekBackwardButton>
          <MediaSeekForwardButton></MediaSeekForwardButton>
          <MediaFullscreenButton></MediaFullscreenButton>
        </MediaControlBar>
      </MediaController>
    </div>
  )
}

const SELECTED_EPISODE_KEY = 'selectedEpisode'
const CURRENT_TIME_KEY = 'currentTime'

function useRestoreCurrentTime(videoRef: React.RefObject<HTMLVideoElement>, src: string) {
  useEffect(() => {
    const id = setTimeout(() => {
      const lastEpisode = localStorage.getItem(SELECTED_EPISODE_KEY)

      if (lastEpisode !== src) {
        localStorage.setItem(SELECTED_EPISODE_KEY, src)
        localStorage.removeItem(CURRENT_TIME_KEY)
        return
      }

      const currentTime = localStorage.getItem(CURRENT_TIME_KEY)
      if (currentTime) {
        videoRef.current!.currentTime = parseFloat(currentTime)
      }
    }, 500)

    return () => clearTimeout(id)
  }, [videoRef, src])
}

function useIntervalToSaveCurrentTime(videoRef: React.RefObject<HTMLVideoElement>) {
  useEffect(() => {
    function saveCurrentTime() {
      if (videoRef.current && videoIsPlaying(videoRef.current)) {
        localStorage.setItem(CURRENT_TIME_KEY, videoRef.current.currentTime.toString())
      }
    }

    const id = setInterval(saveCurrentTime, 1000)
    return () => clearInterval(id)
  }, [videoRef])
}

async function toggleFullscreenOnElement(el: HTMLElement) {
  try {
    const isFullscreen = !!getFullscreenElement()

    if (isFullscreen) {
      await document.exitFullscreen()
    } else {
      await el.requestFullscreen()
    }
  } catch (err) {
    console.error(err)
  }
}

function getFullscreenElement(): Element | null {
  // https://stackoverflow.com/questions/59854885/how-to-play-html5-video-in-full-screen-on-button-click-in-react-js
  const doc = document as any
  if (typeof doc.fullscreenElement !== 'undefined') {
    return doc['fullscreenElement']
  } else if (typeof doc.mozFullScreenElement !== 'undefined') {
    return doc['mozFullScreenElement']
  } else if (typeof doc.msFullscreenElement !== 'undefined') {
    return doc['msFullscreenElement']
  } else if (typeof doc.webkitFullscreenElement !== 'undefined') {
    return doc['webkitFullscreenElement']
  } else {
    throw new Error('fullscreenElement is not supported by this browser')
  }
}

function videoIsPlaying(video: HTMLVideoElement) {
  return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2)
}
