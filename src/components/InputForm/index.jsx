import React from 'react';
import { Container, Label, Input, P } from './styles'

export default function InputForm({ label, name, message, props, value }) {
  return (
    <Container>
      <Label>{label}
        <Input type="text" name={name} {...props} value={value} />
      </Label>
      <P>{message}</P>
    </Container>
  )
}
