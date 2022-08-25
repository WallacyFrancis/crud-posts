import React from 'react';
import { Link } from 'react-router-dom';
import {
  CardButton, 
  BtnEdit, 
  BtnRead, 
  BtnDelete,
} from './styles';

export default function BtnCard({id, handleDelte}) {
  return (
    <CardButton>
      <Link to={`/edit/${id}`}>
        <BtnEdit>Edit</BtnEdit>
      </Link>
      <Link to={`/readmore/${id}`}>
        <BtnRead>Ler Mais</BtnRead>
      </Link>
        <BtnDelete onClick={handleDelte}>Delete</BtnDelete>
    </CardButton>
  )
}
