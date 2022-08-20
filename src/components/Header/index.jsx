import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Content, Logo, Button } from './styles';

export default function Header({title}) {
  return (
    <Container>
      <Content>
        <div>
          <Logo>{title}</Logo>
        </div>
        <div>
          <Link to="/">
            <Button>Voltar</Button>
          </Link>
        </div>
      </Content>
    </Container>
  )
}

