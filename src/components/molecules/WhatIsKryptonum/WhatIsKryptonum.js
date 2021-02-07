import React from "react"
import tmp from "../../../images/home-bg.jpg"
import { IoIosArrowRoundDown } from "react-icons/io"

import { SectionStyles } from "../../atoms/WhatIsKryptonumGrid/SectionStyles"
import { CreativeSection } from "../../atoms/WhatIsKryptonumGrid/CreativeSection"
import { WhatIsKryptonumWrapper } from "../../atoms/WhatIsKryptonumGrid/WhatIsKryptonumWrapper"
import { Passion } from "../../atoms/WhatIsKryptonumGrid/Passion"
import { Creativity } from "../../atoms/WhatIsKryptonumGrid/Creativity"
import { Focus } from "../../atoms/WhatIsKryptonumGrid/Focus"
import { Works } from "../../atoms/WhatIsKryptonumGrid/Works"
import { FirstRow } from "../../atoms/WhatIsKryptonumGrid/FirstRow"
import { SecondRow } from "../../atoms/WhatIsKryptonumGrid/SecondRow"
import { ThirdRow } from "../../atoms/WhatIsKryptonumGrid/ThirdRow"
import { CreativeRow } from "../../atoms/WhatIsKryptonumGrid/CreativeRow"

const WhatIsKryptonum = () => {
  return (
    <>
      <SectionStyles>
        <WhatIsKryptonumWrapper>
          <FirstRow>
            <h2>
              What is
              <br />
              Kryptonum
            </h2>
            <Passion>
              <span>Pa</span>
              <div>
                <h3>Passion</h3>
                <p>We treat our job as art. With love and passion.</p>
              </div>
            </Passion>
          </FirstRow>
          <SecondRow>
            <p>
              First of all, Kryptonum is a collective work of passion and
              professionalism. We’re a unique team of like-minded professionals
              from all over the world, all the best specialists in their
              respected fields. Kryptonum is your best choice when it comes to
              complex website design. See for yourself!
            </p>
            <div className="img-wrapper">
              <img src={tmp} alt="" />
            </div>
            <Focus>
              <span>Fo</span>
              <div>
                <h3>Focus</h3>
                <p>We set the goals and always reach them.</p>
              </div>
            </Focus>
          </SecondRow>
          <ThirdRow>
            <Works>
              <span>Works</span>
              <IoIosArrowRoundDown
                size="112px"
                title="Arrow pointing down"
                color="rgba(178,178,178,0.2)"
              />
            </Works>
            <Creativity hasDeclaredTransform={true}>
              <span>Cr</span>
              <div>
                <h3>Creativity</h3>
              </div>
            </Creativity>
          </ThirdRow>
        </WhatIsKryptonumWrapper>
      </SectionStyles>
      <CreativeSection>
        <WhatIsKryptonumWrapper>
          <CreativeRow>
            <Creativity hasDeclaredTransform={false}>
              <div>
                <p>Boredom is our worst enemy.</p>
              </div>
            </Creativity>
          </CreativeRow>
        </WhatIsKryptonumWrapper>
      </CreativeSection>
    </>
  )
}

export default WhatIsKryptonum
