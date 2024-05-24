import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css';
import Profileheader from '../Partitial/Profileheader';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { resetpassword } from '../../store/userSlice';

function Resetpass() {
    const user = useSelector((state) => state.user.logindata);
    const dispatch = useDispatch(); 
    const [data, setdata] = useState({
        oldpassword: '',
        newpassword: '',
        conpassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata((predata) => ({
            ...predata,
            [name]: value
        }))
    }

    const submitpassword = () => {

        if (!user.password.match(data.oldpassword)) {
                let notify = () => toast("Enter Currect Old Password !");
            notify();
        }
        if (!data.newpassword.match(data.conpassword)) {
            let notify = () => toast("Enter New & Confirm Password Same !");
            notify();
        }

        if (user.password.match(data.oldpassword) && data.newpassword.match(data.conpassword) && data.newpassword !== '' && data.conpassword !== '') {
            dispatch(resetpassword(data.conpassword));
            let notify = () => toast("Password Changed Successfully");
            notify();
            setdata({
                oldpassword: '',
                newpassword: '',
                conpassword: ''
            })
        }
        else {
            let notify = () => toast("Enter All Details !");
            notify();
        }
    }

    return (
        <div className='pt-4 pb-5'>
            <h1 className='text-center fw-bolder'>Reset Password</h1>
            <Container className='pt-3'>
                <Row>
                    <Col className='col-12 col-md-5 col-lg-3'>
                        <Profileheader />
                    </Col>
                    <Col className='col-12 col-md-7 col-lg-9'>
                        <div>
                            <div className='boxtext d-grid'>
                                <span className='pt-3'>Enter Old Password <span className='text-danger fw-bolder'> *</span></span>
                                <input type="password" name='oldpassword' value={data.oldpassword} onChange={handleChange} />
                                <span className='pt-3'>Enter New Password <span className='text-danger fw-bolder'> *</span></span>
                                <input type="password" name='newpassword' value={data.newpassword} onChange={handleChange} />
                                <span className='pt-3'>Confirm Password <span className='text-danger fw-bolder'> *</span></span>
                                <input type="password" name='conpassword' value={data.conpassword} onChange={handleChange} />
                                <span className='text-danger fw-bolder pt-2'></span>
                                <div className='pt-4 pt-lg-3 d-grid d-lg-flex justify-content-center justify-content-lg-between' style={{ alignItems: "center" }}>
                                    <button className='loginbtn fw-bolder' onClick={submitpassword}>Submit</button>
                                    <Link to="/login" className='text-dark my-3 my-lg-0' style={{ textDecoration: "underline", fontSize: "14px" }}>Forgotten password?</Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </div>
    )
}

export default Resetpass
