import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css';
import Profileheader from '../Partitial/Profileheader';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function OrderDetails() {
    const user = useSelector((state) => state.user.logindata)

    return (
        <div className='pt-4 pb-5'>
            <h1 className='text-center fw-bolder'>Order History</h1>
            <Container className='pt-3'>
                <Row>
                    <Col className='col-12 col-md-5 col-lg-3'>
                        <Profileheader />
                    </Col>
                    <Col className='col-12 col-md-7 col-lg-9 pt-5 pt-md-0'>
                        {
                            (user.orders.length)
                            ?<div className='tablecontain w-100'>
                            <table border={"2px"} className='ordertable'>
                                <tr>
                                    <th className='text-center'>Status</th>
                                    <th>Products</th>
                                    <th>Address</th>
                                    <th>Total</th>
                                    <th>Date / Time</th>
                                </tr>
                                {
                                    user.orders.map((item) => {
                                        return (
                                            <tr>
                                                <td className={"text-success text-center fw-bold"}>
                                                    {
                                                        (item.status === "pending")
                                                            ? <Link to='/orderpage' className='text-warning' style={{ textDecoration: "underline" }}>{item.status}</Link>
                                                            : <span>{item.status}</span>
                                                    }
                                                </td>
                                                <td>
                                                    <ul className='m-0'>
                                                        {
                                                            item.products.map((item) => {
                                                                return (
                                                                    <li>
                                                                        <span>{item.title}</span>
                                                                        <span className='ps-2'>x {item.cartqty}</span>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </td>
                                                <td>{item.shippingAddress.label}</td>
                                                <td>₹ {item.grandTotal}</td>
                                                <td>28/05/2024 15:00 PM</td>
                                            </tr>
                                        )
                                    })
                                }
                            </table>
                        </div>
                        : <h1 className='text-center' style={{padding:"100px 0px",color:"lightgray"}}>Didn't Place any order yet !</h1>
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OrderDetails
