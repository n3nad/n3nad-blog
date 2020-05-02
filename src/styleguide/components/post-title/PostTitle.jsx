import React from 'react'
import { rhythm, scale } from '../../global/typography'

function PostTitle({ children, date }) {

  return (
    <header>
      <h1
        style={{
          marginTop: rhythm(1),
          marginBottom: 0,
          fontFamily: `Abril Fatface, serif`,
        }}>
        {children}
      </h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          fontFamily: `Lato, sans-serif`,
        }}>
        {date}
      </p>
    </header>
  )
}

export default PostTitle
