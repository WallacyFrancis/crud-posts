import React from 'react';
import { Container, Label, TextArea, P } from './styles'

export default function Textarea({label, name, props, message, value}) {
  return (
    <Container>
      <Label>{label}
        <TextArea cols="30" rows="8" name={name} {...props} value={value}  />
      </Label>
      <P>{message}</P>
    </Container>
  )
}
