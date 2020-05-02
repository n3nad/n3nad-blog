import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'
import gray from 'gray-percentage'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

Wordpress2016.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography({
  ...Wordpress2016,
  ...{
    headerFontFamily: ['Lato', 'sans-serif'],
    bodyFontFamily: ['Lato', 'serif'],
    overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
      h1: {
        fontFamily: ['Abril Fatface', 'sans-serif'].join(','),
      },
      blockquote: {
        ...scale(1 / 5),
        color: gray(41),
        fontStyle: 'italic',
        paddingLeft: rhythm(13 / 16),
        marginLeft: rhythm(-1),
        borderLeft: `${rhythm(3 / 16)} solid #ef5466`,
      },
      'blockquote > :last-child': {
        marginBottom: 0,
      },
      'blockquote cite': {
        ...adjustFontSizeTo(options.baseFontSize),
        color: options.bodyColor,
        fontWeight: options.bodyWeight,
      },
      'blockquote cite:before': {
        content: '"— "',
      },
      ul: {
        listStyle: 'disc',
      },
      'ul,ol': {
        marginLeft: 0,
      },
      [MOBILE_MEDIA_QUERY]: {
        'ul,ol': {
          marginLeft: rhythm(1),
        },
        blockquote: {
          marginLeft: rhythm(-3 / 4),
          marginRight: 0,
          paddingLeft: rhythm(9 / 16),
        },
      },
      'h1,h2,h3,h4,h5,h6': {
        marginTop: rhythm(2),
      },
      h4: {
        letterSpacing: '0.140625em',
        textTransform: 'uppercase',
      },
      h6: {
        fontStyle: 'italic',
      },
      a: {
        boxShadow: '0 1px 0 0 currentColor',
        color: '#ef5466',
        textDecoration: 'none',
      },
      'a:hover,a:active': {
        boxShadow: 'none',
      },
      'mark,ins': {
        background: '#007acc',
        color: 'white',
        padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
        textDecoration: 'none',
      },
    }),
  },
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
