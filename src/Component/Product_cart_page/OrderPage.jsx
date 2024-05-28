import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import Accordion from 'react-bootstrap/Accordion';
import { Link, useNavigate } from 'react-router-dom';
import { userPushOrder, userclearall } from '../../store/userSlice';
import { ToastContainer, toast } from 'react-toastify';

function OrderPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const orderDetail = useSelector((state) => state.user.logindata?.orders);
    const newOrderDetails = orderDetail[orderDetail?.length - 1]
    const getaddress = useSelector((state) => state.user.logindata?.address);
    const [disAddress, setDisAddress] = useState(null);
    const [confirmAddress, setConfirmAddress] = useState(null);
    const [couponInput, setCouponInput] = useState("");
    const [storeCoupon, setStoreCoupon] = useState(0);
    const [couponValue, setCouponValue] = useState(0);
    const [newGrandTotal, setNewGrandTotal] = useState(0);
    const coupons = [
        {
            code: "FIRST10",
            discount: 10
        },
        {
            code: "WELCOME20",
            discount: 20
        }
    ]

    useEffect(() => {
        setCouponValue(parseFloat((newOrderDetails?.grandTotal) * (storeCoupon / 100)).toFixed(2));
        setNewGrandTotal(parseFloat((newOrderDetails?.grandTotal) - (couponValue)).toFixed(2));
    }, [newOrderDetails, storeCoupon, couponValue])

    const selectedAddress = (item) => {
        setDisAddress(item?.label);
        setConfirmAddress(item);
    }

    const checkCoupon = () => {
        const check = coupons.find((item) => item.code === couponInput);
        if (check) {
            setStoreCoupon(check.discount);
            toast("Congrats... Coupon Applied !!")
        }
        else {
            setStoreCoupon(0);
            toast("Sorry... Coupon not exist !!")
        }
    }
    const confirmOrder = () => {
        if (confirmAddress !== null) {
            const confirmData = {
                status: "confirm",
                products: newOrderDetails.products,
                subTotal: newOrderDetails.subTotal,
                shippingAddress: confirmAddress,
                shippingCharges: newOrderDetails.shippingCharges,
                couponCode: storeCoupon,
                grandTotal: newGrandTotal,
            }
            navigate('/');
            dispatch(userPushOrder(confirmData))
            dispatch(userclearall());
        }
        else {
            toast("Select Address !")
        }
    }

    return (
        <div>
            {
                (newOrderDetails.status === "pending")
                    ? <Container className='py-5'>
                        <Row>
                            <Col className='col-12'>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Have a Coupon ?<div className='d-none d-md-block accrheader fw-bolder ps-2 pt-1'>Click here to enter your code</div></Accordion.Header>
                                        <Accordion.Body className='boxtext'>
                                            <input type="text" placeholder='Coupon Code' onChange={(e) => setCouponInput(e.target.value)} className='w-100' />
                                            <button onClick={checkCoupon} className='mt-3 stylebtn fw-bold text-uppercase p-2 px-md-3 py-md-2'>Submit</button>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>
                            <Col className='col-12 col-md-7'>
                                {
                                    (getaddress.length)
                                        ? getaddress.map((item, index) => {
                                            return (
                                                <div key={item.label}>
                                                    <div className='mt-4 p-3 p-md-4 dataitem w-100'>
                                                        <div>{item.label}</div>
                                                        <div>{item.area}</div>
                                                        <div>{item.postcode} - {item.city}, {item.state},</div>
                                                        <div>{item.country}</div>
                                                        <div className='pt-2'>
                                                            <button
                                                                onClick={() => selectedAddress(item)}
                                                                className={
                                                                    (disAddress === item.label)
                                                                        ? 'stylebtn newstylebtn fw-bold text-uppercase bg-dark text-light p-2 px-md-3 py-md-2'
                                                                        : 'stylebtn newstylebtn fw-bold text-uppercase p-2 px-md-3 py-md-2'
                                                                }
                                                            >
                                                                {
                                                                    (disAddress === item.label)
                                                                        ? <span><i className="bi bi-check-lg fw-bolder"></i> Selected</span>
                                                                        : <span>Select</span>
                                                                }
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : <Link to='/address' className='text-center'><h3 className='mt-5' style={{ textDecoration: "underline" }}>Add your Address</h3></Link>
                                }
                            </Col>
                            <Col className='col-12 col-md-5 px-4'>
                                <h3 className='mt-4 fw-bolder'>Your Order</h3>
                                <div className='d-flex main_border order-main py-3 px-3'>
                                    <div className='order-one fw-bolder'>Products</div>
                                    <div className='order-two fw-bolder'>Total</div>
                                </div>

                                {/* Product List Start */}
                                {
                                    newOrderDetails?.products?.map((item) => {
                                        return (
                                            <div key={item.id} className='d-flex order-main px-3'>
                                                <div className='order-one'>{item.title} <span className='ps-2'>x{item.cartqty}</span> </div>
                                                <div className='order-two py-2 px-2'>₹{item.totalprice}</div>
                                            </div>
                                        )
                                    })
                                }
                                {/* Product List End */}

                                <div className='d-flex order-main px-3'>
                                    <div className='order-one fw-bold'>Subtotal</div>
                                    <div className='order-two sub_border py-3 px-2 fw-bold'>₹{newOrderDetails?.subTotal}</div>
                                </div>
                                <div className='d-flex order-main px-3'>
                                    <div className='order-one fw-bold'>Shipping</div>
                                    <div className='order-two sub_border py-3 px-2 fw-bold'>
                                        {
                                            (newOrderDetails.shippingCharges === 0)
                                                ? <span className='text-success'>Free Shipping</span> : <span>+ ₹{newOrderDetails?.shippingCharges}</span>
                                        }
                                    </div>
                                </div>
                                <div className='d-flex order-main px-3'>
                                    <div className='order-one fw-bold'>Coupon Discount</div>
                                    <div className='order-two sub_border py-3 px-2 fw-bold'>
                                        {
                                            storeCoupon !== 0
                                                ? <span className='text-success'>- ₹{couponValue} <span className='ps-2' style={{ fontSize: "12px" }}>(-{storeCoupon}%)</span></span>
                                                : <span className='fw-normal' style={{ fontSize: "12px" }}>Coupon not applied yet !</span>
                                        }
                                    </div>
                                </div>
                                <div className='d-flex order-main px-3' style={{ fontSize: "18px" }}>
                                    <div className='order-one fw-bold'>Total</div>
                                    <div className='order-two sub_border py-3 px-3 fw-bold'>₹{newGrandTotal}</div>
                                </div>
                                <div>
                                    <button onClick={confirmOrder} className='stylebtn newstylebtn fw-bold text-uppercase bg-dark text-light p-2 px-md-4 py-md-3'>Order Confirm</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    : <h1 className='fw-bolder text-center' style={{ padding: "100px 0px" }}>No data found !</h1>
            }

            <ToastContainer />
        </div>
    )
}

export default OrderPage