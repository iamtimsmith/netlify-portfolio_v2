import styled from 'styled-components'
import Theme from '../helpers/Theme';

const PortfolioItem = styled.div`
  max-width:100%;
  width:100%;
  position:relative;
  background: ${Theme.Primary};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  color: #fff;
  font-family: $serif;
  &:after {
    content:'';
    display:block;
    padding-bottom:100%;
  }
  a {
    text-decoration:none;
    div {
      position:relative;
      opacity:0;
      z-index:1;
      transition: ${Theme.Utilities.SlowTransition};
      p {
        text-align:center;
        color:white;
        font-family: ${Theme.Typography.Serif};
        &:nth-child(1) {
          font-size: ${Theme.Typography.H3FontSize};
        }
        &:nth-child(3) {
          font-size: ${Theme.Typography.H5FontSize};
        }
      }
      span {
        display: block;
        margin: 5px auto;
        padding-bottom: 1px;
        height: 0;
        width: 0;
        transition: all 0.75s ease;
      }
    }

    .gatsby-image-wrapper {
      position:absolute !important;
      top:0;
      bottom:0;
      left:0;
      right:0;
      z-index:0;
      opacity:1;
      transition: ${Theme.Utilities.SlowTransition};
      img {
        transform: scale(1,1);
        transition: ${Theme.Utilities.SlowTransition} !important;
      }
    }
  }

  &:hover {
    div {
      opacity: 1;
      span {
        width: 20%;
        background: white;
      }
    }
    .gatsby-image-wrapper {
      opacity:0.5;
      img {
        opacity: 0.5;
        transform: scale(1.3, 1.3);
      }
    }
  }

  @media (${Theme.BreakPoints.Tablet}) {
    width: calc(100% /2);
  }

  @media (${Theme.BreakPoints.Desktop}) {
    width: calc(100% / 3);
  }
`

export default PortfolioItem