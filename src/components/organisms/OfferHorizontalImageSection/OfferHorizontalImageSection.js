import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const WideImage = styled(GatsbyImage)`
  aspect-ratio: 1440/501;
  @media (max-width: 767px) {
    aspect-ratio: 768/267;
  }
  @media (max-width: 640px) {
    aspect-ratio: 360/300;
  }
`

const OfferHorizontalImageSection = ({ data }) => {
  const images = withArtDirection(getImage(data.largeImage), [
    {
      media: "(max-width: 640px)",
      image: getImage(data.smallImage),
    },
  ])
  return <WideImage image={images} />
}

export default OfferHorizontalImageSection
