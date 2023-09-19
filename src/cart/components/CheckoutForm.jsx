import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import * as yup from 'yup';

export const CheckoutForm = () => {


  const schema = yup.object().shape({
    firstName: yup.string().required("Sus nombres son requeridos"),
    lastName: yup.string().required("Sus apellidos son requeridos"),
    email: yup.string().email('Correo electrónico inválido').required('El correo electrónico es requerido'),
    confirmEmail: yup.string().required("Debe confirmar su email"),
    phone: yup.number().required("El teléfono es requerido"),
  });

  const validateEmail = (value) => {
    let error;
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Dirección de correo electrónico no válida';
    }
    return error;
  }

  const confirmEmail = (values) => {
    let error;
    if (values.email != values.confirmEmail) {
      error = 'Los correos no coinciden';
    } 
    return error;
  }

  return (
    <div className="item-container__wrapper">
      <h4>Contacto</h4>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
        }}
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          confirmEmail: '',
          phone: '',
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form onSubmit={handleSubmit}>
              <FormGroup className="mb-3" >
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
              <FormGroup className="mb-3" >
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
              <FormGroup className="mb-3">
                <FormLabel>Correo Electrónico</FormLabel>
                <Field
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  validate = {validateEmail}
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
              <FormGroup className="mb-3">
                <FormLabel>Confirmar Correo</FormLabel>
                <Field
                  type="text"
                  name="confirmEmail"
                  value={values.confirmEmail}
                  validate={() => confirmEmail(values)}
                  as={FormControl}
                  onChange={handleChange}
                  isValid={touched.confirmEmail && !errors.confirmEmail}
                  isInvalid={!!errors.confirmEmail}
                />

                <ErrorMessage
                  name='confirmEmail'
                  component="div"
                  className='text-danger'
                  />
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel>Teléfono</FormLabel>
                <Field
                  type="number"
                  name="phone"
                  value={values.phone}
                  as={FormControl}
                  onChange={handleChange}
                  isValid={touched.phone && !errors.phone}
                  isInvalid={!!errors.phone}
                />
                <ErrorMessage
                  name='phone'
                  component="div"
                  className='text-danger'
                  />
              </FormGroup>
              <Button type="submit">Continuar con el Pago</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
