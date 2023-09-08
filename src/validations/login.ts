import * as Yup from 'yup'

const LoginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: Yup.string().min(8).max(32).required('Password is required'),
})

export default LoginValidationSchema
