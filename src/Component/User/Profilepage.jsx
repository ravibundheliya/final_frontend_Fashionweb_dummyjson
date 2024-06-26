import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './style.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profileheader from '../Partitial/Profileheader';

function Profilepage() {
  const user = useSelector((state) => state.user.logindata)
  return (
    <div className='pt-4 pb-5'>
      <h1 className='text-center fw-bolder'>My Account</h1>
      <Container className='pt-3'>
        <Row>
          <Col className='col-12 col-md-5 col-lg-3'>
            <Profileheader />
          </Col>
          <Col className='col-12 col-md-7 col-lg-9 pt-4 pt-md-0'>
            <div className='profilehdr_sub'>
              <h3 className='pt-5 pb-3 fw-bold'>Account Details</h3>
              <div className='datalist_main d-grid'>
                <div className='datalist_sub w-100 d-flex'>
                  <div className='dataname'>Username : </div>
                  <div className='dataitem'>{user.name}</div>
                </div>
                <div className='datalist_sub w-100 d-flex'>
                  <div className='dataname'>Mobile : </div>
                  <div className='dataitem'>{user.mobile}</div>
                </div>
                <div className='datalist_sub w-100 d-flex'>
                  <div className='dataname'>Emai : </div>
                  <div className='dataitem'>{user.email}</div>
                </div>
                <div className='datalist_sub w-100 d-flex'>
                  <div className='dataname'>Password : </div>
                  <div className='dataitem'>{user.password}</div>
                </div>
                <div className='datalist_sub w-100 d-flex' style={{ alignItems: "start" }}>
                  <div className='dataname pt-2'>Address : </div>
                  {
                    (user.address.length !== 0)
                      ? <div className='dataitem d-grid p-0' style={{ borderWidth: "0", gap: "10px" }}>
                        {
                          user.address.map((item, index) => {
                            return (
                              <div className='newdataitem' key={item.label} style={{ color: "black" }}>{item.label}</div>
                            )
                          })
                        }
                      </div>
                      : <div className='dataitem' style={{ color: "lightgray" }}>"Didn't added yet !"</div>
                  }
                </div>
              </div>

              <div className='pt-4 pt-md-5 d-flex justify-content-between justify-content-md-around'>
                <Link to="/address" className='stylebtn newbtncss fw-bold text-uppercase p-2 px-md-3 py-md-2'>Add New Address</Link>
                <Link to="/resetpass" className='stylebtn newbtncss fw-bold text-uppercase p-2 px-md-3 py-md-2'>Reset Password</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Profilepage
