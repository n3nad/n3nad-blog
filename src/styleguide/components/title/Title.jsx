import React from 'react'

import { rhythm, scale } from '../../global/typography'

const STANDARD = 'standard'
const SMALL = 'small'

class Title extends React.Component {
  render() {
    const { children, size = STANDARD } = this.props
    let title

    if (size === STANDARD) {
      title = (
        <h1
          style={{
            ...scale(1.3),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            fontFamily: `Abril Fatface, sans-serif`,
            // color: '#F85759',
          }}>
          {children}
        </h1>
      )
    } else if (size === SMALL) {
      title = (
        <h3
          style={{
            marginTop: 0,
            fontFamily: `Abril Fatface, sans-serif`,
            color: '#EF5366',
          }}>
          {children}
        </h3>
      )
    }
    return (
      <header>{title}</header>
    )
  }
}

export default Title
