import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './style.css';
import { useSelector } from 'react-redux';
function Header() {
  const cartvalue = useSelector((state)=>state.cart.value);
  return (
    <div>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} sticky="top" className="footerclr bg-body-tertiary pt-4 pb-4">
          <Container>
            <Navbar.Brand className='logo'>
              <Link to="/">
                <img src={require('../../img/asset 0.png')} alt="Logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  AZEDW
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="phl justify-content-center flex-grow-1 pe-3" style={{alignItems:"center"}}>
                  <Nav.Item>
                    <NavLink className={(e)=>{return e.isActive ? "activenav" : ""}} as={Link} to="/">Home</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className={(e)=>{return e.isActive ? "activenav" : ""}} as={Link} to="/productpage">Products</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className={(e)=>{return e.isActive ? "activenav" : ""}} as={Link} to="/blog">Blog</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className={(e)=>{return e.isActive ? "activenav" : ""}} as={Link} to="/about">About</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className={(e)=>{return e.isActive ? "activenav" : ""}} as={Link} to="/contact">Contact</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className={(e)=>{return e.isActive ? "activenav" : ""}} as={Link} to="/cart">Cart ({cartvalue.length})</NavLink>
                  </Nav.Item>
                </Nav>
                <Form className="d-flex">
                  <Button variant="outline-dark">Login/Signin</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  )
}

export default Header
