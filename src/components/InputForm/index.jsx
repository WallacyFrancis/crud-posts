import React from 'react';
import { Container, Label, Input, P } from './styles'

export default function InputForm({ label, name, message, props }) {
  return (
    <Container>
      <Label>{label}
        <Input type="text" name={name} {...props} />
      </Label>
      <P>{message}</P>
    </Container>
  )
}
