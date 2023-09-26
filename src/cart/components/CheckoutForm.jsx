import { Formik, Form, Field, ErrorMessage } from 'formik';
import {  FormGroup, FormControl, FormLabel } from 'react-bootstrap';
import * as yup from 'yup';
import { validateEmail, confirmEmail } from '../../utils/validations';
import { useAuth } from '../../context/AuthContext';


export const CheckoutForm = ({
  generateOrder
}) => {

  const { user } = useAuth();

  const userEmail = user?.providerData[0].email;
  

  const schema = yup.object().shape({
    firstName: yup.string().required("Sus nombres son requeridos"),
    lastName: yup.string().required("Sus apellidos son requeridos"),
    email: yup.string().email('Correo electrónico inválido').required('El correo electrónico es requerido'),
    confirmEmail: yup.string().required("Debe confirmar su email"),
    phone: yup.number().required("El teléfono es requerido"),
  });

  

  return (
    <div className="checkout-form-container bg-white p-3 rounded-4 shadow-sm">
      <h4>Contacto</h4>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          generateOrder(values);
        }}
        initialValues={{
          firstName: '',
          lastName: '',
          email: userEmail ||'',
          confirmEmail:userEmail || '',
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
                  disabled = {userEmail ? true : false}
                  value={values.email}
                  onChange={handleChange}
                  validate = {() =>validateEmail(values.email)}
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
              {
                !userEmail &&
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
              }
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
              <button type="submit" className='bt main-btn'>Realizar pedido
              </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
