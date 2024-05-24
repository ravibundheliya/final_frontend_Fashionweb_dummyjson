import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userclearall, userdeletedata, userpushdata } from '../../store/userSlice';

function Cartpage() {
  const cartvalue = useSelector((state) => state.user.logindata?.cart);
  const dispatch = useDispatch();

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
  const updateQty = (item,condition)=>{
    const updatevalue = condition? item.stock+1:item.stock-1
    if(updatevalue>0){
      dispatch(userpushdata({...item, stock: updatevalue}))
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
                        <div><input type="text" className='qtyvalue' value={item.stock} readOnly /></div>
                        <div className='d-grid qtybtn'>
                          <button onClick={()=>updateQty(item,true)}><i className="bi bi-caret-up"></i></button>
                          <button onClick={()=>updateQty(item,false)}><i className="bi bi-caret-down"></i></button>
                        </div>
                      </div>
                    </td>
                    <td className='p-price'>₹{item.price * item.stock}</td>
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
      <ToastContainer />
    </div>
  );
}

export default Cartpage;
