import React from 'react';
import Header from '../../components/Header';
import { useForm } from 'react-hook-form';
import Card from '../../components/Card';
import Form from '../../components/Form';
import Fieldset from '../../components/Fieldset';
import InputForm from '../../components/InputForm';
import Textarea from '../../components/Textarea';
import BtnForm from '../../components/BtnForm';

export default function Posts() {
  const { register, handleSubmit, formState: {errors} } = useForm();
  return (
    <>
      <Header title="CRIAR POST" />
      <Card 
        title="New Post"
        content={
          <Form>
            <Fieldset>
              <InputForm label="Título" />
            </Fieldset>
            <Fieldset>
              <InputForm label="Descrição" />
            </Fieldset>
            <Fieldset>
              <Textarea label="Conteúdo" />
            </Fieldset>
          </Form>
        }
      >
        <BtnForm />
      </Card>
    </>
  )
}
