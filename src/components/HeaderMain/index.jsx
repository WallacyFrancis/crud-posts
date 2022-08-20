import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Content, Logo, Button } from './styles';

export default function HeaderMain() {
  return (
    <Container>
      <Content>
        <div>
          <Logo>POST - CRUD</Logo>
        </div>
        <div>
          <Link to="/posts">
            <Button>Add new post</Button>
          </Link>
        </div>
      </Content>
    </Container>
  )
}
