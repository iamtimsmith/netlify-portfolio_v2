import tinycolor from 'tinycolor2'
import { Typography } from './Variables'

const GetSize = size => {
  let fontSize
  switch (size) {
    case `md`:
      fontSize = `1.5rem 2.5rem`
      break
    case `lg`:
      fontSize = `2rem 3rem`
      break
    default:
      fontSize = Typography.ParagraphFontSize
  }
  return fontSize
}

const RGBA = (color, alpha) => {
  let value, result
  value = tinycolor(color)
  value.toRgb()
  value.setAlpha(alpha)
  result = value.toRgbString()
  return result
}

const ScrollNav = (top, trigger, color) => {
  let background = color
  if (top > trigger) {
    background = color
  }
  console.log(background)
  return background
}

export { GetSize, RGBA, ScrollNav }
