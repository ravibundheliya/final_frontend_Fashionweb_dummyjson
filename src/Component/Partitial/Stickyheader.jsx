import React from 'react'
import './style.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Stickyheader() {
  const cartvalue = useSelector((state)=>state.cart.value);
  return (
        <>
            <section className='d-flex justify-content-between d-lg-none stickyhdr'>
                
                <NavLink to="/" className={(e)=>{return e.isActive ? "hrvheader" : ""}}><i className="bi bi-house-door"></i></NavLink>
                <NavLink to="/productpage" className={(e)=>{return e.isActive ? "hrvheader" : ""}}><i className="bi bi-card-list"></i></NavLink>
                <NavLink to="/cart" className={(e)=>{return e.isActive ? "hrvheader poscart" : "poscart"}}><i className="bi bi-basket"></i><span className='cartvalue'>{cartvalue?"0":cartvalue}</span></NavLink>
                <NavLink to="/wishlist" className={(e)=>{return e.isActive ? "hrvheader poscart" : "poscart"}}><i className="bi bi-heart"></i><span className='cartvalue'>{cartvalue?"0":cartvalue}</span></NavLink>
                <NavLink to="/contact" className={(e)=>{return e.isActive ? "hrvheader" : ""}}><i className="bi bi-gear"></i></NavLink>
            </section>
        </>
    )
}

export default Stickyheader
