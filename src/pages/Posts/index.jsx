import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import Card from '../../components/Card';
import Form from '../../components/Form';
import Fieldset from '../../components/Fieldset';
import InputForm from '../../components/InputForm';
import Textarea from '../../components/Textarea';
import BtnForm from '../../components/BtnForm';
import { formSchema } from '../../schema/Form';
import { post } from '../../utils/service';

export default function Posts() {
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data) => { 
    post('/posts', data);
    navigate('/', { replace: true });
  };
  
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
                props={register("title")}
                message={errors.title?.message}
              />
            </Fieldset>
            <Fieldset>
              <InputForm
                label="Descrição"
                name="description"
                props={register("description")}
                message={errors.description?.message}
              />
            </Fieldset>
            <Fieldset>
              <Textarea
                label="Conteúdo"
                name="content"
                props={register("content")}
                message={errors.content?.message} 
              />
            </Fieldset>
            <BtnForm />
          </Form>
        }
      />
    </>
  )
}
