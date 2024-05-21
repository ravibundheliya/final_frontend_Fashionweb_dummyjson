import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from 'react-redux';
import { pushdata } from '../../store/cartSlice';

function ProductDetails() {
    const params = useParams();
    const [data, setdata] = useState({});
    const [dataimg, setdataimg] = useState([]);
    const [cnt, setcnt] = useState(1);
    const [qty, setqty] = useState(1);
    const [disimage, setdisimage] = useState('');
    const dispatch = useDispatch();
    const cartvalue = useSelector((state) => state.cart.value)
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`)
            .then(res => res.json())
            .then((json) => {
                setdata(json);
                setdataimg(json.images);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [params.id]);

    const pluscart = () => {
        setqty(qty + 1)
    }
    const minusecart = () => {
        setqty((qty > 1) ? qty - 1 : 1)
    }

    const addtocart = () => {
        const updatevalue = { ...data, stock: qty }
        dispatch(pushdata(updatevalue))
        setqty(1);
    }
    console.log(cartvalue);
    const starPercentage = (data.rating / 5) * 100;
    const starPercentageRounded = `${Math.round(starPercentage)}%`;

    return (
        <div>
            <Container className="prdpadding pt-3">
                <Row>
                    <Col className='col-12 col-lg-6 p-2'>
                        <div className='thumbimage'>
                            <img src={(disimage === '') ? dataimg[0] : disimage} alt="" />
                        </div>
                        <div className='imagelist'>
                            {
                                dataimg.map((item, index) => {
                                    return (
                                        <div key={index} className='prdimage'>
                                            <img src={item} onClick={() => setdisimage(item)} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Col>
                    <Col className='col-12 col-lg-6 p-2'>
                        <h1 className='fw-bolder'>{data.title}</h1>
                        <h3 className='fw-bolder py-2'>₹{data.price} <del style={{ color: "grey", fontSize: "22px" }}>₹{Math.round((data.price * 100) / (100 - data.discountPercentage))}</del></h3>
                        <div className='d-flex' style={{ gap: "4px" }}>
                            <div className="star-rating">
                                <div className="stars-outer">
                                    <div className="stars-inner" style={{ width: starPercentageRounded }}></div>
                                </div>
                                <span className="rating">{data.rating} out of 5</span>
                            </div>
                        </div>
                        <div className='py-2' style={{ color: "grey" }}>{data.description}</div>
                        <div className='py-4'>
                            <div className='d-flex'>
                                <div><input type="text" className='qtyvalue' name="" id="" value={(qty > 0) ? qty : 1} readOnly /></div>
                                <div className='d-grid qtybtn'>
                                    <button onClick={pluscart}><i className="bi bi-caret-up"></i></button>
                                    <button onClick={minusecart}><i className="bi bi-caret-down"></i></button>
                                </div>
                                <button type="button" className="btn px-5 ms-3 addtobtn" onClick={addtocart} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Add to cart
                                </button>
                                {/* Modal */}
                                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel">{ }</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='py-2 d-flex heart'>
                            <div><i className="bi bi-heart"></i> <span>Add to wishlist</span></div>
                        </div>
                        <div className='p-2' style={{ cursor: "default", gap: "2px", display: "grid" }}>
                            <div className='d-flex'>
                                <div>SKU: </div>
                                <div className='ps-1'>{data.id}</div>
                            </div>
                            <div className='d-flex' style={{ gap: "5px" }}>
                                <div>Categories: </div>
                                <div className='d-flex ctg-det' style={{ color: "grey" }}>
                                    <div>{data.category}</div>
                                </div>
                            </div>
                            <div className='d-flex' style={{ gap: "5px" }}>
                                <div>Brands: </div>
                                <div className='d-flex ctg-det' style={{ color: "grey" }}>
                                    <div>{data.brand}</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='pt-5'>
                    <Col className="col-12">
                        <hr />
                        <div className="d-flex justify-content-center fw-bold drplist" style={{ gap: "20px" }}>
                            <div onClick={() => setcnt(1)} style={(cnt === 1) ? { color: "black" } : { color: "grey" }}>Description</div>
                            <div onClick={() => setcnt(2)} style={(cnt === 2) ? { color: "black" } : { color: "grey" }}>Review (03)</div>
                        </div>
                        <hr />
                    </Col>
                    <Col className='col-12 fw-normal'>
                        {
                            (cnt === 1) ? <p style={{ color: "grey", fontSize: "18px" }}>
                                {data.description}
                            </p> :
                                <div className='d-grid reviewlist' style={{ gap: "10px" }}>
                                    <div className='fw-bolder py-3'>Here you can review the item</div>
                                    <input type="text" className='p-2' style={{ color: "grey" }} placeholder='Name *' />
                                    <input type="email" className='p-2' style={{ color: "grey" }} placeholder='Email *' />
                                    <textarea name="" id="" className='p-2' style={{ color: "grey" }} placeholder='Address *' rows={4}></textarea>
                                    <div className='d-flex justify-content-between' style={{ alignItems: "center" }}>
                                        <div className='d-flex rw-start' style={{ gap: "5px" }}><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i></div>
                                        <button className='px-5 py-3 ms-3 addtobtn'>Submit</button>
                                    </div>
                                </div>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProductDetails
