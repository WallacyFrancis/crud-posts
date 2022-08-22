import * as yup from 'yup';

export const formSchema = yup.object().shape({
  title: yup.string().nullable().required('Campo obrigatório').max(30, "Este campo deve ter até 30 caracteres"),
  description: yup.string().nullable().required('Campo obrigatório').max(50, "Este campo deve ter até 50 caracteres"),
  content: yup.string().nullable().required('Campo obrigatório').max(300, "Este campo deve ter até 300 caracteres"),
})