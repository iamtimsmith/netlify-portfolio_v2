import styled from 'styled-components'
import Theme from '../helpers/Theme'

const Offcanvas = styled.aside`
  background: ${Theme.Primary};
  position:fixed;
  top:0;
  bottom:0;
  left: ${props => props.open ? '0' : '-300px'};
  width: ${props => props.open ? '100%' : '300px'};
  z-index:100;
  display:flex;
  justify-content: center;
  align-items: center;
  overflow:hidden;
  transition: ${Theme.Utilities.Transition};
  >div {
    width:100%;
    height:90%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    ul {
      list-style:none;
      padding:0;
      text-align:center;
      &:nth-child(1) {
        li {
          a {
            display:block;
            color: white;
            text-decoration: none;
            font-size:3.8rem;
            margin:2.5rem 0;
          }
        }
      }
      &:nth-child(2) {
        display:flex;
        width:100%;
        justify-content:space-around;
        li {
          a {
            color: white;
            text-decoration: none;
            font-size:3.8rem;
          }
        }
      }
    }
  }
`

export default Offcanvas