import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css';
import Profileheader from '../Partitial/Profileheader';
import { useDispatch, useSelector } from 'react-redux';
import { addUserAddress, deleteaddress } from '../../store/userSlice';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function Profileaddress() {
    const [droplist, setdroplist] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const getaddress = useSelector((state) => state.user.logindata.address);
    const dispatch = useDispatch();
    const [address, setaddress] = useState({
        label: '',
        area: '',
        city: '',
        state: '',
        country: '',
        postcode: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setaddress((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }
    const addNewAddres = () => {
        if (address.label !== '' && address.area !== '' && address.city !== '' && address.country !== '' && address.postcode !== '') {
            setdroplist(false);
            setShow(false);
            dispatch(addUserAddress(address))
            setaddress({
                label: '',
                area: '',
                city: '',
                state: '',
                country: '',
                postcode: ''
            })
        }
        else {
            console.log('wrong');
        }
    }
    const editaddress = (e) => {
        setShow(true);
        setaddress(getaddress[e]);
        console.log((address));
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
                        <button onClick={() => setdroplist(true)} className='stylebtn fw-bold text-uppercase p-2 px-md-3 py-md-2'>Add New Address</button>
                        {
                            droplist
                                ? <Row className='pt-3'>
                                    <Col className='col-12 boxtext'>
                                        <label htmlFor="label">Address Label<span className='text-danger fw-bolder'> *</span></label>
                                        <input type="text" id='label' name='label' value={address.label} placeholder='Ex. : Home, Office etc...' onChange={handleChange} className='w-100' />
                                    </Col>
                                    <Col className='col-12 boxtext pt-3'>
                                        <label htmlFor="area">Address Apartment, suite, etc.<span className='text-danger fw-bolder'> *</span></label>
                                        <input type="text" id='area' name='area' value={address.area} onChange={handleChange} className='w-100' />
                                    </Col>
                                    <Col className='col-12 col-md-4 boxtext pt-3'>
                                        <label htmlFor="country">Country/Region<span className='text-danger fw-bolder'> *</span></label>
                                        <input type="text" id='country' name='country' value={address.country} onChange={handleChange} className='w-100' />
                                    </Col>
                                    <Col className='col-12 col-md-4 boxtext pt-3'>
                                        <label htmlFor="state">State<span className='text-danger fw-bolder'> *</span></label>
                                        <input type="text" id='state' name='state' value={address.state} onChange={handleChange} className='w-100' />
                                    </Col>
                                    <Col className='col-12 col-md-4 boxtext pt-3'>
                                        <label htmlFor="city">City<span className='text-danger fw-bolder'> *</span></label>
                                        <input type="text" id='city' name='city' value={address.city} onChange={handleChange} className='w-100' />
                                    </Col>
                                    <Col className='col-12 boxtext pt-3'>
                                        <label htmlFor="postcode">Postal/Zip Code<span className='text-danger fw-bolder'> *</span></label>
                                        <input type="number" id='postcode' name='postcode' value={address.postcode} onChange={handleChange} className='w-100' />
                                    </Col>
                                    <Col className='col-12 pt-3'>
                                        <div className='d-flex justify-content-between'>
                                            <button onClick={addNewAddres} className='stylebtn fw-bold text-uppercase p-2 px-md-3 py-md-2'>Submit</button>
                                            <button onClick={() => setdroplist(false)} className='stylebtn fw-bold text-uppercase p-2 px-md-3 py-md-2'>Cancel</button>
                                        </div>
                                    </Col>
                                </Row>
                                : ''
                        }
                        {
                            (getaddress.length !== 0)
                                ? getaddress.map((item, index) => {
                                    return (
                                        <div key={item.label}>
                                            <div className='mt-4 p-3 p-md-4 dataitem w-100'>
                                                <div>{item.label}</div>
                                                <div>{item.area}</div>
                                                <div>{item.postcode} - {item.city}, {item.state},</div>
                                                <div>{item.country}</div>
                                                <div className='pt-2'>
                                                    <button className='stylebtn newstylebtn fw-bold text-uppercase p-2 px-md-3 py-md-2' onClick={() => editaddress(index)}>Edit</button>
                                                    <Button className='stylebtn newstylebtn fw-bold text-uppercase p-2 px-md-3 py-md-2 ms-2' onClick={() => dispatch(deleteaddress(item.label))}>Delete</Button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                : <h1 className='text-center pt-5'>Add your Address</h1>
                        }
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>You can not chanage Label name</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <Row className='pt-3'>
                                    <Col className='col-12 boxtext'>
                                        <label htmlFor="label">Address Label<span className='text-danger fw-bolder'> *</span></label>
                                        <input type="text" id='label' name='label' value={address?.label} onChange={handleChange} className='w-100' readOnly />
                                    </Col>
                                    <Col className='col-12 boxtext pt-3'>
                                        <label htmlFor="area">Address Apartment, suite, etc.<span className='text-danger fw-bolder'> *</span></label>
                                        <input type="text" id='area' name='area' value={address?.area} onChange={handleChange} className='w-100' />
                                    </Col>
                                    <Col className='col-12 col-md-4 boxtext pt-3'>
                                        <label htmlFor="country">Country/Region<span className='text-danger fw-bolder'> *</span></label>
                                        <input type="text" id='country' name='country' value={address?.country} onChange={handleChange} className='w-100' />
                                    </Col>
                                    <Col className='col-12 col-md-4 boxtext pt-3'>
                                        <label htmlFor="state">State<span className='text-danger fw-bolder'> *</span></label>
                                        <input type="text" id='state' name='state' value={address?.state} onChange={handleChange} className='w-100' />
                                    </Col>
                                    <Col className='col-12 col-md-4 boxtext pt-3'>
                                        <label htmlFor="city">City<span className='text-danger fw-bolder'> *</span></label>
                                        <input type="text" id='city' name='city' value={address?.city} onChange={handleChange} className='w-100' />
                                    </Col>
                                    <Col className='col-12 boxtext pt-3'>
                                        <label htmlFor="postcode">Postal/Zip Code<span className='text-danger fw-bolder'> *</span></label>
                                        <input type="number" id='postcode' name='postcode' value={address?.postcode} onChange={handleChange} className='w-100' />
                                    </Col>
                                    <Col className='col-12 pt-3'>
                                        <div className='d-flex justify-content-between'>
                                            <button onClick={addNewAddres} className='stylebtn fw-bold text-uppercase p-2 px-md-3 py-md-2'>Update</button>
                                            <button onClick={handleClose} className='stylebtn fw-bold text-uppercase p-2 px-md-3 py-md-2'>Cancel</button>
                                        </div>
                                    </Col>
                                </Row>
                            </Modal.Body>
                        </Modal>
                        <div className='d-flex justify-content-end'>
                            <Link to='/orderpage' className='mt-4 stylebtn newstylebtn fw-bold text-uppercase p-2 px-md-3 py-md-2'>Checkout Page</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profileaddress
