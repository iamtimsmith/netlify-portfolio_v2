import React from 'react';
import { ThemeProvider, withTheme } from 'styled-components';
import Theme from '../../styles/Theme';
import { GlobalStyle } from '../../styles/atoms/Global';
import { H1, H2, H3, H4, H5, P, A } from '../../styles/atoms/Typography';
import { Button, ButtonLink, Submit } from '../../styles/atoms/Button';
import { TextInput, EmailInput, PhoneInput, TextArea } from '../../styles/atoms/Input';
import { Container } from '../../styles/atoms/Container';
import { HR } from '../../styles/atoms/HR';
import { Section } from '../../styles/atoms/Section';

const Atoms = props => (
  <ThemeProvider theme={Theme}>
    <Container>
      <GlobalStyle />
      <Section>
        <A href='#typography'>1. Typography</A>
        <A href='#buttons'>2. Buttons</A>
      </Section>

      <Section>
        <H1 id='typography'>Typography</H1>
        <HR />
        <H1>Heading 1</H1>
        <H2>Heading 2</H2>
        <H3>Heading 3</H3>
        <H4>Heading 4</H4>
        <H5>Heading 5</H5>
        <P>This is a paragraph</P>
      </Section>

      <Section>
        <H1 id='buttons'>Buttons</H1>
        <HR />
        <Button>This is a Button</Button>
        <ButtonLink to='/' color='red'>This is a ButtonLink</ButtonLink>
        <Submit value='This is a Submit' color='teal' />
        <Button>This is a Primary Button</Button>
        <Button warning>This is a Warning Button</Button>
      </Section>

      <Section>
        <H1>Inputs</H1>
        <HR />
        <TextInput placeholder='Text Input' />
        <EmailInput placeholder='test@test.com' />
        <PhoneInput placeholder='555-555-5555' />
        <TextArea placeholder='This is a text area' />
      </Section>
    </Container>
  </ThemeProvider>
)

export default withTheme(Atoms);