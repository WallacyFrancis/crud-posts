import React from 'react';
import { Container, Button } from './styles'

export default function BtnForm({ handleClick }) {
  return (
    <Container>
      <Button type="submit" onClick={handleClick}>Enviar</Button>
    </Container>
  )
}
