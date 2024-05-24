import React from 'react'
import './style.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Stickyheader() {
    const cartvalue = useSelector((state) => state.user.logindata?.cart);
    const userlogin = useSelector((state) => state.user.logindata);
    return (
        <>
            <section className='d-flex justify-content-between d-lg-none stickyhdr'>

                <NavLink to="/" className={(e) => { return e.isActive ? "hrvheader" : "" }}><i className="bi bi-house-door"></i></NavLink>
                <NavLink to="/productpage" className={(e) => { return e.isActive ? "hrvheader" : "" }}><i className="bi bi-card-list"></i></NavLink>
                <NavLink to="/cart" className={(e) => { return e.isActive ? "hrvheader poscart" : "poscart" }}><i className="bi bi-basket"></i><span className='cartvalue'>{(cartvalue?.length) ? cartvalue?.length : 0}</span></NavLink>
                <NavLink to="/wishlist" className={(e) => { return e.isActive ? "hrvheader poscart" : "poscart" }}><i className="bi bi-heart"></i></NavLink>
                {
                    userlogin
                        ? <NavLink to="/profile" className={(e) => { return e.isActive ? "hrvheader" : "" }}><i className="bi bi-person"></i></NavLink>
                        :<NavLink to="/login" className={(e) => { return e.isActive ? "hrvheader" : "" }}><i className="bi bi-person-exclamation"></i></NavLink>
                    }
            </section>
        </>
    )
}

export default Stickyheader
