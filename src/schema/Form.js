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
    .min(40, "Este campo deve ter entre 40 a 100 caracteres")
    .max(100, "Este campo deve ter entre 40 a 100 caracteres"),
  content: yup
    .string()
    .nullable()
    .required('Campo obrigatório')
    .min(50, "Este campo deve ter entre 50 a 300 caracteres")
    .max(300, "Este campo deve ter entre 50 a 300 caracteres"),
})