import { useState } from 'react';
import { Container, Nav, Navbar as NavbarBS, NavDropdown} from "react-bootstrap";
import { CartWidget } from './CartWidget';


export const Navbar = () => {

  const [cartQuantity, setCartQuantity] = useState(1);

  return (

    <NavbarBS bg="dark" data-bs-theme="dark">
      <Container>
        <NavbarBS.Brand href="#home">4everStore</NavbarBS.Brand>
        <Nav className="me-auto">
          <NavDropdown title="Categorías" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Ropa Mujer</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action4">Ropa Hombre</NavDropdown.Item>
            <NavDropdown.Divider />

         
          </NavDropdown>
          <Nav.Link href="/" >
            Home
          </Nav.Link>
          <Nav.Link href="/store" >
            Store
          </Nav.Link>
          <Nav.Link href="/about" >
            About
          </Nav.Link>
        </Nav>
        <CartWidget cartQuantity = { cartQuantity }/>
      </Container>
    </NavbarBS>
   
  )
}
