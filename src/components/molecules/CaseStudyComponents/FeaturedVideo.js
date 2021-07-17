import React from "react"
import ReactPlayer from "react-player/youtube"
import styled from "styled-components"

const VideoWrapper = styled.div`
  height: 0;
  width: 100%;
  overflow: hidden;
  padding-top: 59%;
  margin-top: 192px;
  @media (max-width: 767px) {
    margin-top: 102px;
  }
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
    @media (max-width: 1140px) {
      padding: 50px 81px;
    }
    @media (max-width: 1024px) {
      padding: 40px 65px;
    }
    @media (max-width: 767px) {
      padding: 0;
    }
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
        onContextMenu={e => e.preventDefault()}
        width="100%"
        height="100%"
        url={url}
        playsinline={true}
        config={{ youtube: { playerVars: { disablekb: 1 } } }}
      />
    </VideoWrapper>
  )
}

export default FeaturedVideo
