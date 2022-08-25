import React from 'react';
import { 
  Container, 
  Content, 
  CardHeader, 
  Line, 
  CardContent, 
} from './styles';

export default function Card({title, content, children}) {
  return (
    <Container>
      <Content>
        <CardHeader>
          {title}
        </CardHeader>
        <Line />
        <CardContent>
          {content}
        </CardContent>
        {children}
      </Content>
    </Container>
  )
}
