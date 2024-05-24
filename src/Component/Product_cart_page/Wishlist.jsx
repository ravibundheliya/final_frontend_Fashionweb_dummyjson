import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userclearwish, userdeletewish, userpushdata, } from '../../store/userSlice';

function Wishlist() {
    const cartvalue = useSelector((state) => state.user.logindata?.wishlist);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteone = (item) => {
        if (window.confirm("Are you sure to remove product from Wishlist ?")) {
            dispatch(userdeletewish(item))
            let notify = () => toast("Selected product removed from List!");
            notify();
        }
    }
    const confirmdelete = () => {
        if (window.confirm("Are you sure to clear cart ?")) {
            dispatch(userclearwish());
            let notify = () => toast("Wishlist is cleared");
            notify();
        }
    }
    const dispatchdata = (item) => {
        dispatch(userpushdata(item))
        const notify2 = () => toast("Product added to cart");
        notify2();
        dispatch(userdeletewish(item.id))
        navigate('/cart')
    }
    return (
        <div>
            {
                (cartvalue?.length > 0) ?
                    <div className='text-center px-5 pt-5'>
                        <button className='px-5 py-3 addtobtn newaddtobtn' onClick={confirmdelete}>Clear List</button>
                    </div>
                    : ""
            }
            <Container className='pt-3 pb-5'>
                <Row>
                    <Col className='px-3 p-md-0 '>
                        <table width={"100%"}>
                            {
                                (cartvalue?.length !== 0) ?
                                    <thead className='carthead'>
                                        <tr className='text-uppercase'>
                                            <th></th>
                                            <th></th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Add to Cart</th>
                                        </tr>
                                    </thead> : ''
                            }
                            <tbody>
                                {/* Mapping Cart Product */}
                                {
                                    ((cartvalue?.length !== 0))
                                        ? cartvalue?.map((item, index) => {
                                            return (
                                                <tr className='cartborder text-center text-md-start' key={item.id}>
                                                    <td className='closeborder'><i className="bi bi-trash pt-2 pb-1 px-1 trash" onClick={() => deleteone(item.id)}></i></td>
                                                    <td className='cartimg p-3'><img src={item.thumbnail} alt="" /></td>
                                                    <td><Link to={`/productpage/${item.id}`} className='plink'>{item.title}</Link></td>
                                                    <td className='p-price'>₹{item.price}</td>
                                                    <td className='p-price' >
                                                        <button className='btn px-4 py-3 addtobtn' onClick={() => dispatchdata(item)}>Add to cart</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                        : <tr>
                                            <td colSpan={6} align='center'><h1 className='emptytext'>List is Empty</h1></td>
                                        </tr>
                                }
                            </tbody>
                        </table>

                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </div>
    )
}

export default Wishlist
