import React from 'react'

import { rhythm } from './typography'

function Layout() {
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}>
      <main>{this.props.children}</main>
    </div>
  )
}

export default Layout
