import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css';
import Profileheader from '../Partitial/Profileheader';

function Profileaddress() {
    const [address, setaddress] = useState({
        label: '',
        area: '',
        city: '',
        state: '',
        country: '',
        postcode: null
    })
    const addNewAddres = () => {

    }
    return (
        <div className='pt-4 pb-5'>
            <h1 className='text-center fw-bolder'>Address Book</h1>
            <Container className='pt-3'>
                <Row>
                    <Col className='col-12 col-md-5 col-lg-3'>
                        <Profileheader />
                    </Col>
                    <Col className='col-12 col-md-7 col-lg-9 pt-3 pt-md-0'>
                        <button onClick={addNewAddres} className='stylebtn fw-bold text-uppercase p-2 px-md-3 py-md-2'>Add New Address</button>
                        <Row className='pt-3'>
                            <Col className='col-12 boxtext'>
                                <label htmlFor="label">Address Label<span className='text-danger fw-bolder'> *</span></label>
                                <input type="text" id='label' className='w-100' />
                            </Col>
                            <Col className='col-12 boxtext pt-3'>
                                <label htmlFor="address">Address Apartment, suite, etc.<span className='text-danger fw-bolder'> *</span></label>
                                <input type="text" id='address' className='w-100' />
                            </Col>
                            <Col className='col-12 col-md-4 boxtext pt-3'>
                                <label htmlFor="country">Country/Region<span className='text-danger fw-bolder'> *</span></label>
                                <input type="text" id='country' className='w-100' />
                            </Col>
                            <Col className='col-12 col-md-4 boxtext pt-3'>
                                <label htmlFor="state">State<span className='text-danger fw-bolder'> *</span></label>
                                <input type="text" id='state' className='w-100' />
                            </Col>
                            <Col className='col-12 col-md-4 boxtext pt-3'>
                                <label htmlFor="city">City<span className='text-danger fw-bolder'> *</span></label>
                                <input type="text" id='city' className='w-100' />
                            </Col>
                            <Col className='col-12 boxtext pt-3'>
                                <label htmlFor="postal">Postal/Zip Code<span className='text-danger fw-bolder'> *</span></label>
                                <input type="number" id='postal' className='w-100' />
                            </Col>
                            <Col className='col-12 pt-3'>
                                <div className='d-flex justify-content-between'>
                                    <button onClick={addNewAddres} className='stylebtn fw-bold text-uppercase p-2 px-md-3 py-md-2'>Submit</button>
                                    <button onClick={addNewAddres} className='stylebtn fw-bold text-uppercase p-2 px-md-3 py-md-2'>Cancel</button>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profileaddress
