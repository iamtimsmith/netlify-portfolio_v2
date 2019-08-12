import styled from 'styled-components';

const Headings = props => `
  font-weight: 400;
  font-family: ${props => props.theme.fonts.serif};
  margin: 1rem 0;
`;

export const H1 = styled.h1`
  ${Headings}
  font-size: 4.2rem;
`;

export const H2 = styled.h2`
  ${Headings}
  font-size: 3.6rem;
`;

export const H3 = styled.h3`
  ${Headings}
  font-size: 3rem;
`;

export const H4 = styled.h4`
  ${Headings}
  font-size: 2.4rem;
`;

export const H5 = styled.h5`
  ${Headings}
  font-size: 1.8rem;
`;

const Paragraphs = props => `
  font-weight: 400;
  font-size: 1.6rem;
  font-family: ${props.theme.fonts.sans};
`;

export const P = styled.p`
  ${Paragraphs}
`;

export const A = styled.a`
  ${Paragraphs}
  color: ${props => props.theme.colors.blue};
  display: block;
`;