import styled from 'styled-components';

const BaseInput = props => `
  border: 1px solid ${props.theme.colors.black};
  padding: 10px;
  font-family: ${props.theme.fonts.sans};
  font-size: 1.6rem;
  display: block;
  width: 100%;
`;

export const TextInput = styled.input.attrs({ type: 'text' })`
  ${BaseInput}
`;

export const EmailInput = styled.input.attrs({ type: 'email' })`
  ${BaseInput}
`;

export const PhoneInput = styled.input.attrs({ type: 'tel' })`
  ${BaseInput}
`;

export const TextArea = styled.textarea`
  ${BaseInput}
  height: 120px;
  margin: 0;
  resize: none;
`;