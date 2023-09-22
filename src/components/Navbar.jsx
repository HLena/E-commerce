import { Container, Nav, Navbar as NavbarBS, Image, Offcanvas } from "react-bootstrap";
import { CartWidget } from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import logoWhite from '../assets/images/logo-white.png';
import logoBlack from '../assets/images/logo-black.png';
import categories from '../data/category.json';

import '../assets/styles/navbar.css';
import { FavoriteIcon, MenuIcon, UserIcon } from "./Icons";
import { useAuth } from "../context/AuthContext";
import { UserPopOver } from './UserPopOver';
import { useState } from "react";


export const Navbar = () => {

  const {user, openModal } = useAuth();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <NavbarBS  sticky="top" bg="white" data-bs-theme="white" className="shadow-sm z-50 d-flex">
      <Container fluid className="position-relative">
      <button 
            className = "menu-button p-1"
            onClick = { handleShow }>
              <MenuIcon/>
      </button>
        <NavbarBS.Brand href="/">
            <Image src = {logoBlack} style={{ width: '100px'}}/>
        </NavbarBS.Brand>
        <Nav className="list-navlink">
          {
            categories.map( ({name, path}) => (
              <Nav.Link key={name} to={path} as={NavLink}>
                {name}
              </Nav.Link>
            ))
          }
      
        </Nav>
        {
          user 
          ? 
            <div className="d-flex gap-2 border">
              <UserPopOver/>
              <CartWidget />
            </div>
          : <div>
              <a href="#" onClick={openModal}>Iniciar Sesión</a> 
            </div>
        } 
      </Container>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
          <NavbarBS.Brand href="/">
            <Image src = {logoBlack} style={{ width: '100px'}}/>
          </NavbarBS.Brand>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav>
        {
              categories.map( ({name, path}) => (
                <Nav.Link key={name} to={path} as={NavLink} onClick={handleClose}>
                  {name}
                </Nav.Link>
              ))
        }
        </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </NavbarBS> 
  )

}
