import styled from 'styled-components'
import Theme from '../helpers/Theme'

const ToggleOffcanvas = styled.button`
  position:relative;
  z-index:101;
  outline: none;
  padding: 15px;
  background: none;
  border: none;
  span {
    content: '';
    display: block;
    height: 2px;
    width: 30px;
    background: ${props => props.open ? `none` : `white`};
    transition: ${Theme.Utilities.Transition};
    &:before,
    &:after {
      content: '';
      display: block;
      position:relative;
      height: 2px;
      width: 30px;
      background: white;
      transition: ${Theme.Utilities.Transition};
    }
    &:before {
      top: ${props => props.open ? `-1px` : ``};
      bottom: ${props => props.open ? `` : `9px`};
      transform: rotate(${props => props.open ? `45deg` : `0deg`});
    }
    &:after {
      top: ${props => props.open ? `-2px` : `7px`};
      transform: rotate(${props => props.open ? `-45deg` : `0deg`});
    }
  }
  @media (${Theme.BreakPoints.Desktop}) {
    display:none;
  }
`

export default ToggleOffcanvas