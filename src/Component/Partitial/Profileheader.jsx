import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logoutuser } from '../../store/userSlice'

function Profileheader() {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const confirmLogOut = () => {
    if (window.confirm("Are you sure to logout ?")) {
      dispatch(logoutuser())
      navigate('/');
    }
  }
  return (
    <div>
      <div className='p-4 px-lg-3 profilehdr_main'>
        <NavLink as={Link} to="/profile" className={(e) => { return e.isActive ? "profilehdr newcss" : "profilehdr" }}><i className="bi bi-journal-text backhover"></i><span>Account Dashboard</span></NavLink>
        <NavLink as={Link} to="/orderdetails" className={(e) => { return e.isActive ? "profilehdr newcss" : "profilehdr" }}><i className="bi bi-bag-check backhover"></i><span>All Orders Details</span></NavLink>
        <NavLink as={Link} to="/address" className={(e) => { return e.isActive ? "profilehdr newcss" : "profilehdr" }}><i className="bi bi-geo-alt backhover"></i><span>Address book</span></NavLink>
        <NavLink as={Link} to="/resetpass" className={(e) => { return e.isActive ? "profilehdr newcss" : "profilehdr" }}><i className="bi bi-plus-slash-minus backhover"></i><span>Reset Password</span></NavLink>
        <div onClick={confirmLogOut} className='profilehdr'><i className="bi bi-box-arrow-right backhover"></i><span>Logout</span></div>
      </div>

    </div>
  )
}

export default Profileheader
