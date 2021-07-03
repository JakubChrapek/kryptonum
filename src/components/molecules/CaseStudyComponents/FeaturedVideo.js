import React from "react"
import ReactPlayer from "react-player/youtube"
import styled from "styled-components"

const VideoWrapper = styled.div`
  height: 0;
  width: 100%;
  overflow: hidden;
  padding-top: 47%;
  margin-top: 192px;
  position: relative;
  pointer-events: none;
  > * {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${({ bg }) => bg};
    padding: 103px 155px;
  }
`

const FeaturedVideo = ({ url, previewImage, bg }) => {
  return (
    <VideoWrapper bg={bg}>
      <ReactPlayer
        muted={true}
        loop={true}
        playing={true}
        volume={0}
        controls={false}
        width="100%"
        height="100%"
        url={url}
      />
    </VideoWrapper>
  )
}

export default FeaturedVideo
