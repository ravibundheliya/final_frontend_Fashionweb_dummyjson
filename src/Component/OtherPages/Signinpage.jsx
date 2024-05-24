import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { adduser } from '../../store/userSlice';
import { ToastContainer, toast } from 'react-toastify';

function Signinpage() {
    const [formData, setformData] = useState({
        name: '',
        mobile: '',
        email: '',
        password: '',
        cart: [],
        wishlist: [],
        address: []
    });

    const [passwordValidation, setPasswordValidation] = useState({
        hasUppercase: false,
        hasLowercase: false,
        hasNumber: false,
        hasSymbol: false,
        isValidLength: false
    });

    const name = useRef();
    const mobile = useRef();
    const email = useRef();
    const password = useRef();
    const message = useRef();
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
    const validEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validMobile = (mobile) => /^[0-9]{10}$/.test(mobile);
    const validPassword = (password) => /^[a-zA-Z0-9!@#%^&*_=+-]{8,12}$/.test(password);
    const emailEntery = (email) => userFromRedux.some(item => item.email === email);
    const mobileEntery = (mobile) => userFromRedux.some(item => item.mobile === mobile);

    const dispatchdata = () => {
        if (formData.name && formData.email && formData.mobile && formData.password) {
            if (!validEmail(formData.email)) {
                email.current.style.borderColor = "red";
                email.current.style.borderWidth = "2px";
                const notify = () => toast("Enter valid Email !");
                notify();
            }
            else if (!validMobile(formData.mobile)) {
                mobile.current.style.borderColor = "red";
                mobile.current.style.borderWidth = "2px";
                const notify = () => toast("Enter valid Mobile !");
                notify();
            }
            else if (!validPassword(formData.password)) {
                password.current.style.borderColor = "red";
                password.current.style.borderWidth = "2px";
                const notify = () => toast("Enter valid Password !");
                notify();
            }
            else if (emailEntery(formData.email)) {
                email.current.style.borderColor = "red";
                email.current.style.borderWidth = "2px";
                const notify = () => toast("Entered Email is already added !");
                notify();
            }
            else if (mobileEntery(formData.mobile)) {
                mobile.current.style.borderColor = "red";
                mobile.current.style.borderWidth = "2px";
                const notify = () => toast("Entered Mobile is already added !");
                notify();
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
            name.current.style.borderColor = "red";
            name.current.style.borderWidth = "2px";
            mobile.current.style.borderColor = "red";
            mobile.current.style.borderWidth = "2px";
            email.current.style.borderColor = "red";
            email.current.style.borderWidth = "2px";
            password.current.style.borderColor = "red";
            password.current.style.borderWidth = "2px";
            message.current.innerText = "*Enter All details !";
            const notify = () => toast("Enter All details !");
            notify();
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
                                ref={name}
                            />
                            <span className='pt-3'>Mobile <span className='text-danger fw-bolder'> *</span></span>
                            <input
                                type="number"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                ref={mobile}
                            />
                            <span className='pt-3'>Email Address <span className='text-danger fw-bolder'> *</span></span>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) => handleChange(e)}
                                ref={email}
                            />
                            <span className='pt-3'>Create Password <span className='text-danger fw-bolder'> *</span></span>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                ref={password}
                            />
                            <ul className='d-grid d-lg-flex justify-content-between pt-2 fw-bolder'>
                                <li className={passwordValidation.hasUppercase ? 'text-success' : 'text-danger'}><i className={passwordValidation.hasUppercase ? 'bi bi-check-circle' : 'bi bi-x-circle'}></i> At least 1 Uppercase</li>
                                <li className={passwordValidation.hasLowercase ? 'text-success' : 'text-danger'}><i className={passwordValidation.hasLowercase ? 'bi bi-check-circle' : 'bi bi-x-circle'}></i> At least 1 Lowercase</li>
                                <li className={passwordValidation.hasNumber ? 'text-success' : 'text-danger'}><i className={passwordValidation.hasNumber ? 'bi bi-check-circle' : 'bi bi-x-circle'}></i> At least 1 Number</li>
                                <li className={passwordValidation.hasSymbol ? 'text-success' : 'text-danger'}><i className={passwordValidation.hasSymbol ? 'bi bi-check-circle' : 'bi bi-x-circle'}></i> At least 1 Symbol</li>
                                <li className={passwordValidation.isValidLength ? 'text-success' : 'text-danger'}><i className={passwordValidation.isValidLength ? 'bi bi-check-circle' : 'bi bi-x-circle'}></i> Min 8 chars and Max 12 chars</li>
                            </ul>
                            <span ref={message} className='text-danger fw-bolder pt-2'></span>
                            <div className='pt-3 d-grid d-lg-flex justify-content-center justify-content-lg-between' style={{ alignItems: "center" }}>
                                <button className='loginbtn fw-bolder' onClick={dispatchdata}>Register</button>
                                <Link to="/login" className='changepage mt-2 py-2 px-3'>Already have an account!</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </div>
    );
}

export default Signinpage;