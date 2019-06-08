import styled from 'styled-components'
import Theme from '../helpers/Theme'

const HeroSection = styled.section`
  color: ${Theme.Primary};
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  height:100vh;
  min-height:700px;
  overflow:hidden;

  .gatsby-image-wrapper {
    position:absolute !important;
    top: 0;
    bottom: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    right: 0;
    z-index: -1;
  }

  > div {
    text-align:center;
    h1 {
      font-size:4.8rem;
      font-weight:700;
      position: relative;
    }
    p {
      font-size:3.2rem;
      margin-bottom:4rem;
    }
  }
`;

const WorkSection = styled.section`
  display:flex;
  justify-content:center;
  flex-grow:1;
  flex-wrap:wrap;
`;

const ContactSection = styled.section`
border: 1px solid red;
`;

export { HeroSection, WorkSection, ContactSection }