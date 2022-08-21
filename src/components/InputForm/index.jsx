import React from 'react';
import { Label, Input } from './styles'

export default function InputForm({ label }) {
  return (
    <>
      <Label>{label}
        <Input type="text" />
      </Label>
    </>
  )
}
