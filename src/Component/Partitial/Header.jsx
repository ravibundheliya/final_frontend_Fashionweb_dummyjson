import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './style.css';
import { useSelector } from 'react-redux';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartvalue = useSelector((state) => state.user.logindata?.cart);
  const wishvalue = useSelector((state) => state.user.logindata?.wishlist);
  const loginuser = useSelector((state) => state.user.logindata);

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
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleShow} />
            <Navbar.Offcanvas
              show={show}
              onHide={handleClose}
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
                    <NavLink className={(e) => e.isActive ? "activenav" : ""} as={Link} to="/" onClick={handleClose}>Home</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className={(e) => e.isActive ? "activenav" : ""} as={Link} to="/productpage" onClick={handleClose}>Products</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className={(e) => e.isActive ? "activenav" : ""} as={Link} to="/blog" onClick={handleClose}>Blog</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className={(e) => e.isActive ? "activenav" : ""} as={Link} to="/about" onClick={handleClose}>About</NavLink>
                  </Nav.Item>
                  <Nav.Item>
                    <NavLink className={(e) => e.isActive ? "activenav" : ""} as={Link} to="/contact" onClick={handleClose}>Contact</NavLink>
                  </Nav.Item>
                </Nav>
                <Nav className="d-none d-lg-flex" style={{ alignItems: "center", gap: "10px" }}>
                  <Nav.Item className='d-flex justify-content-center'>
                    {loginuser === null ? (
                      <NavLink to="/login">
                        <Button variant="outline-dark">Login/Signin</Button>
                      </NavLink>
                    ) : (
                      <div className='d-flex' style={{ alignItems: "center" }}>
                        <span style={{ fontSize: "14px" }}>Welcome <span className='fw-bolder ps-1' style={{ fontSize: "16px" }}>{loginuser.name}</span>!</span>
                        <NavLink className={(e) => e.isActive ? "activenav extcss p-1" : "extcss p-1"} as={Link} to="/profile">
                          <i className="bi bi-person" style={{ fontSize: "25px" }}></i>
                        </NavLink>
                      </div>
                    )}
                  </Nav.Item>
                  <Nav.Item className='d-flex justify-content-center'>
                    <NavLink className={(e) => e.isActive ? "activenav extcss" : "extcss"} as={Link} to="/wishlist">
                      <i className="bi bi-heart">
                        <span className='cartval'>{wishvalue?.length || 0}</span>
                      </i>
                    </NavLink>
                  </Nav.Item>
                  <Nav.Item className='d-flex justify-content-center'>
                    <NavLink className={(e) => e.isActive ? "activenav extcss" : "extcss"} as={Link} to="/cart">
                      <i className="bi bi-basket">
                        <span className='cartval'>{cartvalue?.length || 0}</span>
                      </i>
                    </NavLink>
                  </Nav.Item>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
}

export default Header;
