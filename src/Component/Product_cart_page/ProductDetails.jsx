import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-js-loader";
import axios from 'axios';
import { userdeletewish, userpushdata, userpushwish } from '../../store/userSlice';


function ProductDetails() {
    const params = useParams();
    const [data, setdata] = useState({});
    const [dataimg, setdataimg] = useState({});
    const [cnt, setcnt] = useState(1);
    const [qty, setqty] = useState(1);
    const [disimage, setdisimage] = useState('');
    const dispatch = useDispatch();
    const loguser = useSelector((state) => state.user.logindata);
    const usercart = useSelector((state) => state.user.logindata?.cart);
    const userwish = useSelector((state) => state.user.logindata?.wishlist);
    const orderCheck = useSelector((state) => state?.user.logindata);
    const [loading, setLoading] = useState(true);
    const [colorImg, setColorImg] = useState([]);
    const [disTitle, setDisTitle] = useState();
    const [disReview, setDisReview] = useState(false);
    const [reviewText, setReviewText] = useState("");
    const [reviewValue, setReviewValue] = useState(0);






    useEffect(() => {

        setLoading(true);

        axios.get(`https://dummyjson.com/products/${params.id}`)
            .then(function (response) {
                setdata(response.data);
                setdataimg(({
                    color1: {
                        colorName: 'default',
                        thumbnail: response.data.thumbnail,
                        images: response.data.images
                    },
                    color2: {
                        colorName: 'skyblue',
                        thumbnail: response.data.thumbnail,
                        images: [require('../../img/b11.png'),
                        require('../../img/b12.png'),
                        require('../../img/b13.png'),
                        require('../../img/b14.png')]
                    },
                    color3: {
                        colorName: 'goldenrod',
                        thumbnail: response.data.thumbnail,
                        images: [require('../../img/b21.png'),
                        require('../../img/b22.png'),
                        require('../../img/b23.png'),
                        require('../../img/b24.png')]
                    },
                    color4: {
                        colorName: 'purple',
                        thumbnail: response.data.thumbnail,
                        images: [require('../../img/b31.png'),
                        require('../../img/b32.png'),
                        require('../../img/b33.png'),
                        require('../../img/b34.png')]
                    },
                }));
                setDisTitle({
                    title: response.data.title,
                    color: "(default)"
                });
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
            })

        const check = loguser?.cart.find((item) => item.id === data.id)
        if (check) {
            setqty(check?.cartqty)
        }
    }, [params.id, loguser?.cart, data.id]);

    useEffect(() => {
        console.log(data);
    }, [data])

    const pluscart = () => {
        setqty(qty + 1)
    }
    const minusecart = () => {
        setqty((qty > 1) ? qty - 1 : 1)
    }


    const addtocart = () => {
        if (loguser) {
            const newTitle = disTitle.title + disTitle.color;
            const newTotal = data?.price * qty;
            const updateData = { ...data, title: newTitle, cartqty: qty, totalprice: newTotal }
            const check = usercart.find(item => item.id === data.id)
            const checkWish = userwish.find(item => item.id === data.id)
            dispatch(userpushdata(updateData));
            console.log(usercart);
            setqty(1);
            if (check) {
                const notify1 = () => toast("Product quantity updated!");
                notify1();
            }
            else {
                const notify2 = () => toast("Product added to cart");
                notify2();
            }
            if (checkWish) {
                dispatch(userdeletewish(data.id))
                const notify2 = () => toast("Product moved from wishlist to cart");
                notify2();
            }
        }
        else {
            const notify = () => toast("Log in first!");
            notify();
        }

    }

    const addtowish = () => {
        if (loguser) {
            const newTitle = disTitle.title + disTitle.color;
            const newTotal = data?.price * qty;
            const updateData = { ...data, title: newTitle, cartqty: qty, totalprice: newTotal }
            const check = usercart.find(item => item.id === data.id)
            const checkWish = userwish.find(item => item.id === data.id)
            setqty(1);
            if (check) {
                const notify1 = () => toast("Product already in cart!");
                notify1();
            }
            if (checkWish) {
                const notify1 = () => toast("Product already in Wishlist!");
                notify1();
            }
            if (!checkWish && !check) {
                dispatch(userpushwish(updateData))
                const notify2 = () => toast("Product added to Wishlist");
                notify2();
            }
        }
        else {
            const notify = () => toast("Log in first!");
            notify();
        }
    }

    const starPercentage = (data.rating / 5) * 100;
    const starPercentageRounded = `${Math.round(starPercentage)}%`;
    // `${Math.round((data.rating / 5) * 100)}%`

    const changeColor = (item) => {
        setColorImg(item)
        setdisimage(item.images[0]);
        setDisTitle((prevData) => ({
            ...prevData,
            color: `(${item.colorName})`
        }));
    }

    const checkProduct = orderCheck?.orders.some(user =>
        user.products.some(item =>
            item.id === parseInt(params.id)
        )
    );
    // Rating code 

    const labels = {
        1: 'Useless',
        2: 'Poor',
        3: 'Ok',
        4: 'Good',
        5: 'Excellent',
    };

    const [value, setValue] = useState(null);
    const [hover, setHover] = useState(-1);



    const handleHover = (newHover) => {
        setHover(newHover);
    };

    const handleChange = (newValue) => {
        setValue(newValue);
        setReviewValue(newValue);
    };

    const sendData = () => {
        if (reviewText !== '' && reviewValue !== 0) {
            const setDate = new Date();
            const storeData = {
                comment: reviewText,
                date: `${setDate.toISOString()}`,
                rating: reviewValue,
                reviewerEmail: loguser.email,
                reviewerName: loguser.name
            }
            setdata((prevData) => ({
                ...prevData,
                reviews: [storeData, ...prevData.reviews]
            }))
            setDisReview(false);
        }
        if (reviewText === '') {
            toast("Add comment first !")
        }
        if (reviewValue === 0) {
            toast("select star !")
        }
    }

    return (
        <div>
            {
                (loading) ?
                    <div className={"content"}>
                        <div className={"zoom-out"}>
                            <div className={"row g-0"}>
                                <div className={"item "}>
                                    <Loader type="bubble-scale" bgColor={"#000000"} color={"#FFFFFF"} title={"bubble-scale"} size={100} />
                                </div>
                            </div>
                        </div>
                    </div> :
                    <Container className="prdpadding pt-3" >
                        <Row>
                            <Col className='col-12 col-lg-6 p-2'>
                                <div className='thumbimage'>
                                    <img src={(colorImg?.images?.length)
                                        ? disimage || colorImg?.images[0]
                                        : disimage || dataimg?.color1.images[0]}
                                        alt="" />
                                </div>
                                <div className='imagelist'>
                                    {
                                        (colorImg?.images?.length)
                                            ? colorImg.images.map((item, index) => {
                                                return (
                                                    <div key={index} className='prdimage'>
                                                        <img src={item} onClick={() => setdisimage(item)} alt="" />
                                                    </div>
                                                )
                                            })
                                            : dataimg.color1.images.map((item, index) => {
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
                                <h1 className='fw-bolder'>{disTitle.title}{disTitle.color}</h1>
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
                                {/* Multi Color Tab */}
                                <div><h4 className='fw-bolder'>Colors :</h4></div>
                                <div className='containColor d-flex justify-content-start w-100'>
                                    <div className='containImage cntImg1'>
                                        <img src={dataimg.color1.images[0]} onClick={() => changeColor(dataimg.color1)} alt="" />
                                    </div>
                                    <div className='containImage cntImg2'>
                                        <img src={dataimg.color2.images[0]} onClick={() => changeColor(dataimg.color2)} alt="" />
                                    </div>
                                    <div className='containImage cntImg3'>
                                        <img src={dataimg.color3.images[0]} onClick={() => changeColor(dataimg.color3)} alt="" />
                                    </div>
                                    <div className='containImage cntImg4'>
                                        <img src={dataimg.color4.images[0]} onClick={() => changeColor(dataimg.color4)} alt="" />
                                    </div>
                                </div>

                                <div className='py-4'>
                                    <div className='d-flex'>
                                        <div><input type="text" className='qtyvalue' value={qty} readOnly /></div>
                                        <div className='d-grid qtybtn'>
                                            <button onClick={pluscart}><i className="bi bi-caret-up"></i></button>
                                            <button onClick={minusecart}><i className="bi bi-caret-down"></i></button>
                                        </div>
                                        <button type="button" className="btn px-5 ms-3 addtobtn" onClick={addtocart} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                                <div className='py-2 d-flex heart' onClick={addtowish}>
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
                                    <div onClick={() => setcnt(2)} style={(cnt === 2) ? { color: "black" } : { color: "grey" }}>Review ({data.reviews.length})</div>
                                </div>
                                <hr />
                            </Col>
                            <Col className='col-12 fw-normal'>
                                {
                                    (cnt === 1) ? <p style={{ color: "grey", fontSize: "18px" }}>
                                        {data.description}
                                    </p> :
                                        (checkProduct)
                                            ?
                                            <div className='d-grid'>
                                                <button className='px-5 py-3 mb-4 addtobtn' onClick={() => setDisReview(true)}>Add your Review</button>
                                                {
                                                    (disReview)
                                                        ? <div className='pb-4 d-grid reviewlist' style={{ gap: "10px" }}>
                                                            <div className='fw-bolder py-3'>Here you can review the item</div>
                                                            <textarea name="" id="" className='p-2' style={{ color: "grey" }} onChange={(e) => setReviewText(e.target.value)} placeholder='Add your experience here... *' rows={4}></textarea>
                                                            <div className='d-flex justify-content-between' style={{ alignItems: "center" }}>
                                                                {/* Rating here */}
                                                                <div className="d-grid d-sm-flex text-center text-sm-start align-items-center">
                                                                    <div className="rating" onMouseLeave={() => handleHover(-1)}>
                                                                        {[...Array(5)].map((_, index) => {
                                                                            const ratingValue = index + 1;
                                                                            return (
                                                                                <label key={ratingValue}>
                                                                                    <input
                                                                                        type="radio"
                                                                                        name="rating"
                                                                                        value={ratingValue}
                                                                                        onClick={() => handleChange(ratingValue)}
                                                                                    />
                                                                                    <span
                                                                                        className="star"
                                                                                        onMouseEnter={() => handleHover(ratingValue)}
                                                                                        style={{
                                                                                            color: (hover >= ratingValue || value >= ratingValue) ? '#C2572B' : '#e4e5e9'
                                                                                        }}
                                                                                    >
                                                                                        &#9733;
                                                                                    </span>
                                                                                </label>
                                                                            );
                                                                        })}
                                                                    </div>
                                                                    {value !== null && (
                                                                        <div className="rating-text">
                                                                            {labels[hover !== -1 ? hover : value]}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                                <button className='px-4 px-md-5 py-3 ms-3 addtobtn' onClick={sendData}>Submit</button>
                                                            </div>
                                                        </div>
                                                        : ''
                                                }
                                                <div className='d-grid'>
                                                    {
                                                        data.reviews.map((item) => {
                                                            return (
                                                                <div key={item.reviewerName} className='pb-4 d-flex' style={{ gap: "10px" }}>
                                                                    <div className='bg-dark text-light px-4 py-3 fw-bolder d-grid' style={{ alignItems: "center" }}>
                                                                        <div>{(item.reviewerName).substring(0, 1)}</div>
                                                                    </div>
                                                                    <div className='d-grid'>
                                                                        <div className='d-flex'>
                                                                            <span className='fw-bold pt-1'>{item.reviewerName}</span>
                                                                            <span className='ps-2'>
                                                                                <div className='d-flex' style={{ gap: "4px" }}>
                                                                                    <div className="star-rating">
                                                                                        <div className="stars-outer">
                                                                                            <div className="stars-inner" style={{ width: `${Math.round((item.rating / 5) * 100)}%`, alignItems: "top" }}></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div></span>
                                                                        </div>
                                                                        <div style={{ color: "grey", fontSize: "12px" }}>{(item.date).substring(0, 10)}</div>
                                                                        <div className='pt-2 reviewText' style={{ color: "grey" }}>{item.comment}</div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            : <span>
                                                <div className='d-grid'>
                                                    {
                                                        data.reviews.map((item) => {
                                                            return (
                                                                <div className='pb-4 d-flex' style={{ gap: "10px" }}>
                                                                    <div className='bg-dark text-light px-4 py-3 fw-bolder d-grid' style={{ alignItems: "center" }}>
                                                                        <div>{(item.reviewerName).substring(0, 1)}</div>
                                                                    </div>
                                                                    <div className='d-grid'>
                                                                        <div className='d-flex'>
                                                                            <span className='fw-bold pt-1'>{item.reviewerName}</span>
                                                                            <span className='ps-2'>
                                                                                <div className='d-flex' style={{ gap: "4px" }}>
                                                                                    <div className="star-rating">
                                                                                        <div className="stars-outer">
                                                                                            <div className="stars-inner" style={{ width: `${Math.round((item.rating / 5) * 100)}%`, alignItems: "top" }}></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div></span>
                                                                        </div>
                                                                        <div style={{ color: "grey", fontSize: "12px" }}>{(item.date).substring(0, 10)}</div>
                                                                        <div className='pt-2 reviewText' style={{ color: "grey" }}>{item.comment}</div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <h4 className='py-4 fw-bolder text-center text-light-emphasis'>You have to buy this product for give review !</h4>
                                            </span>
                                }
                            </Col>
                        </Row>
                    </Container>
            }


            <ToastContainer />
        </div>
    )
}

export default ProductDetails