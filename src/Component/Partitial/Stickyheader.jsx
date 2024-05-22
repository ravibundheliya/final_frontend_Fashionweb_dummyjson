import React from 'react'
import './style.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Stickyheader() {
  const cartvalue = useSelector((state)=>state.cart.value);
  return (
        <>
            <section className='d-flex justify-content-between d-lg-none stickyhdr'>
                <Link to="/"><i class="bi bi-house-door"></i></Link>
                <Link to="/productpage"><i class="bi bi-card-list"></i></Link>
                <Link to="/cart"><i class="bi bi-basket"></i></Link>
                <Link to="/wishlist"><i class="bi bi-heart"></i></Link>
                <Link to="/contact"><i class="bi bi-gear"></i></Link>
            </section>
        </>
    )
}

export default Stickyheader
