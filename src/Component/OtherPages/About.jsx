import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Instainfo from '../Home/Instainfo';
import './style.css';
import Testimonialslide from '../Home/Testimonialslide';

function About() {
    return (
        <div>

            <Container className='cntw' style={{ padding: "3rem 0rem" }}>
                <Row><Col className='text-center text-uppercase pb-5'><h1 style={{ fontWeight: "900" }}>About Us</h1></Col></Row>
                <Row className='pt-2'>
                    <Col className='col-12 col-lg-6'>
                        <img src={require('../../img/asset 37.jpeg')} width={"100%"} alt="" />
                    </Col>
                    <Col className='col-12 col-lg-6'>
                        <div className='mauto pb-4'>
                            <h1 className='f-900 pt-4 abt text-center'>"Clothes that <br /> will be your best friends"</h1>
                            <ul className='pt-2 text-center'>
                                <li className='txt-light'>Compared with the size of the rest of him, waved about helplessly as he looked to me gregor then turned to look</li>
                            </ul>
                            <div className='itm-cnt'><input type="submit" value="Contact Us" className='cntbtn text-uppercase' /></div>
                        </div>
                        <div className='msn ps-lg-4 pe-lg-4 pt-4 pb-4 text-center'>
                            <h2 className='f-900'>Our Mission</h2>
                            <div className='txt-light'>Pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me gregor then turned to look out the window at the dull weather deal to the day</div>
                        </div>
                        <div className='msn ps-lg-4 pe-lg-4 pt-4 pb-4 text-center'>
                            <h2 className='f-900'>Goal Of Our Business</h2>
                            <div className='txt-light'>Pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What's happened to me gregor then turned to look out the window at the dull weather deal to the day</div>
                            <input type="submit" value="go to shop" className='mt-4 sbtbtn text-uppercase' />
                        </div>
                    </Col>
                </Row>
            </Container>

            <Testimonialslide />

            <Container className='pt-5 pb-5'>
                <Row className='g-4'>
                    <Col className='col-12 text-center'>
                        <div className='lastabt'>
                            <div className='text-uppercase abt1'>Recent news</div>
                            <div className='text-capitalize bigtxt-res abt2'>From our blog</div>
                        </div>
                    </Col>
                    <Col className='col-12 col-sm-6 col-lg-4'>
                        <div>
                            <img src={require('../../img/asset 38.jpeg')} className='w-100' alt="" />
                            <div className='text-uppercase lastcnt1 pt-4 d-flex'><div>27 nov 2020</div> <i className="bi bi-circle-fill"></i> <a href="/about">Fashion, Trend</a></div>
                            <div className='pt-3 lastcnt2'> <a href="/about"> Clothing Stores understands the human nature of presenting</a></div>
                            <div className='pt-2'><a href="/about" className='text-dark f-900'>Read More <i className="bi bi-arrow-right"></i></a></div>
                        </div>
                    </Col>
                    <Col className='col-12 col-sm-6 col-lg-4'>
                        <div>
                            <img src={require('../../img/asset 39.jpeg')} className='w-100' alt="" />
                            <div className='text-uppercase lastcnt1 pt-4 d-flex'><div>27 nov 2020</div> <i className="bi bi-circle-fill"></i> <a href="/about">Fashion, Trend</a></div>
                            <div className='pt-3 lastcnt2'> <a href="/about"> Clothing Stores understands the human nature of presenting</a></div>
                            <div className='pt-2'><a href="/about" className='text-dark f-900'>Read More <i className="bi bi-arrow-right"></i></a></div>
                        </div>
                    </Col>
                    <Col className='col-12 col-sm-6 col-lg-4'>
                        <div>
                            <img src={require('../../img/asset 40.jpeg')} className='w-100' alt="" />
                            <div className='text-uppercase lastcnt1 pt-4 d-flex'><div>27 nov 2020</div> <i className="bi bi-circle-fill"></i> <a href="/about">Fashion, Trend</a></div>
                            <div className='pt-3 lastcnt2'> <a href="/about"> Appearance is the first impression you convey to others solutiuo</a></div>
                            <div className='pt-2'><a href="/about" className='text-dark f-900'>Read More <i className="bi bi-arrow-right"></i></a></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Instainfo />
        </div>
    )
}

export default About
