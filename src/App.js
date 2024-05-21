import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Component/Partitial/Footer';
import Header from './Component/Partitial/Header';
import Home from './Component/Home';
import { Col, Container, Row } from 'react-bootstrap'
import About from './Component/OtherPages/About';
import Blog from './Component/OtherPages/Blog';
import Contact from './Component/OtherPages/Contact';
import Page1 from './Component/Product_cart_page/Page1';
import ProductDetails from './Component/Product_cart_page/ProductDetails';
import Cartpage from './Component/Product_cart_page/Cartpage';

function App() {
  return (
    <>
      
      <Container fluid>
        <Row className='text-center'>
          <Col className='text-light pt-3 pb-3' style={{ backgroundColor: '#1f1f1f', fontSize: '14px' }}>
            Join our showroom and get 25 % off ! Coupon code : Bangbang45
            <div></div>
          </Col>
        </Row>
      </Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/productpage' element={<Page1 />} />
        <Route path='/cart' element={<Cartpage />} />
        <Route path='/productpage/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
