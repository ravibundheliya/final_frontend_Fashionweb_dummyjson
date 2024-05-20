import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

function Instainfo() {
  return (
    <section className='pt-5 pb-5'>
            <Container style={{paddingBottom:"3rem"}}>
                <Row className='g-0 cntbox'>
                    
                    <Col xs={4} sm={4} md={4} lg={2}>
                        <a href="https://www.instagram.com/therajveerfashion/"rel="noopener" className="cntimg">
                            <img src={require('../../img/asset 13.jpeg')} alt="" />
                            <div className="instaimg">
                                <i className="bi bi-instagram"></i>
                            </div>
                        </a>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={2}>
                        <a href="https://www.instagram.com/therajveerfashion/"rel="noopener" className="cntimg">
                            <img src={require('../../img/asset 14.jpeg')} alt="" />
                            <div className="instaimg">
                                <i className="bi bi-instagram"></i>
                            </div>
                        </a>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={2}>
                        <a href="https://www.instagram.com/therajveerfashion/"rel="noopener" className="cntimg">
                            <img src={require('../../img/asset 15.jpeg')} alt="" />
                            <div className="instaimg">
                                <i className="bi bi-instagram"></i>
                            </div>
                        </a>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={2}>
                        <a href="https://www.instagram.com/therajveerfashion/"rel="noopener" className="cntimg">
                            <img src={require('../../img/asset 16.jpeg')} alt="" />
                            <div className="instaimg">
                                <i className="bi bi-instagram"></i>
                            </div>
                        </a>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={2}>
                        <a href="https://www.instagram.com/therajveerfashion/"rel="noopener" className="cntimg">
                            <img src={require('../../img/asset 17.jpeg')} alt="" />
                            <div className="instaimg">
                                <i className="bi bi-instagram"></i>
                            </div>
                        </a>
                    </Col>
                    <Col xs={4} sm={4} md={4} lg={2}>
                        <a href="https://www.instagram.com/therajveerfashion/"rel="noopener" className="cntimg">
                            <img src={require('../../img/asset 18.jpeg')} alt="" />
                            <div className="instaimg">
                                <i className="bi bi-instagram"></i>
                            </div>
                        </a>
                    </Col>
                    <div className='outbox'>
                        <h4>Follow our instagram</h4>
                        <a href="https://www.instagram.com/therajveerfashion/" target='_blanck'>@therajveerfashion</a>
                    </div>
                </Row>
            </Container>
        </section>
  )
}

export default Instainfo
