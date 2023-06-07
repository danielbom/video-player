import YouTube from 'react-youtube'
import './index.css'

type YoutubePlayerProps = {
  src: string
  fullPage?: boolean
}

export function YoutubePlayer({ src, fullPage }: YoutubePlayerProps) {
  return <YouTube videoId={extractVideoIdFromUrl(src)} iframeClassName={fullPage ? 'fullpage' : ''} />
}

function extractVideoIdFromUrl(url: string) {
  const match = url.match(/v=([^&]+)/)
  if (!match) return undefined
  return match[1]
}
