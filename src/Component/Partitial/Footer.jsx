import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

function Footer() {
    return (
        <div>
            <Container fluid className='pt-5 pb-5 ps-0 pe-0 footerclr'>
                <Container>
                    <Row className='g-2 '>
                        {/* <Col md={6} xl={4} className='p-2'>
                            <div className='p-2 f1'>
                                <div className='ft'>SIGN UP NOW & GET 10% OFF</div>
                                <div className='fd pt-3'>Get timely updates from your favorite products</div>
                                <div className='fb'>
                                    <input type="text" placeholder='Enter Address*' />
                                    <input type="submit" value={'SUBSCRIBE'} className='fsbt' />
                                </div>
                            </div>
                        </Col> */}
                        <Col className='col-6 col-lg-4 p-2'>
                            <div className='p-2 f1'>
                                <div className='ft'>CONTACT INFO</div>
                                <div className='fd pt-3'>Phone: 888-999-000-1425</div>
                                <div className='fd'>Email: azedw@mail.com</div>
                                <div className='fd'>Address: 22/1 natinoal city austria, dreem land, Huwai</div>
                            </div>
                        </Col>
                        <Col className='col-6 col-lg-3 p-2'>
                            <div className='p-2 f1 text-left'>
                                <div className='ft'>COMPANY</div>
                                <div className='fd pt-3'><Link to="/">About us</Link></div>
                                <div className='fd'><Link to="/">Best services</Link></div>
                                <div className='fd'><Link to="/">Recent insight</Link></div>
                                <div className='fd'><Link to="/">Shipping guid</Link></div>
                                <div className='fd'><Link to="/">Privacy policy</Link></div>
                            </div>
                        </Col>
                        <Col className='col-6 col-lg-3 p-2'>
                            <div className='p-2 f1 text-left'>
                                <div className='ft'>PAYMENT & SHIPPING</div>
                                <div className='fd pt-3'><Link to="/">Payment method</Link></div>
                                <div className='fd'><Link to="/">Tearms of use</Link></div>
                                <div className='fd'><Link to="/">Shipping policy</Link></div>
                                <div className='fd'><Link to="/">Shipping guide</Link></div>
                                <div className='fd'><Link to="/">Return policy</Link></div>
                            </div>
                        </Col>
                        <Col className='col-6 col-lg-2 p-2'>
                            <div className='p-2 f1 text-left'>
                                <div className='ft text-uppercase'>Social Media</div>
                                <div className='fd  pt-3'><Link to="/" className="newfd"><i className="bi bi-instagram"></i> tryinstagram</Link></div>
                                <div className='fd '><Link to="/" className="newfd"><i className="bi bi-facebook"></i> tryfacebook</Link></div>
                                <div className='fd '><Link to="/" className="newfd"><i className="bi bi-twitter-x"></i> trytwitter</Link></div>
                                <div className='fd '><Link to="/" className="newfd"><i className="bi bi-whatsapp"></i> trywhatsapp</Link></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Footer
