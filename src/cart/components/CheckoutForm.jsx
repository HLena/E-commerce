import { Button, Form } from "react-bootstrap"

export const CheckoutForm = ({
    handleSubmit,
    validated,
    emailIsValid,
    name,
    lastname,
    email,
    confirmEmail,
    phone,
    onInputChange
}) => {
  return (
    <div className="item-container__wrapper">
        <h4>Contacto</h4>
        <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nombres </Form.Label>
            <Form.Control 
              type="text" 
              required 
              minLength="3" 
              maxLength="30" 
              name="name" 
              value={name} 
              onChange={(e) => onInputChange(e)}
            />
            <Form.Control.Feedback type="invalid">Ingrese su nombre</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Apellidos </Form.Label>
            <Form.Control 
              type="text" 
              required 
              minLength="3" 
              maxLength="30" 
              name="lastname" 
              value={lastname} 
              onChange={(e) => onInputChange(e)}
            />
            <Form.Control.Feedback type="invalid">Ingrese su apellido</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email </Form.Label>
            <Form.Control 
              type="email" 
              required 
              maxLength="50" 
              name="email" 
              value={email} 
              onChange={(e) => onInputChange(e)}
            />
            <Form.Control.Feedback type="invalid">Ingrese un email válido</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmEmail">
            <Form.Label>Confirmar Email </Form.Label>
            <Form.Control 
              type="email" 
              required 
              maxLength="50" 
              name="confirmEmail" 
              value={confirmEmail} 
              onChange={(e) => onInputChange(e)}
              isInvalid = {!emailIsValid}
            />
            <Form.Control.Feedback type="invalid"> Los email no coinciden</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Teléfono </Form.Label>
            <Form.Control 
              type="number" 
              required 
              minLength="9" 
              maxLength="20" 
              name="phone" 
              value={phone} 
              onChange={(e) => onInputChange(e)}
            />
            <Form.Control.Feedback type="invalid">Ingrese un N° de teléfono válido</Form.Control.Feedback>
          </Form.Group>
          <Button type="submit">Continuar con el Pago</Button>
        </Form>
      </div>
  )
}
