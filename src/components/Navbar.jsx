import { Container, Nav, Navbar as NavbarBS, Image } from "react-bootstrap";
import { CartWidget } from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import logoWhite from '../assets/images/logo-white.png';
import logoBlack from '../assets/images/logo-black.png';
import categories from '../data/category.json';

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
            {
              categories.map( ({name, path}) => (
                <Nav.Link key={name} to={path} as={NavLink}>
                  {name}
                </Nav.Link>
              ))
            }
        
          </Nav>
        </NavbarBS.Collapse>
        <div className="cart-right__container">
          <Link to="/login">Login</Link>
          <CartWidget />
        </div>
      </Container>
    </NavbarBS> 
  )

}
