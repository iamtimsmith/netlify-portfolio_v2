import { createGlobalStyle } from 'styled-components'
import { Typography } from './Variables'

const Global = createGlobalStyle`
html {
  margin: 0;
  font-size: 10px;
  font-family: ${props => props.theme.Typography.SansSerif};
  * {
    box-sizing:border-box;
  }
  body {
    margin: 0;
    font-size: ${Typography.ParagraphFontSize};
    font-weight: 400;

    p {
      font-size: ${Typography.ParagraphFontSize};
      font-weight: 400;
    }
    h1, h2, h3, h4, h5 {
      margin:1rem 0;
    }
    h1 {
      font-size: ${Typography.H1FontSize};
      font-family: ${Typography.Serif};
    }
    h2 {
      font-size: ${Typography.H2FontSize};
      font-family: ${Typography.Serif};
    }
    h3 {
      font-size: ${Typography.H3FontSize};
      font-family: ${Typography.Serif};
    }
    h4 {
      font-size: ${Typography.H4FontSize};
      font-family: ${Typography.Serif};
    }
    h5 {
      font-size: ${Typography.H5FontSize};
      font-family: ${Typography.Serif};
    }
    hr {
      opacity: 0.1;
    }
  }
}
`

export default Global
