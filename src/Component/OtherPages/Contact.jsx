import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Instainfo from '../Home/Instainfo'

function Contact() {
    return (
        <div>
            <Container className='cntw' style={{ padding: "3rem 0rem" }}>
                <Row><Col className='text-center pt-3 pb-3 bg-body-tertiary'><h1 style={{ fontWeight: "900", margin: "0" }}>Contact</h1></Col></Row>
                <Row className='pt-5'>
                    <Col className='col-12 col-lg-6'>
                        <div className='allcnt'>
                            <div className='cntdtl d-flex'>
                                <div><i className="bi bi-bank2 icnht"></i></div>
                                <div>
                                    <h4 className='f-900'>Office address</h4>
                                    <div className='txt-light'>Ailded frame showed a lady fitted out with fur hat and fur boa who sat upright</div>
                                </div>
                            </div>
                            <div className='cntdtl pt-5 d-flex'>
                                <div><i className="bi bi-phone icnht"></i></div>
                                <div>
                                    <h4 className='f-900'>Phone number</h4>
                                    <div className='txt-light'>54875465-65741895-6547 <br />2222-3333-4444-555</div>
                                </div>
                            </div>
                            <div className='cntdtl pt-5 d-flex'>
                                <div><i className="bi bi-envelope icnht"></i></div>
                                <div>
                                    <h4 className='f-900'>Email us</h4>
                                    <div className='txt-light'>admin@mail.com <br />example@mail.com</div>
                                </div>
                            </div>
                            <div className='cntdtl pt-5 d-flex'>
                                <div><i className="bi bi-alarm icnht"></i></div>
                                <div>
                                    <h4 className='f-900'>Office time</h4>
                                    <div className='txt-light'>10AM - 5 PM, Sunday closed</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='col-12 col-lg-6'>
                        <div className='cntform'>
                            <Container fluid>
                                <Row className='g-4'>
                                    <Col className='col-12'>
                                        <div><h3 className='f-900 cntformttl'>Let’s talk to us</h3></div>
                                    </Col>
                                    <Col className='col-12 col-md-6'>
                                        <div>
                                            <input type="text" placeholder='Name*' name="" id="txtarea" required />
                                        </div>
                                    </Col>
                                    <Col className='col-12 col-md-6'>
                                        <div>
                                            <input type="email" placeholder='Email*' name="" id="txtarea" required />
                                        </div>
                                    </Col>
                                    <Col className='col-12'>
                                        <div>
                                            <select name="" id="txtarea" className='txt-light'>
                                                <option value="">Subject 1</option>
                                                <option value="">Subject 2</option>
                                                <option value="">Subject 3</option>
                                            </select>
                                        </div>
                                    </Col>
                                    <Col className='col-12'>
                                        <div>
                                            <textarea name="" id="txtarea" rows="7" placeholder='Case Description...'></textarea>
                                        </div>
                                    </Col>
                                    <Col className='col-12'>
                                        <div>
                                            <input type="submit" value="Submit it now" className='sbtbtn text-uppercase' />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Map */}
            <Container fluid>
                <Row>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.448254857155!2d72.88419477471935!3d21.214066281389208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f6f3a2bac99%3A0x6b65a1c0c419a14f!2sRajveer%20Fashion!5e0!3m2!1sen!2sin!4v1710338265763!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} title='map' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </Row>
            </Container>

            <Instainfo />
        </div>
    )
}

export default Contact
