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
function Topproductsslide(props) {
    return (
        <div>
            <Container style={{ overflow: "hidden" }}>
                <Row style={{ overflow: "hidden" }}>
                    <Col className='col-12 col-md-8 sld-ttl' data-aos="slide-up" data-aos-duration="600">Top Selling Products</Col>
                    <Col className='col-12 col-md-4 sld-dtl text-start text-md-end pt-0 pt-md-4 text-uppercase' data-aos="slide-up" data-aos-duration="600"><a href="/">more products</a></Col>
                </Row>
                <hr data-aos="slide-left" />
            </Container>
            <Container className='pb-5' style={{ overflow: "hidden" }}>
                <OwlCarousel className='owl-theme'{...obj} data-aos="zoom-in-left" data-aos-duration="1000">
                    {
                        props.data.map((item, index) => {
                            return (
                                <div className='item text-center prdback' key={item.id}>
                                    <Card style={{ width: '100%' }}>
                                        <Card.Img variant="top" src={item.thumbnail} width={"100%"} />
                                        <div className='icn'>
                                            <div><i className="bi bi-eye"></i></div>
                                            <div><i className="bi bi-heart"></i></div>
                                            <div><i className="bi bi-cart"></i></div>
                                        </div>
                                        <Card.Body>
                                            <Card.Title><Link to={`/productpage/${item.id}`} className='text-dark'>{item.title}</Link></Card.Title>
                                            <h4 className='fw-bold'><i className="bi bi-currency-rupee text-dark"></i>{item.price}</h4>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )
                        })
                    }
                    {/* <div className='item text-center prdback'>
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
                    </div> */}
                </OwlCarousel>
            </Container >
        </div>
    )
}

export default Topproductsslide
