import React from 'react';
import { Label, TextArea } from './styles'

export default function Textarea({label}) {
  return (
    <>
      <Label>{label}
        <TextArea name="" id="" cols="30" rows="10" />
      </Label>
    </>
  )
}
