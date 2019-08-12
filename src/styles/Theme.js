const breakpoints = {
  tablet: 787,
  desktop: 1200
}

export default {
  colors: {
    black: '#222222',
    blue: '#3232FF',
    grey: '#e1e1e1',
    white: '#ffffff',
    primary: 'teal',
    warning: 'goldenrod',
  },
  fonts: {
    sans: 'sans-serif',
    serif: 'serif'
  },
  mq: {
    tablet: `@media screen and (min-width: ${breakpoints.tablet})`
  }
}