import * as yup from 'yup';

const validationSchema = yup.object({
  mobile: yup.string().required().min(8, ',mobile must be at least 8 char'),
  password: yup
    .string()
    .min(8, 'password must be at least 8 char')
    .required('password is required'),
});

export default validationSchema;
