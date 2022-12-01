import React, { useState, useRef } from "react"
import ReactAudioPlayer from "react-audio-player"

import Image, { PLAY_ICON, PAUSE_ICON } from "./image"

const MiniPlayer = () => {
  const audioPlayer = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [canPlay, setCanPlay] = useState(false)

  function play() {
    if (audioPlayer.current && typeof audioPlayer.current.play === "function") {
      audioPlayer.current.play().then(() => setIsPlaying(true))
    }
  }

  function pause() {
    if (audioPlayer.current && typeof audioPlayer.current.play === "function") {
      audioPlayer.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <React.Fragment>
      <ReactAudioPlayer
        ref={el => (audioPlayer.current = el && el.audioEl)}
        onCanPlay={() => setCanPlay(true)}
        src="https://mcdn.podbean.com/mf/web/2r5w3p/om-2019-astor-place.mp3"
      />
      {canPlay && (
        <div style={{ width: 50 }}>
          {isPlaying ? (
            <button style={{ width: "100%" }} onClick={() => play()}>
              <Image alt="pause audio button" imageName={PAUSE_ICON} />
            </button>
          ) : (
            <button style={{ width: "100%" }} onClick={() => pause()}>
              <Image alt="play audio button" imageName={PLAY_ICON} />
            </button>
          )}
        </div>
      )}
    </React.Fragment>
  )
}

export default MiniPlayer
