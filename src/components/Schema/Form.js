import * as yup from 'yup';

export const formSchema = yup.object().shape({
  title: yup.string().nullable().required('Campo obrigatório'),
  description: yup.string().nullable().required('Campo obrigatório'),
  content: yup.string().nullable().required('Campo obrigatório'),
})