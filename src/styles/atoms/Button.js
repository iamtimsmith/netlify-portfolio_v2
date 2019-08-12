import { Link } from 'gatsby';
import styled from 'styled-components';


const ButtonBase = props => `
    border: 2px solid ${props.color ? props.color : props.theme.colors.black};
    padding: 10px 20px;
    font-size: 1.6rem;
    font-family: ${props.theme.fonts.sans};
    background: none;
    color: ${props.color ? props.color : props.theme.colors.black};
    cursor: pointer;
    transition: all 0.25s;

    &:hover {
      background: ${props.color ? props.color : props.theme.colors.black};
      color: ${props.theme.colors.white};
    }

    ${props.primary && `
      border: 2px solid ${props.theme.colors.primary};
      color: ${props.theme.colors.primary};

      &:hover {
        background: ${props.theme.colors.primary};
      }
    `}

    ${props.warning && `
      border: 2px solid ${props.theme.colors.warning} !important;
      color: ${props.theme.colors.warning};

      &:hover {
        background: ${props.theme.colors.warning};
      }
    `}
`;

export const Button = styled.button`
  ${ButtonBase}
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  ${ButtonBase}
`;

export const Submit = styled.input.attrs({ type: 'submit' })`
  ${ButtonBase}
`;