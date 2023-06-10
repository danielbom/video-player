import { useEffect } from 'react'
import useWindowSize from './useWindowSize'

export default function useFullpage(videoRef: React.RefObject<HTMLElement>, fullPage?: boolean) {
  const { width, height } = useWindowSize()
  useEffect(() => {
    if (!videoRef.current) return
    if (!fullPage) return
    const size = Math.min(width, height) - 8
    videoRef.current.style.width = `${size * 1.777}px`
    videoRef.current.style.height = `${size}px`
  }, [fullPage, width, height, videoRef])
}
