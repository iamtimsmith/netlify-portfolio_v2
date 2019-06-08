import styled from 'styled-components'
import { RGBA } from '../helpers/Functions'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid ${RGBA(`black`, 0.08)};
  box-shadow: 0.2rem 0.2rem 0.5rem ${RGBA(`black`, 0.05)};
  border-radius: ${({ rounded }) => (rounded ? `5px` : `0px`)};
`
const CardImage = styled.div`
  max-width: 100%;
  img {
    max-width: 100%;
  }
`
const CardContent = styled.div`
  padding: 2rem;
`

export { Card, CardImage, CardContent }
