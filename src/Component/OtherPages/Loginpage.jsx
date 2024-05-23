import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginuser } from '../../store/userSlice';

function Loginpage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const alluser = useSelector((state) => state.user.value);
    const logUser = useSelector((state) => state.user.logindata);
    const [data, setdata] = useState({
        email: '',
        password: ''
    });
    useEffect(() => {
        console.log(logUser);
    }, [logUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata((prevdata) => ({
            ...prevdata,
            [name]: value
        }))
    }
    const checkingdata = () => {
        dispatch(loginuser(data))
        const check = alluser.some(item => item.email === data.email && item.password === data.password)
        if (check) {
            navigate('/');
        }
        else{
            alert("Enter valid Email and Password...")
        }
    }
    return (
        <div>
            <Container className='py-5'>
                <Row className='px-3 px-sm-0'>
                    <Col className='p-3 p-md-4 loginbox'>
                        <h3 className='fw-bolder text-center'>Login</h3>
                        <div className='boxtext d-grid'>
                            <span className='pt-3'>Email Address <span className='text-danger fw-bolder'> *</span></span>
                            <input type="email" name="email" value={data.email} onChange={(e) => handleChange(e)} />
                            <span className='pt-3'>Password <span className='text-danger fw-bolder'> *</span></span>
                            <input type="password" name="password" value={data.password} onChange={(e) => handleChange(e)} />
                            <div className='pt-4 pt-lg-3 d-grid d-lg-flex justify-content-center justify-content-lg-between' style={{ alignItems: "center" }}>
                                <button className='loginbtn fw-bolder' onClick={checkingdata}>Log in</button>
                                <Link to="/login" className='text-dark my-3 my-lg-0' style={{ textDecoration: "underline", fontSize: "14px" }}>Forgotten password?</Link>
                            </div>
                        </div>
                        <div className='text-center'>
                            <Link to="/signin" className='changepage py-2 px-3'>Create new account</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Loginpage