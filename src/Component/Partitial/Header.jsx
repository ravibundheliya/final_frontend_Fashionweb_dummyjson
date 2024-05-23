import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutuser } from '../../store/userSlice';
function Header() {
  const cartvalue = useSelector((state) => state.user.logindata?.cart);
  const loginuser = useSelector((state) => state.user.logindata);
  const dispatch = useDispatch();
  return (
    <div>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} sticky="top" className="footerclr bg-body-tertiary py-2 py-lg-4">
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
                <Nav className="phl justify-content-center flex-grow-1 pe-3" style={{ alignItems: "center" }}>
                  <Nav.Item>
                    <NavLink className={(e) => { return e.isActive ? "activenav" : "" }} as={Link} to="/">Home</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className={(e) => { return e.isActive ? "activenav" : "" }} as={Link} to="/productpage">Products</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className={(e) => { return e.isActive ? "activenav" : "" }} as={Link} to="/blog">Blog</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className={(e) => { return e.isActive ? "activenav" : "" }} as={Link} to="/about">About</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className={(e) => { return e.isActive ? "activenav" : "" }} as={Link} to="/contact">Contact</NavLink>
                  </Nav.Item>
                </Nav>
                <Nav className="d-none d-lg-flex" style={{ alignItems: "center", gap: "10px" }}>
                  <Nav.Item className='d-flex justify-content-center'>

                    {(loginuser === null)
                      ? <NavLink to="/login"><Button variant="outline-dark">Login/Signin</Button></NavLink>
                      : <NavLink onClick={() => dispatch(logoutuser())}><Button variant="outline-dark">Logout</Button></NavLink>
                    }
                  </Nav.Item>
                  <Nav.Item className='d-flex justify-content-center'>
                    <NavLink className={(e) => { return e.isActive ? "activenav extcss" : "extcss" }} as={Link} to="/wishlist"><i className="bi bi-heart"></i> </NavLink>
                  </Nav.Item>
                  <Nav.Item className='d-flex justify-content-center'>
                    <NavLink className={(e) => { return e.isActive ? "activenav extcss" : "extcss" }} as={Link} to="/cart"><i className="bi bi-basket"><span className='cartval'>{(cartvalue?.length)?cartvalue?.length:0}</span></i> </NavLink>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  )
}

export default Header
