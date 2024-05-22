import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Col, Container, Row } from "react-bootstrap";
const obj = {
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 1500,
    responsiveClass: true,
    items: 1
}
function Testimonialslide() {
    return (
        <div>
            <Container fluid className='pt-5 pb-5'>
                <Row>
                    <div className='cnvimg'><img src={require('../../img/asset 41.jpeg')} className='backimg' alt="" />
                        <Container className='imgcnt'>
                            <Row>
                                <Col className='col-12 ps-4 pe-4 col-lg-6'>
                                    <div>
                                        <h1 className='text-light f-900'>Client's Quote</h1>
                                        <div className='text-light'>Travelling salesman and above it there hung a picture</div>
                                        <div className='mt-4 bg-light' data-aos="zoom-in-right">
                                            <OwlCarousel className='owl-theme' {...obj} >
                                                <div className='item py-3 px-4'>
                                                    <h4>"Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and"</h4>
                                                    <div className='d-flex clientdata text-center justify-content-md-center pt-2'>
                                                        <img src={require('../../img/asset 32.jpeg')} alt="" />
                                                        <h4 className='text-dark text-uppercase f-900'> - John Smith</h4>
                                                    </div>
                                                </div>
                                                <div className='item py-3 px-4'>
                                                    <h4>"Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and"</h4>
                                                    <div className='d-flex clientdata text-center justify-content-md-center pt-2'>
                                                        <img src={require('../../img/asset 33.jpeg')} alt="" />
                                                        <h4 className='text-dark text-uppercase f-900'> - John Smith</h4>
                                                    </div>
                                                </div>
                                                <div className='item py-3 px-4'>
                                                    <h4>"Samsa was a travelling salesman and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and"</h4>
                                                    <div className='d-flex clientdata text-center justify-content-md-center pt-2'>
                                                        <img src={require('../../img/asset 36.jpeg')} alt="" />
                                                        <h4 className='text-dark text-uppercase f-900'> - John Smith</h4>
                                                    </div>
                                                </div>
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonialslide
