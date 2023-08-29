import { Container, Nav, Navbar as NavbarBS, Image } from "react-bootstrap";
import { CartWidget } from './CartWidget';
import { NavLink } from 'react-router-dom';
import logoWhite from '../assets/images/logo-white.png';
import logoBlack from '../assets/images/logo-black.png';

import '../assets/styles/navbar.css';

export const Navbar = () => {

  return (

    <NavbarBS  collapseOnSelect sticky="top" bg="white" data-bs-theme="white" expand = 'lg' className="bg-body-tertiary">
      <Container>
        <div className="d-flex align-items-center navbar-brand__container">
            <NavbarBS.Toggle aria-controls="responsive-navbar-nav" />
            <NavbarBS.Brand href="/">
                <Image src = {logoBlack} style={{ width: '100px'}}/>
            </NavbarBS.Brand>
            <div className="cart-left__container">
              <CartWidget />
            </div>
        </div>

        <NavbarBS.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
              <Nav.Link to="/" as={NavLink}>
                ALL
              </Nav.Link>
        
              <Nav.Link to="/category/women's clothing" as={NavLink}>
                WOMEN
              </Nav.Link>
          
              <Nav.Link to="/category/men's clothing" as={NavLink}>
                MEN
              </Nav.Link>
          
              <Nav.Link to="/category/electronics" as={NavLink}>
                ELECTRONIC
              </Nav.Link>
          
              <Nav.Link to="/category/jewelery" as={NavLink}>
                JEWELERY
              </Nav.Link>
          </Nav>
        </NavbarBS.Collapse>
        <div className="cart-right__container">
          <CartWidget />
        </div>
      </Container>
    </NavbarBS> 
  )

}
