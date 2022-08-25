import React, { useEffect } from 'react';
import Header from '../../components/Header';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Form from '../../components/Form';
import Fieldset from '../../components/Fieldset';
import InputForm from '../../components/InputForm';
import Textarea from '../../components/Textarea';
import BtnForm from '../../components/BtnForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { formSchema } from '../../schema/Form';
import { update, getOne } from '../../utils/service';

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: {errors}, reset } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data) => { 
    update(`/posts/${id}`, data);
    navigate('/', { replace: true });
  };

  const getById = async () => {
    const { data } = await getOne(`/posts/${id}`);
    reset(data);
  }

  useEffect(() => {
    getById();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Header title="EDITAR POST" />
      <Card 
          title="Edit Post"
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
