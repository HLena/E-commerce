import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import { uploadDataToFirestore } from '../../firebase/uploadData';


export const Login = () => {

    
    const { email, password, onInputChange } =  useForm({
        email: '',
        password: ''
    })

    return (
            <Row className="d-flex justify-content-center h-100">
                <Col lg="4" className="card py-4 my-4">
                    <p className="text-start fs-3">Iniciar Sesión</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>E-mail*</Form.Label>
                        <Form.Control 
                            type="email" 
                            name="email"
                            value={ email }
                            onChange={(e) => onInputChange(e)}
                            placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Contraseña*</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="password"
                            value={password}
                            onChange={(e) => onInputChange(e)}
                            placeholder="********" />
                        </Form.Group>
                        <Form.Group>
                        <Button onClick = { uploadDataToFirestore }>
                            Iniciar sesión
                        </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
    );  
}
  