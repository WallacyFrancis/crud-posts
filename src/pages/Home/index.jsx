import React from 'react';
import HeaderMain from '../../components/HeaderMain';
import Card from '../../components/Card';
import BtnCard from '../../components/BtnCard';

export default function Home() {
  return (
    <>
      <HeaderMain />
      <Card 
        title="Consumindo API's com ReactJs"
        content="Esta aplicação é utilizada para fazer a requisição de uma api inter com controler de react-hook-form"
      >
        <BtnCard />
      </Card>
    </>
  )
}
