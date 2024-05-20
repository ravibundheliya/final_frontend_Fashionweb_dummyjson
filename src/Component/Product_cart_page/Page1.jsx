import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import "./style.css";
import { Link } from 'react-router-dom';

function Page1() {
  const [data, setdata] = useState([]);
  const [cat, setcat] = useState([]);
  const [storecat, setstorecat] = useState('');
  const [storesearch, setstoresearch] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((json) => {
        setdata(json.products);
      });
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then((json) => {
        setcat(json)
      });
  }, [])
  useEffect(() => {
    if (storecat) {
      fetch(`https://dummyjson.com/products/category/${storecat}`)
        .then((res) => res.json())
        .then((json) => {
          setdata(json.products);
        });
    } else {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((json) => {
          setdata(json.products);
        });
    }
  }, [storecat]);
  useEffect(() => {
    if (storesearch) {
      fetch(`https://dummyjson.com/products/search?q=${storesearch}`)
        .then(res => res.json())
        .then((json => {
          setdata(json.products);
        }));
    }
    else {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((json) => {
          setdata(json.products);
        });
    }
  },[storesearch])
  return (
    <>
      <Container className='py-5'>
        <Row>
          <Col className='col-0 col-lg-3'>
            <input type="text" className='pagesearch py-2 px-3' placeholder='Search products...' onChange={(e) => setstoresearch(e.target.value)} />
            <div className='py-4'>
              <h4 className='fw-bold' style={{fontSize:"18px"}}>Filter By Category</h4>
              <ul className='catlist'>
                <li className='incatlist' onClick={() => setstorecat('')} style={(storecat)?{color:"black"}:{color:"#C2572B",fontWeight:"900"}}>All Categories</li>
                {
                  cat.map((item, index) => {
                    return (
                      <li key={item} onClick={() => setstorecat(item)} className='incatlist' style={(storecat===item)?{color:"#C2572B",fontWeight:"900"}:{color:"black"}}>{item}</li>
                    )
                  })
                }
              </ul>
            </div>
          </Col>
          <Col className='col-12 col-lg-9'>
            <Container>
              <Row className='g-3'>
                {
                  data.map((item, index) => {
                    return (
                      <Col key={item.id} className='col-12 col-sm-6 col-md-4'>
                        <div className='text-center'>
                          <div className="card" style={{ width: '100%' }}>
                            <div className='imagebox'>
                              <img src={item.thumbnail} className="card-img-top pimage" alt={"Image of " + item.title} />
                            </div>
                            <div className="card-body">
                              <Link className='card-text stretched-link text-dark fw-bolder' to={`/productpage/${item.id}`}>{item.title}</Link>
                              <div className='d-flex justify-content-around mb-2' style={{ alignItems: "center" }}>
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
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Page1
