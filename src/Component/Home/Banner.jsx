import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Banner() {
    return (
        <div>
            <Container className='pt-5 pb-5 mb-5 mt-5'>
                <Row className='g-5'>
                    <Col className='pt-3' sm={'6'} lg={'4'} >
                        <div className='pup text-center text-light bg-dark'>
                            <div className='ovr'>
                                <img className='pimg' src={require('../../img/asset 4.jpeg')} width={'100%'} alt="" />
                            </div>
                            <div className='ppcolor'></div>
                            <div className='pin'>
                                <h4>Spring Collection</h4>
                                <Link to={'/'}>Shop now</Link>
                            </div>
                        </div>
                    </Col>
                    <Col className='pt-3' sm={'6'} lg={'4'} >
                        <div className='pup text-center text-light bg-dark'>
                            <div className='ovr'>
                                <img className='pimg' src={require('../../img/asset 5.jpeg')} width={'100%'} alt="" />
                            </div>
                            <div className='ppcolor'></div>
                            <div className='pin'>
                                <h4>Spring Collection</h4>
                                <Link to={'/'}>Shop now</Link>
                            </div>
                        </div>
                    </Col>
                    <Col className='pt-3' sm={'6'} lg={'4'} >
                        <div className='pup text-center text-light bg-dark'>
                            <div className='ovr'>
                                <img className='pimg' src={require('../../img/asset 6.jpeg')} width={'100%'} alt="" />
                            </div>
                            <div className='ppcolor'></div>
                            <div className='pin'>
                                <h4>Spring Collection</h4>
                                <Link to={'/'}>Shop now</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner
