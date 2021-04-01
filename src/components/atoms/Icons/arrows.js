import React from "react"

export const RightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="39"
    height="27"
    viewBox="0 0 39 27"
  >
    <defs>
      <clipPath id="5z1nn9j37a">
        <path fill="none" d="M0 0H39V27H0z" />
      </clipPath>
    </defs>
    <g clip-path="url(#5z1nn9j37a)">
      <path d="M26.113 0l-1.7 1.985s7.122 7.147 10.174 9.926C23.882 11.8 0 11.912 0 11.912v2.382s23.89-.087 34.591 0c-3.052 3.176-10.174 10.324-10.174 10.324L26.113 27 39 13.1z" />
    </g>
  </svg>
)

export const DownArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="86"
    viewBox="0 0 60 86"
  >
    <defs>
      <clipPath id="m3suuhxfpa">
        <path fill="none" d="M0 0H60V86H0z" />
      </clipPath>
    </defs>
    <g clip-path="url(#m3suuhxfpa)">
      <path
        fill="#f7f8fa"
        d="M57.583 0l-3.74 4.412s15.7 15.882 22.435 22.059c-23.615-.246-76.278 0-76.278 0v5.294s52.68-.192 76.278 0c-6.73 7.059-22.435 22.941-22.435 22.941L57.583 60 86 29.118z"
        transform="rotate(90 30 30)"
      />
    </g>
  </svg>
)

export const LeftArrowPagination = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40.681"
    height="13.232"
    viewBox="0 0 40.681 13.232"
  >
    <g id="arrow-left" transform="translate(-395.819 -294.826)">
      <line
        id="arrow-body"
        x2="39"
        transform="translate(397.5 301.651)"
        fill="none"
        stroke={color ? color : "#171717"}
        stroke-width="2"
      />
      <path
        id="arrow-front"
        d="M404.782,297.019l-7.353,6.077,7.353,5.588"
        transform="translate(0 -1.422)"
        fill="none"
        stroke={color ? color : "#171717"}
        stroke-width="2"
      />
    </g>
  </svg>
)

export const RightArrowPagination = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40.681"
    height="13.232"
    viewBox="0 0 40.681 13.232"
  >
    <g id="arrow-right" transform="translate(436.5 308.059) rotate(180)">
      <line
        id="arrow-body"
        x2="39"
        transform="translate(397.5 301.651)"
        fill="none"
        stroke={color ? color : "#171717"}
        stroke-width="2"
      />
      <path
        id="arrow-front"
        d="M404.782,297.019l-7.353,6.077,7.353,5.588"
        transform="translate(0 -1.422)"
        fill="none"
        stroke={color ? color : "#171717"}
        stroke-width="2"
      />
    </g>
  </svg>
)

export const TopArrowGoUp = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13.232"
    height="40.681"
    viewBox="0 0 13.232 40.681"
    style={{ transform: "rotate(-90deg)" }}
  >
    <g id="arrow-top" transform="translate(308.059 -395.819) rotate(90)">
      <line
        id="arrow-body"
        x2="39"
        transform="translate(397.5 301.651)"
        fill="none"
        stroke={color ? color : "#171717"}
        stroke-width="2"
      />
      <path
        id="arrow-front"
        d="M404.782,297.019l-7.353,6.077,7.353,5.588"
        transform="translate(0 -1.422)"
        fill="none"
        stroke={color ? color : "#171717"}
        stroke-width="2"
      />
    </g>
  </svg>
)
