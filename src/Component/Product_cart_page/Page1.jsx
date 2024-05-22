import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./style.css";
import { Link } from 'react-router-dom';
import Loader from "react-js-loader";
import axios from 'axios';


function Page1() {

  const [data, setdata] = useState([]);
  const [cat, setcat] = useState([]);
  const [storecat, setstorecat] = useState('');
  const [storesearch, setstoresearch] = useState('');
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    setdata([]);

    axios.get('https://dummyjson.com/products')
      .then(function (response) {
        setdata(response.data.products);
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('https://dummyjson.com/products/categories')
      .then(function (response) {
        setcat(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })

  }, [])


  useEffect(() => {
    setLoading(true);
    setdata([]);

    if (storecat) {

      axios.get(`https://dummyjson.com/products/category/${storecat}`)
        .then(function (response) {
          setdata(response.data.products);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        })
    } else {

      axios.get(`https://dummyjson.com/products`)
        .then(function (response) {
          setdata(response.data.products);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        })
    }

  }, [storecat]);


  useEffect(() => {
    setLoading(true);
    setdata([]);

    if (storesearch) {

      axios.get(`https://dummyjson.com/products/search?q=${storesearch}`)
        .then(function (response) {
          setdata(response.data.products);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    else {

      axios.get(`https://dummyjson.com/products`)
        .then(function (response) {
          setdata(response.data.products);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }, [storesearch])


  // Pagination Logic
  const [currentPage, setcurrentPage] = useState(1);
  const recordsPerPage = 9;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setcurrentPage(currentPage - 1)
    }
  }
  const changeCPage = (num) => {
    setcurrentPage(num)
  }
  const nextPage = () => {
    if (currentPage !== npage) {
      setcurrentPage(currentPage + 1)
    }
  }

  return (
    <>

      <Container className='py-5'>
        <Row>
          <Col className='col-0 col-lg-3'>
            <input type="text" className='pagesearch py-2 px-3' placeholder='Search products...' onChange={(e) => setstoresearch(e.target.value)} />
            <div className='py-4'>
              <h4 className='fw-bold' style={{ fontSize: "18px" }}>Filter By Category</h4>
              <ul className='catlist'>
                <li className='incatlist' onClick={() => setstorecat('')} style={(storecat) ? { color: "black" } : { color: "#C2572B", fontWeight: "900" }}>All Categories</li>
                {
                  cat.map((item, index) => {
                    return (
                      <li key={item} onClick={() => setstorecat(item)} className='incatlist' style={(storecat === item) ? { color: "#C2572B", fontWeight: "900" } : { color: "black" }}>{item}</li>
                    )
                  })
                }

              </ul>

            </div>
          </Col>
          <Col className='col-12 col-lg-9'>
            <Container>
              <Row className='g-3'>
                {loading && (
                  <div className={"content"}>
                    <div className={"zoom-out"}>
                      <div className={"row g-0"}>
                        <div className={"item "}>
                          <Loader type="bubble-scale" bgColor={"#000000"} color={"#FFFFFF"} title={"bubble-scale"} size={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {
                  records.map((item, index) => {
                    return (
                      <Col key={item.id} className='col-12 col-sm-6 col-md-4'>
                        <div className='outcartpart'>
                          <div className="card newcard">
                            <div className='imagebox'>
                              <img src={item.thumbnail} className="card-img-top pimage" alt={"Image of " + item.title} />
                            </div>
                            <div className="card-body">
                              <Link className='card-text stretched-link text-dark fw-bolder' to={`/productpage/${item.id}`}>{item.title}</Link>
                              <div className='d-flex justify-content-around' style={{ alignItems: "center" }}>
                                <h6 className="card-title fw-bolder" style={{ fontSize: "20px" }}>₹{item.price} <del className='text-secondary fw-light' style={{ fontSize: "14px" }}>{Math.round((item.price * 100) / (100 - item.discountPercentage))}</del></h6>
                                <span className="rating" style={{ color: "#C2572B" }}>★<span style={{ fontSize: "14px" }}> {item.rating}</span></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    )
                  })
                }

                {/* Pagination code */}
                {
                  (loading) ? '' :
                    <div className="col-12 d-flex justify-content-center">
                      <ul className='pagination'>
                        <li className='page-item'>
                          <Link to='/productpage' className='page-link' onClick={prePage}>Prev</Link>
                        </li>
                        {
                          numbers.map((n, index) => {
                            return (
                              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={index}>
                                <Link to='/productpage' className='page-link' onClick={() => changeCPage(n)}>{n}</Link>
                              </li>
                            )
                          })
                        }
                        <li className='page-item'>
                          <Link to='/productpage' className='page-link' onClick={nextPage}>Next</Link>
                        </li>
                      </ul>
                    </div>
                }
              </Row>

            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page1
