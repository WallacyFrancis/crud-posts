import React from 'react';
import Header from '../../components/Header';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import Card from '../../components/Card';
import Form from '../../components/Form';
import Fieldset from '../../components/Fieldset';
import InputForm from '../../components/InputForm';
import Textarea from '../../components/Textarea';
import BtnForm from '../../components/BtnForm';
import { formSchema } from '../../components/Schema/Form';

export default function Posts() {
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => { console.log(data)}

  return (
    <>
      <Header title="CRIAR POST" />
      <Card 
        title="New Post"
        content={
          <Form handleSubmit={handleSubmit(onSubmit)}>
            <Fieldset>
              <InputForm 
                label="Título" 
                name="title"
              />
            </Fieldset>
            <Fieldset>
              <InputForm
                label="Descrição"
                name="description"
              />
            </Fieldset>
            <Fieldset>
              <Textarea
                label="Conteúdo"
                name="content" 
              />
            </Fieldset>
            <BtnForm />
          </Form>
        }
      />
    </>
  )
}
