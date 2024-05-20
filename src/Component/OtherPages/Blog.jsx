import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';
import Instainfo from '../Home/Instainfo';

function Blog() {
    return (
        <>
            <Container className='cntw' style={{ padding: "3rem 0rem" }}>
                <Row><Col className='text-center text-uppercase pb-5'><h1 style={{ fontWeight: "900" }}>Blog Page</h1></Col></Row>
                <Row className='g-5'>
                    <Col className='col-12 col-lg-8'>
                        <div>
                            <img src={require('../../img/asset 27.jpeg')} className='w-100' alt="" />
                        </div>
                        <div className='d-grid blgtxt pt-3'>
                            <h3 style={{ fontFamily: "sans-serif", fontWeight: "700" }}>Appearance is the first impression you convey to others major factor that contributes</h3>
                            <p>Wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards.</p>
                            <div className='d-flex inblgtxt'>
                                <i className="bi bi-patch-question"></i>
                                <h4 style={{ fontFamily: "sans-serif", fontWeight: "700" }}>Wasn't a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay</h4>
                            </div>
                            <p>Rcently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer dregor. hat he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p>
                        </div>
                        <div className='d-flex icn3 pt-3' style={{ gap: "15px" }}>
                            <i className="bi bi-share"></i>
                            <a href="index.html"><i style={{ fontSize: "16px" }} className="bi bi-facebook"></i></a>
                            <a href="index.html"><i style={{ fontSize: "16px" }} className="bi bi-twitter-x"></i></a>
                            <a href="index.html"><i style={{ fontSize: "16px" }} className="bi bi-linkedin"></i></a>
                            <a href="index.html"><i style={{ fontSize: "16px" }} className="bi bi-instagram"></i></a>
                        </div>
                        <hr />
                        <div className='preblog pt-5 pb-5'>
                            <div className='preblog1'>
                                <img src={require('../../img/asset 28.jpeg')} alt="" />
                            </div>
                            <div className='preblog2 d-grid'>
                                <div><b>Author: Shaim jone</b></div>
                                <div className='lighttxt'>Housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards</div>
                                <div className='d-flex icn3'>
                                    <a href="index.html"><i className="bi bi-facebook"></i></a>
                                    <a href="index.html"><i className="bi bi-twitter-x"></i></a>
                                    <a href="index.html"><i className="bi bi-linkedin"></i></a>
                                    <a href="index.html"><i className="bi bi-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h4 style={{ fontWeight: "900" }}>3 COMMENTS</h4>
                            <div>
                                <div className='preblog pt-5 pb-5'>
                                    <div className='preblog1'>
                                        <img src={require('../../img/asset 29.jpeg')} alt="" />
                                    </div>
                                    <div className='preblog2 d-grid'>
                                        <div><b className='aft'>Dichel newn</b></div>
                                        <div className='lighttxt'>Housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards</div>
                                        <div className='d-flex icn3'>
                                            <a href="index.html"><i className="bi bi-reply-all-fill"></i> REPLY</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='preblog pt-5 pb-5'>
                                    <div className='preblog1'>
                                        <img src={require('../../img/asset 30.jpeg')} alt="" />
                                    </div>
                                    <div className='preblog2 d-grid'>
                                        <div><b className='aft'>Dichel newn</b></div>
                                        <div className='lighttxt'>Housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards</div>
                                        <div className='d-flex icn3'>
                                            <a href="index.html"><i className="bi bi-reply-all-fill"></i> REPLY</a>
                                        </div>
                                    </div>
                                </div>
                                <div className='preblog pt-5 pb-5'>
                                    <div className='preblog1'>
                                        <img src={require('../../img/asset 31.jpeg')} alt="" />
                                    </div>
                                    <div className='preblog2 d-grid'>
                                        <div><b className='aft'>Dichel newn</b></div>
                                        <div className='lighttxt'>Housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards</div>
                                        <div className='d-flex icn3'>
                                            <a href="index.html"><i className="bi bi-reply-all-fill"></i> REPLY</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Container fluid>
                            <Row className='g-4'>
                                <Col className='col-12'>
                                    <div><h4 className='text-uppercase' style={{ fontWeight: "900" }}>LEAVE YOUR THOUGHT</h4></div>
                                </Col>
                                <Col className='col-12'>
                                    <div>
                                        <textarea name="" id="txtarea" rows="5" placeholder='Write your comment...'></textarea>
                                    </div>
                                </Col>
                                <Col className='col-12'>
                                    <div>
                                        <input type="url" placeholder='Website' name="" id="txtarea" />
                                    </div>
                                </Col>
                                <Col className='col-12 col-md-6'>
                                    <div>
                                        <input type="text" placeholder='Name' name="" id="txtarea" />
                                    </div>
                                </Col>
                                <Col className='col-12 col-md-6'>
                                    <div>
                                        <input type="email" placeholder='Email' name="" id="txtarea" />
                                    </div>
                                </Col>
                                <Col className='col-12'>
                                    <div>
                                        <input type="submit" value="Submit" className='sbtbtn text-uppercase' />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col className='col-12 col-lg-4'>
                        <div className='ps-lg-4 pe-lg-4'>
                            <div className='pb-4'>
                                <h5 style={{ fontWeight: "900" }}>Search</h5>
                                <div className='d-flex searchbtn'>
                                    <input type="text" placeholder='Search Post...' />
                                    <i className="bi bi-search"></i>
                                </div>
                            </div>
                            <div className='pt-2 pb-4'>
                                <h5 style={{ fontWeight: "900" }}>Categories</h5>
                                <ul className='ctglist'>
                                    <li><a href="/blog">Funding (2)</a></li>
                                    <li><a href="/blog">Charity organization (7)</a></li>
                                    <li><a href="/blog">Helpless (51)</a></li>
                                    <li><a href="/blog">Charity (5)</a></li>
                                    <li><a href="/blog">Children (10)</a></li>
                                </ul>
                            </div>
                            <div className='pt-2 pb-4'>
                                <h5 style={{ fontWeight: "900" }}>Recent Post</h5>
                                <div className='pt-3 d-flex sldcontent'>
                                    <img src={require("../../img/asset 32.jpeg")} alt="" />
                                    <div>
                                        <h6 style={{ fontWeight: "900", fontSize: "14px" }}> <a href="/blog" className='sldcontenttext'>Upright, raising a heavy fur muff that covered the whole lower</a></h6>
                                        <div>Jan 19 2021</div>
                                    </div>
                                </div>
                                <div className='pt-4 d-flex sldcontent'>
                                    <img src={require("../../img/asset 33.jpeg")} alt="" />
                                    <div>
                                        <h6 style={{ fontWeight: "900", fontSize: "14px" }}> <a href="/blog" className='sldcontenttext'>Arm towards the viewer pegor then turned to look out the window</a></h6>
                                        <div>Jan 19 2021</div>
                                    </div>
                                </div>
                                <div className='pt-4 d-flex sldcontent'>
                                    <img src={require("../../img/asset 34.jpeg")} alt="" />
                                    <div>
                                        <h6 style={{ fontWeight: "900", fontSize: "14px" }}> <a href="/blog" className='sldcontenttext'>Housed in a nice, gilded frameshowed a lady fitted out with</a></h6>
                                        <div>Jan 19 2021</div>
                                    </div>
                                </div>

                            </div>
                            <div className='pt-2 pb-4'>
                                <h5 style={{ fontWeight: "900" }}>About</h5>
                                <p className='txt12'>Aowards the viewer hregor then turned to look out the window at the dull weather towards the viewer regor then turned to look</p>
                            </div>
                            <div className='pt-2 pb-4'>
                                <h5 style={{ fontWeight: "900" }}>Tags</h5>
                                <p className='txt12'>Charity, Organization, Donation, Manfacturing, Children, Funds</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Instainfo />
        </>
    )
}

export default Blog
