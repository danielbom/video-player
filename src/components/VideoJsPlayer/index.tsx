import { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

// https://videojs.com/guides/react/

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
  onReady?: (player: videojs.Player, videojs: typeof videojs) => void
}

export const VideoJs = ({ onReady, ...options }: VideoJsProps) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
      const videoElement = document.createElement("video-js");
      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player, videojs);
      });
    } else {
			// You could update an existing player in the `else` block here
			// on prop change, for example:
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }

    return () => {
			const player = playerRef.current;
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
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

