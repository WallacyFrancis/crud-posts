import * as yup from 'yup';

export const formSchema = yup.object().shape({
  title: yup
    .string()
    .nullable()
    .required('Campo obrigatório')
    .max(30, "Este campo deve ter até 30 caracteres"),
  description: yup
    .string()
    .nullable()
    .required('Campo obrigatório')
    .max(100, "Este campo deve até 100 caracteres"),
  content: yup
    .string()
    .nullable()
    .required('Campo obrigatório')
    .max(400, "Este campo deve ter até 400 caracteres"),
});
