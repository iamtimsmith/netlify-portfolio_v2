const BreakPoints = {
  Mobile: `max-width: 768px`,
  Tablet: `min-width: 769px`,
  Desktop: `min-width: 1024px`,
  WideScreen: `min-width: 1216px`,
  FullHD: `min-width: 1408px`,
}

const Colors = {
  Primary: `#0C66A1`,
  Warning: `orange`,
  Danger: `red`,
  Success: `green`,
  Accent: `#f7f7f7`,
  Secondary: `#fff`,
}

const ContainerWidth = {
  Desktop: `960px`,
  WideScreen: `1152px`,
  FullHD: `1344px`,
}

const Typography = {
  SansSerif: `"Raleway", sans-serif`,
  Serif: `"Playfair Display", serif`,
  H1FontSize: `4rem`,
  H2FontSize: `3.2rem`,
  H3FontSize: `2.8rem`,
  H4FontSize: `2.4rem`,
  H5FontSize: `2rem`,
  ParagraphFontSize: `1.8rem`,
}

const Utilities = {
  Transition: `all 0.5s`,
  QuickTransition: `all 0.25s`,
  SlowTransition: `all 1s`
}

export { BreakPoints, Colors, ContainerWidth, Typography, Utilities }
