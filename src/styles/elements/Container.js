import styled from 'styled-components'
import { BreakPoints, ContainerWidth } from '../helpers/Variables'

const Container = styled.div`
  max-width: ${ContainerWidth.Desktop};
  margin: 0 auto;

  @media (${BreakPoints.WideScreen}) {
    max-width: ${ContainerWidth.WideScreen};
  }

  @media (${BreakPoints.FullHD}) {
    max-width: ${ContainerWidth.FullHD};
  }
`

export default Container
