import { Container, Nav, Navbar as NavbarBS, Image, Offcanvas } from "react-bootstrap";
import { CartWidget } from './CartWidget';
import {  NavLink } from 'react-router-dom';
import logoBlack from '../assets/images/logo-black.png';
import categories from '../data/category.json';

import '../assets/styles/navbar.css';
import { CustomIcon} from "./Icons";
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
              <CustomIcon name="menu"/>
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
            <div className="d-flex gap-2">
              <UserPopOver/>
              <CartWidget />
            </div>
          : <button className="btn main-btn"
              onClick={openModal}>
              Iniciar Sesión 
            </button>
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
