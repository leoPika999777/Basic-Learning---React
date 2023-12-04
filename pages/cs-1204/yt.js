import React from 'react'
// 以下元件要先裝才能用，`npm install react-youtube`
import YouTube from 'react-youtube'

export default function Yt() {
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }

  return <YouTube videoId="IJT51et7owQ" opts={opts} onReady={onPlayerReady} />
}