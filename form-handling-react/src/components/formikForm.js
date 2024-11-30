import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Formik Form Submitted', values);
      }}
    >
      <Form>
        <label htmlFor="username">Username:</label>
        <Field name="username" type="text" />
        <ErrorMessage name="username" component="div" />

        <label htmlFor="email">Email:</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="password">Password:</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
