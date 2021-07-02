import React from "react"
import ReactPlayer from "react-player/youtube"
import styled from "styled-components"

const VideoWrapper = styled.div`
  height: 0;
  overflow: hidden;
  padding-top: 47%;
  background: gray;
  position: relative;
  > * {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`

const FeaturedVideo = () => {
  return (
    <VideoWrapper>
      <ReactPlayer
        width="100%"
        height="100%"
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
      />
    </VideoWrapper>
  )
}

export default FeaturedVideo
