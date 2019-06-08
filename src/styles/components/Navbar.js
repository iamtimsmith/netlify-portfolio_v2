import styled from 'styled-components'
import Theme from '../helpers/Theme'

const Break = 650;

const Navbar = styled.nav`
  background: ${Theme.Primary};
  position:fixed;
  top:0;
  left:0;
  right:0;
  z-index:99;
  transition: ${Theme.Utilities.QuickTransition};
  >div {
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 2rem;
    // Navbar Brand
    > a {
      font-size: 3.2rem;
      font-family: ${Theme.Typography.Serif};
      color: white;
      text-decoration: none;
      padding: 7.5px 0;
      transition: ${Theme.Utilities.QuickTransition};
    }
    > ul {
      list-style: none;
      display: none;
      margin: 0;
      li {
        a {
          display: block;
          text-decoration: none;
          color: white;
          padding: 2rem;
          transition: ${Theme.Utilities.QuickTransition};
        }
      }
    }
  }
  @media (${Theme.BreakPoints.Desktop}) {
    background: ${({ scrollPosition, page }) => page === 'home' && scrollPosition < Break ? `none` : Theme.Primary};
    > div {
      padding: 0;
      > a {
        opacity: ${({ scrollPosition, page }) => page === 'home' && scrollPosition < Break ? `0` : `1`}
        visibility: ${({ scrollPosition, page }) => page === 'home' && scrollPosition < Break ? `hidden` : `visible`}
        color: ${({ scrollPosition, page }) => page === 'home' && scrollPosition < Break ? Theme.Primary : `white`};
      }
      > ul {
        display:flex;
        li {
          a {
            color: ${({ scrollPosition, page }) => page === 'home' && scrollPosition < Break ? Theme.Primary : `white`};
          }
        }
      }
    }
  }
`;

export default Navbar;