import React from 'react';
import { Link } from 'react-router-dom';
import {
  CardButton, 
  BtnEdit, 
  BtnRead, 
  BtnDelete,
} from './styles'

export default function BtnCard() {
  return (
    <CardButton>
      <Link to="/edit">
        <BtnEdit>Edit</BtnEdit>
      </Link>
      <Link to="/readmore">
        <BtnRead>Ler Mais</BtnRead>
      </Link>
      <Link to="/404">
        <BtnDelete>Delete</BtnDelete>
      </Link>
    </CardButton>
  )
}
