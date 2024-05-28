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
        address: [],
        orders: []
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userFromRedux = useSelector((state) => state.user.value);
    const [err, setErr] = useState({});
    const [disableButton, setDisableButton] = useState(false);
    const mobileError = useRef();
    const emailError = useRef();

    const checkValidation = (obj) => {
        err[obj?.key] = '';
        if (!obj?.value?.match(obj?.pattern)) {
            err[obj.key] = "Invalid Pattern";
        }
        setErr({ ...err });
        setformData((preData) => ({
            ...preData,
            [obj.key]: obj.value
        }))
        if (Object.values(err).every((item) => item === '') && Object.values(formData).every((item) => item !== '')) {
            setDisableButton(true);
        }
        else {
            setDisableButton(false);
        }
    }

    const handleFocus = (obj) => {
        if (obj.value === '') {
            setErr((prevData) => ({
                ...prevData,
                [obj.key]: "This is Required"
            }))
        }
    }

    const storeData = () => {
        const checkMail = userFromRedux.find((item) => item.email === formData.email)
        const checkMobile = userFromRedux.find((item) => item.mobile === formData.mobile)

        if (Object.values(err).every((item) => item === '') && Object.values(formData).every((item) => item !== '')) {
            if (!checkMail && !checkMobile) {
                dispatch(adduser(formData));
                navigate("/login");
                setErr({});
            } else {
                if (checkMail) {
                    toast("Email is already logged in...");
                    setErr((prevErr) => ({
                        ...prevErr,
                        email: "Email is already logged in..."
                    }));
                    emailError.current.style.borderColor = "red";
                    emailError.current.style.borderWidth = "2px";
                }
                else {
                    emailError.current.style.borderColor = "lightgray";
                    emailError.current.style.borderWidth = "1px";
                }
                if (checkMobile) {
                    toast("Mobile is already logged in...");
                    setErr((prevErr) => ({
                        ...prevErr,
                        mobile: "Mobile is already logged in..."
                    }));
                    mobileError.current.style.borderColor = "red";
                    mobileError.current.style.borderWidth = "2px";
                }
                else {
                    mobileError.current.style.borderColor = "lightgray";
                    mobileError.current.style.borderWidth = "1px";
                }
                setDisableButton(false);
            }
        } else {
            toast("Enter All Details Correct...");
        }

    }

    return (
        <div className='backImg newBackImg'>
            <Container className='py-5'>
                <Row className='px-3 px-sm-0'>
                    <Col className='col-0 col-lg-6 d-flex' style={{ alignItems: "center" }}>
                        <h1 className='headingPage fw-bolder d-none d-lg-block' style={{textShadow:"0 0 5px #FFFDD0"}}>Embrace fashion's transformative power.</h1>
                    </Col>
                    <Col className='col-12 col-lg-6 p-3 p-md-4 loginbox'>
                        <h3 className='fw-bolder text-center'>Register an account</h3>
                        <div className='boxtext d-grid'>
                            <span className='pt-3 fw-bolder'>Name <span className='text-danger fw-bolder'> *</span></span>
                            <input
                                type="text"
                                name="name"
                                pattern='^[A-Za-z ]{4,10}$'
                                value={formData.name}
                                onFocus={(e) => handleFocus({
                                    required: true,
                                    key: e?.target?.name,
                                    value: e?.target?.value
                                })}
                                onChange={(e) => checkValidation({ key: e?.target?.name, value: e?.target?.value, pattern: e?.target?.pattern, required: true })}
                            />
                            {
                                err?.name
                                    ? <span className="text-danger">{err.name}</span>
                                    : ''
                            }
                            <span className='pt-3 fw-bolder'>Mobile <span className='text-danger fw-bolder'> *</span></span>
                            <input
                                type="number"
                                name="mobile"
                                pattern='^[0-9]{10}$'
                                ref={mobileError}
                                value={formData.mobile}
                                onFocus={(e) => handleFocus({
                                    required: true,
                                    key: e?.target?.name,
                                    value: e?.target?.value
                                })}
                                onChange={(e) => checkValidation({ key: e?.target?.name, value: e?.target?.value, pattern: e?.target?.pattern, required: true })}
                            />
                            {
                                err?.mobile
                                    ? <span className="text-danger">{err.mobile}</span>
                                    : ''
                            }
                            <span className='pt-3 fw-bolder'>Email Address <span className='text-danger fw-bolder'> *</span></span>
                            <input
                                type="email"
                                name="email"
                                pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
                                value={formData.email}
                                ref={emailError}
                                onFocus={(e) => handleFocus({
                                    required: true,
                                    key: e?.target?.name,
                                    value: e?.target?.value
                                })}
                                onChange={(e) => checkValidation({ key: e?.target?.name, value: e?.target?.value, pattern: e?.target?.pattern, required: true })}
                            />
                            {
                                err?.email
                                    ? <span className="text-danger">{err.email}</span>
                                    : ''
                            }
                            <span className='pt-3 fw-bolder'>Create Password <span className='text-danger fw-bolder'> *</span></span>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                pattern='^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$'
                                onFocus={(e) => handleFocus({
                                    required: true,
                                    key: e?.target?.name,
                                    value: e?.target?.value
                                })}
                                onChange={(e) => checkValidation({ key: e?.target?.name, value: e?.target?.value, pattern: e?.target?.pattern, required: true })}
                            />
                            {
                                err?.password
                                    ? <span className="text-danger">{err.password}</span>
                                    : ''
                            }
                            <div className='pt-3 d-grid d-lg-flex justify-content-center justify-content-lg-between' style={{ alignItems: "center" }}>
                                <button
                                    className='submitbtn fw-bolder'
                                    onClick={storeData}
                                    style={disableButton ? { backgroundColor: "#141414", borderColor: "#141414", cursor: "pointer" } : { backgroundColor: "#bdbdbd", borderColor: "#bdbdbd", cursor: "default" }}
                                >
                                    Register
                                </button>
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