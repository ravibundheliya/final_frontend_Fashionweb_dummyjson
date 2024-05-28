import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from "react-js-loader";
import Slider from 'react-slick';



var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
function Topproductsslide() {
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setProductData([]);
        axios.get('https://dummyjson.com/products')
            .then(response => {
                setProductData(response.data.products);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const shortTitle = (str) => {
        if (str.length > 20) {
            return str.substring(0, 20) + '...';
        }
        return str;
    }

    return (
        <div>
            <Container style={{ overflow: "hidden" }}>
                <Row style={{ overflow: "hidden" }}>
                    <Col className='col-12 col-md-8 sld-ttl' data-aos="slide-up" data-aos-duration="600">Top Selling Products</Col>
                    <Col className='col-12 col-md-4 sld-dtl text-start text-md-end pt-0 pt-md-4 text-uppercase' data-aos="slide-up" data-aos-duration="600"><a href="/">more products</a></Col>
                </Row>
                <hr data-aos="slide-left" />
            </Container>
            {loading && (
                <div className={"content pt-5"}>
                    <div className={"zoom-out"}>
                        <div className={"row g-0"}>
                            <div className={"item "}>
                                <Loader type="bubble-scale" bgColor={"#000000"} color={"#FFFFFF"} title={"bubble-scale"} size={100} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Container className='pb-5'>
                <Slider {...settings}>
                    {productData.map((item, index) => (
                        <div className='text-center prdback px-2' key={item.id}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={item.thumbnail} width={"100%"} />
                                <div className='icn'>
                                    <div><i className="bi bi-eye"></i></div>
                                    <div><i className="bi bi-heart"></i></div>
                                    <div><i className="bi bi-cart"></i></div>
                                </div>
                                <Card.Body className='p-2'>
                                    <Card.Title>
                                        <Link to={`/productpage/${item.id}`} className='text-dark'>
                                            {shortTitle(item.title)}
                                        </Link>
                                    </Card.Title>
                                    <h4 className='fw-bold'>
                                        <i className="bi bi-currency-rupee text-dark"></i>{item.price}
                                    </h4>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </Slider>

            </Container>
        </div>
    );
}

export default Topproductsslide;
