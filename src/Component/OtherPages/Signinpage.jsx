import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { adduser } from '../../store/userSlice';

function Signinpage() {
    const [formData, setformData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: ''
    });

    const [passwordValidation, setPasswordValidation] = useState({
        hasUppercase: false,
        hasLowercase: false,
        hasNumber: false,
        hasSymbol: false,
        isValidLength: false
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userFromRedux = useSelector((state) => state.user.value);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData(prevData => ({
            ...prevData,
            [name]: value
        }));
        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;
        const number = /[0-9]/;
        const symbol = /[!@#$%^&*_=+-]/;
        if (name === "password") {
            setPasswordValidation({
                hasUppercase: uppercase.test(value),
                hasLowercase: lowercase.test(value),
                hasNumber: number.test(value),
                hasSymbol: symbol.test(value),
                isValidLength: value.length >= 8 && value.length <= 12
            });
        }
    };

    const validEmail = (email) => {
        const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailpattern.test(email);
    }

    const validMobile = (mobile) => {
        const mobilepattern = /^[0-9]{10}$/;
        return mobilepattern.test(mobile);
    }

    const validPassword = (password) => {
        const passwordpattern = /^[a-zA-Z0-9!@#%^&*_=+-]{8,12}$/;
        return passwordpattern.test(password);
    }
    const emailEntery = (email) => {
        const emailcheck = userFromRedux.some(item => item.email === email);
        return emailcheck;
    }

    const mobileEntery = (mobile) => {
        const mobilecheck = userFromRedux.some(item => item.mobile === mobile);
        return mobilecheck;
    }

    const dispatchdata = () => {
        if (formData.name && formData.email && formData.mobile && formData.password) {
            if (!validEmail(formData.email)) {
                alert("Enter valid Email !")
            }
            else if (!validMobile(formData.mobile)) {
                alert("Enter valid Mobile !")
            }
            else if (!validPassword(formData.password)) {
                alert("Enter valid Password !")
            }
            else if (emailEntery(formData.email)) {
                alert("Entered Email is already added !")
            }
            else if (mobileEntery(formData.mobile)) {
                alert("Entered Mobile is already added !")
            }
            else {
                dispatch(adduser(formData))
                setformData({
                    name: '',
                    mobile: '',
                    email: '',
                    password: ''
                });
                navigate("/login");
            }
        } else {
            alert("Enter All details !!");
        }
    };

    return (
        <div>
            <Container className='py-5'>
                <Row className='px-3 px-sm-0'>
                    <Col className='p-3 p-md-4 loginbox'>
                        <h3 className='fw-bolder text-center'>Register an account</h3>
                        <div className='boxtext d-grid'>
                            <span className='pt-3'>Name <span className='text-danger fw-bolder'> *</span></span>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <span className='pt-3'>Mobile <span className='text-danger fw-bolder'> *</span></span>
                            <input
                                type="number"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                            />
                            <span className='pt-3'>Email Address <span className='text-danger fw-bolder'> *</span></span>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => handleChange(e)}
                            />
                            <span className='pt-3'>Create Password <span className='text-danger fw-bolder'> *</span></span>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <ul className='d-grid d-lg-flex justify-content-between pt-2 fw-bolder'>
                                <li className={passwordValidation.hasUppercase ? 'text-success' : 'text-danger'}><i className={passwordValidation.hasUppercase ? 'bi bi-check-circle' : 'bi bi-x-circle'}></i> At least 1 Uppercase</li>
                                <li className={passwordValidation.hasLowercase ? 'text-success' : 'text-danger'}><i className={passwordValidation.hasLowercase ? 'bi bi-check-circle' : 'bi bi-x-circle'}></i> At least 1 Lowercase</li>
                                <li className={passwordValidation.hasNumber ? 'text-success' : 'text-danger'}><i className={passwordValidation.hasNumber ? 'bi bi-check-circle' : 'bi bi-x-circle'}></i> At least 1 Number</li>
                                <li className={passwordValidation.hasSymbol ? 'text-success' : 'text-danger'}><i className={passwordValidation.hasSymbol ? 'bi bi-check-circle' : 'bi bi-x-circle'}></i> At least 1 Symbol</li>
                                <li className={passwordValidation.isValidLength ? 'text-success' : 'text-danger'}><i className={passwordValidation.isValidLength ? 'bi bi-check-circle' : 'bi bi-x-circle'}></i> Min 8 chars and Max 12 chars</li>
                            </ul>
                            <div className='pt-3 d-grid d-lg-flex justify-content-center justify-content-lg-between' style={{ alignItems: "center" }}>
                                <button className='loginbtn fw-bolder' onClick={dispatchdata}>Register</button>
                                <Link to="/login" className='changepage mt-2 py-2 px-3'>Already have an account!</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Signinpage;