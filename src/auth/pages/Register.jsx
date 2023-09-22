import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import * as yup from 'yup';
import { useAuth } from '../../context/AuthContext';

export const Register = () => {

  const { setForm, registerUser } = useAuth();

  const schema = yup.object().shape({
    firstName: yup.string().required("Sus nombres son requeridos"),
    lastName: yup.string().required("Sus apellidos son requeridos"),
    email: yup.string().email('Correo electrónico inválido').required('El correo electrónico es requerido'),
    password: yup.string().required('La contraseña es requerida')
  });

  

  return (
    <div>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          registerUser(values)
        }}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form onSubmit={handleSubmit}>
              <FormGroup className="mb-2" >
                <FormLabel>Nombres</FormLabel>
                <Field
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  as={FormControl}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                  isInvalid={!!errors.firstName}
                />
                <ErrorMessage 
                  name='firstName'
                  component="div"
                  className='text-danger'
                />
              </FormGroup>
              <FormGroup className="mb-2" >
                <FormLabel>Apellidos</FormLabel>
                <Field
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  as={FormControl}
                  onChange={handleChange}
                  isValid={touched.lastName && !errors.lastName}
                  isInvalid={!!errors.lastName}
                />
                <ErrorMessage 
                  name='lastName'
                  component="div"
                  className='text-danger'
                />
              </FormGroup>
              <FormGroup className="mb-2">
                <FormLabel>Correo Electrónico</FormLabel>
                <Field
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  as={FormControl}
                  isValid={touched.email && !errors.email}
                  isInvalid={!!errors.email}
                  />
                <ErrorMessage 
                  name='email'
                  component="div"
                  className='text-danger'
                  />
              </FormGroup>
              <FormGroup className="mb-2">
                <FormLabel>Contraseña</FormLabel>
                <Field
                  type="password"
                  name="password"
                  value={values.password}
                  // validate={() => password(values)}
                  as={FormControl}
                  onChange={handleChange}
                  isValid={touched.password && !errors.password}
                  isInvalid={!!errors.password}
                />

                <ErrorMessage
                  name='password'
                  component="div"
                  className='text-danger'
                  />
              </FormGroup>
              <FormGroup className="mb-2">
                <span>¿Ya tienes una cuenta? 
                  <a href='#' onClick={() => setForm('login')}>
                     Incia sesión aquí
                  </a>
                </span>
              </FormGroup>
              <Button type="submit">Crear cuenta</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
