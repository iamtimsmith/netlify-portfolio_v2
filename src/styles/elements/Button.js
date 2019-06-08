import styled from 'styled-components'
import { Colors } from '../helpers/Variables'
import { RGBA, GetSize } from '../helpers/Functions'

/**
 * Available Props:
 * color: The background color of the button
 * text: The text color for the button
 * size: The button size, default is small (available options are md, lg, xl)
 * hollow: This is a boolean value if the button should be hollow
 */

const Button = styled.button`
  background-color: ${({ color }) =>
    color ? RGBA(color, 0.8) : RGBA(Colors.Primary, 0.8)};
  color: ${({ text }) => (text ? text : `white`)};
  margin: 5px;
  padding: 0.8rem 1.6rem;
  border: 2px solid rgba(0, 0, 0, 0);
  font-size: ${({ size }) => GetSize(size)};
  position: relative;
  cursor: pointer;
  border-radius: ${({ rounded }) => (rounded ? `5rem` : `0`)};
  transition: all 0.25s;

  ${({ hollow, color }) =>
    hollow && {
      background: `rgba(0,0,0,0)`,
      borderColor: color ? RGBA(color, 1) : RGBA(Colors.Primary, 1),
      color: color ? RGBA(color, 1) : RGBA(Colors.Primary, 1),
    }}

  :hover {
    background-color: ${({ color }) =>
      color ? RGBA(color, 1) : RGBA(Colors.Primary, 1)};
    ${({ hollow, text }) =>
      hollow && {
        color: text ? text : `white`,
      }}
  }
  :active {
    background-color: ${({ color }) =>
      color ? RGBA(color, 0.8) : RGBA(Colors.Primary, 0.8)};
  }
`

export default Button
