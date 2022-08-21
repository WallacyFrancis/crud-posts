import React from 'react';
import { Field } from './styles';

export default function Fieldset({children}) {
  return (
    <>
      <Field>
        {children}
      </Field>
    </>
  )
}
