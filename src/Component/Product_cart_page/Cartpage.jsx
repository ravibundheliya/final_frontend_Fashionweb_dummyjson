import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userPushOrder, userclearall, userdeletedata, userpushdata } from '../../store/userSlice';
import { Popover } from 'react-tiny-popover'

function Cartpage() {
  const cartvalue = useSelector((state) => state.user.logindata?.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [subPrice, setSubPrice] = useState(0);
  const shipping = useRef(null);
  const [grandTotal, setGrandTotal] = useState(0);
  const [isPopoverOpen, setIsPopoverOpen] = useState();
  const [orderList, setOrderList] = useState({
    status: '',
    products: [],
    subTotal: null,
    shippingAddress: null,
    shippingCharges: null,
    couponCode: null,
    grandTotal: null,
  });
  useEffect(() => {
    let newValue = 0;
    for (let i = 0; i < cartvalue.length; i++) {
      newValue += cartvalue[i].totalprice;
    }
    setSubPrice(parseFloat(newValue).toFixed(2))
    if (shipping.current && subPrice < 100) {
      shipping.current.innerText = parseFloat(subPrice * 0.1).toFixed(2);
      setGrandTotal(parseFloat(subPrice) + parseInt(shipping.current.innerText))
    }
    else {
      shipping.current.innerText = "Free Shipping";
      setGrandTotal(parseFloat(subPrice))
    }
    if (cartvalue.length) {
      setOrderList({
        status: "pending",
        products: cartvalue,
        subTotal: subPrice,
        shippingAddress: {},
        shippingCharges: (subPrice < 100) ? parseFloat(shipping.current.innerText) : 0,
        couponCode: null,
        grandTotal: grandTotal,
      })
    }

  }, [cartvalue, subPrice, grandTotal])

  const deleteone = (item) => {
    if (window.confirm("Are you sure to remove product from cart ?")) {
      dispatch(userdeletedata(item));
      toast("Selected product removed!");
    }
  };

  const confirmdelete = () => {
    if (window.confirm("Are you sure to clear cart ?")) {
      dispatch(userclearall());
      toast("Cart is cleared");
    }
  };
  const updateQty = (item, condition) => {
    const updatevalue = condition ? item.cartqty + 1 : item.cartqty - 1
    const newTotal = updatevalue * item.price;
    if (updatevalue > 0) {
      dispatch(userpushdata({ ...item, cartqty: updatevalue, totalprice: newTotal }))
    }
  }

  const pushOrder = () => {
    if (cartvalue.length && window.confirm("Are you sure to checkout?")) {
      dispatch(userPushOrder(orderList))
      // dispatch(userclearall());
      navigate('/orderpage')
    }
    if(!cartvalue.length) {
      toast("Cart is Empty!");
    }
  }

  return (
    <div>
      {cartvalue?.length > 0 && (
        <div className='text-center px-5 pt-5'>
          <button className='px-5 py-3 addtobtn newaddtobtn' onClick={confirmdelete}>Clear Cart</button>
        </div>
      )}
      <Container className='pt-3 pb-5'>
        <Row>
          <Col className='px-3 p-md-0 '>
            <table width={"100%"}>
              {cartvalue?.length > 0 && (
                <thead className='carthead'>
                  <tr className='text-uppercase'>
                    <th></th>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th className='text-center'>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
              )}
              <tbody>
                {cartvalue?.length > 0 ? cartvalue.map((item) => (
                  <tr className='cartborder text-center text-md-start' key={item.id}>
                    <td className='closeborder'><i className="bi bi-x" onClick={() => deleteone(item.id)}></i></td>
                    <td className='cartimg p-3'><img src={item.thumbnail} alt="" /></td>
                    <td><Link to={`/productpage/${item.id}`} className='plink'>{item.title}</Link></td>
                    <td className='p-price'>₹{item.price}</td>
                    <td>
                      <div className='d-flex justify-content-center'>
                        <div><input type="text" className='qtyvalue' value={item.cartqty} readOnly /></div>
                        <div className='d-grid qtybtn'>
                          <button onClick={() => updateQty(item, true)}><i className="bi bi-caret-up"></i></button>
                          <button onClick={() => updateQty(item, false)}><i className="bi bi-caret-down"></i></button>
                        </div>
                      </div>
                    </td>
                    <td className='p-price'>₹{parseFloat(item.totalprice).toFixed(2)}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan={6} align='center'><h1 className='emptytext'>Cart is Empty</h1></td>
                  </tr>
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>

      <Container className='py-5'>
        <Row className='px-3'>
          <Col className='main_part col-12 d-grid d-md-flex text-center text-md-start'>
            <div className='part-one'>
              <h4 className='fw-bolder text-uppercase m-0'>Subtotal</h4>
            </div>
            <div className='part-two'>
              <span> ₹{subPrice}</span>
            </div>
          </Col>
          <Col className='main_part col-12 d-grid d-md-flex text-center text-md-start'>
            <div className='part-one'>
              <h4 className='fw-bolder text-uppercase m-0'>Shipping</h4>
            </div>
            <div className='part-two'>
              <div className='d-flex justify-content-center justify-content-md-start'>
                <span>{subPrice < 100 ? "+ ₹" : ''}<span ref={shipping}>{parseFloat(subPrice * 0.1).toFixed(2)}</span></span>
                <Popover
                  isOpen={isPopoverOpen}
                  positions={['right']}
                  content={<div className='ps-2 infotab' style={{ fontSize: "14px" }}>* Min. ₹100 Order value for Free Shipping</div>}
                >
                  <div className='ps-2 infohvr' style={{ cursor: "pointer" }} onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                    <i className="bi bi-info-circle"></i>
                  </div>
                </Popover>
                <sup className='ps-2' style={{ fontSize: "12px" }}></sup>
              </div>
            </div>
          </Col>
          <Col className='main_part col-12 d-grid d-md-flex text-center text-md-start'>
            <div className='part-one'>
              <h4 className='fw-bolder text-uppercase m-0'>Total</h4>
            </div>
            <div className='part-two'>
              ₹{grandTotal}
            </div>
          </Col>
          <Col className='d-flex justify-content-end pt-3 px-0 px-md-2'>
            <button onClick={pushOrder} className='checkoutbtn px-3 text-light text-uppercase fw-bolder'>Proceed to checkout</button>
          </Col>
        </Row>
      </Container>

      <ToastContainer />
    </div>
  );
}

export default Cartpage;
