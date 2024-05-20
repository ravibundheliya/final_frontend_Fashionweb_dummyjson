import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const obj = {
    loop: true,
    margin: 0,
    nav: true,
    autoplay: true,
    autoplayTimeout: 1500,
    responsiveClass: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 2,
        },
        576: {
            items: 3,
        },
        992: {
            items: 4,
        }
    }
}
function Featuredprdslide() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='col-12 col-md-8 sld-ttl'>Featured Products</Col>
                    <Col className='col-12 col-md-4 sld-dtl text-start text-md-end pt-0 pt-md-4 text-uppercase'><a href="/">more products</a></Col>
                </Row>
                <hr />
            </Container>
            <Container className='pt-5 pb-5'>
                <OwlCarousel className='owl-theme'{...obj}>
                    <div className='item text-center prdback'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={require('../../img/asset 12.jpeg')} width={"100%"} />
                            <div className='icn'>
                                <div><i className="bi bi-eye"></i></div>
                                <div><i className="bi bi-heart"></i></div>
                                <div><i className="bi bi-cart"></i></div>
                            </div>
                            <Card.Body>
                                <Card.Title><Link to={'/'} className='text-dark'>New Fashion Top</Link></Card.Title>
                                <h4 className='fw-bold'><i className="bi bi-currency-rupee text-dark"></i>7449</h4>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='item text-center prdback'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={require('../../img/asset 11.jpeg')} width={"100%"} />
                            <div className='icn'>
                                <div><i className="bi bi-eye"></i></div>
                                <div><i className="bi bi-heart"></i></div>
                                <div><i className="bi bi-cart"></i></div>
                            </div>
                            <Card.Body>
                                <Card.Title><Link to={'/'} className='text-dark'>New Fashion Top</Link></Card.Title>
                                <h4 className='fw-bold'><i className="bi bi-currency-rupee text-dark"></i>7449</h4>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='item text-center prdback'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={require('../../img/asset 10.jpeg')} width={"100%"} />
                            <div className='icn'>
                                <div><i className="bi bi-eye"></i></div>
                                <div><i className="bi bi-heart"></i></div>
                                <div><i className="bi bi-cart"></i></div>
                            </div>
                            <Card.Body>
                                <Card.Title><Link to={'/'} className='text-dark'>New Fashion Top</Link></Card.Title>
                                <h4 className='fw-bold'><i className="bi bi-currency-rupee text-dark"></i>7449</h4>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='item text-center prdback'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={require('../../img/asset 9.jpeg')} width={"100%"} />
                            <div className='icn'>
                                <div><i className="bi bi-eye"></i></div>
                                <div><i className="bi bi-heart"></i></div>
                                <div><i className="bi bi-cart"></i></div>
                            </div>
                            <Card.Body>
                                <Card.Title><Link to={'/'} className='text-dark'>New Fashion Top</Link></Card.Title>
                                <h4 className='fw-bold'><i className="bi bi-currency-rupee text-dark"></i>7449</h4>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='item text-center prdback'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={require('../../img/asset 8.jpeg')} width={"100%"} />
                            <div className='icn'>
                                <div><i className="bi bi-eye"></i></div>
                                <div><i className="bi bi-heart"></i></div>
                                <div><i className="bi bi-cart"></i></div>
                            </div>
                            <Card.Body>
                                <Card.Title><Link to={'/'} className='text-dark'>New Fashion Top</Link></Card.Title>
                                <h4 className='fw-bold'><i className="bi bi-currency-rupee text-dark"></i>7449</h4>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='item text-center prdback'>
                        <Card style={{ width: '100%' }}>
                            <Card.Img variant="top" src={require('../../img/asset 7.jpeg')} width={"100%"} />
                            <div className='icn'>
                                <div><i className="bi bi-eye"></i></div>
                                <div><i className="bi bi-heart"></i></div>
                                <div><i className="bi bi-cart"></i></div>
                            </div>
                            <Card.Body>
                                <Card.Title><Link to={'/'} className='text-dark'>New Fashion Top</Link></Card.Title>
                                <h4 className='fw-bold'><i className="bi bi-currency-rupee text-dark"></i>7449</h4>
                            </Card.Body>
                        </Card>
                    </div>
                </OwlCarousel>
            </Container >
        </div>
    )
}

export default Featuredprdslide
