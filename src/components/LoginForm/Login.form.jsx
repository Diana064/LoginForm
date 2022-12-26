import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

const scheme = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(3).max(5).required(),
});

const initialValue = {
  login: '',
  password: '',
};
const ErrorText = styled.p`
  color: blue;
`;
const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};
export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={scheme}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Field type="text" name="login" />
          <FormError name="login" component="div" />
        </label>
        <br />
        <label htmlFor="password">
          Password
          <Field type="password" name="password" />
          <FormError name="password" component="div" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
