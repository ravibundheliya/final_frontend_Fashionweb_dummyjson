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
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Stickyheader from './Component/Partitial/Stickyheader';
import Loginpage from './Component/OtherPages/Loginpage';
import Signinpage from './Component/OtherPages/Signinpage';
import Wishlist from './Component/Product_cart_page/Wishlist';
import Profilepage from './Component/User/Profilepage';
import Profileaddress from './Component/User/Profileaddress';
import Resetpass from './Component/User/Resetpass';
import OrderPage from './Component/Product_cart_page/OrderPage';
import OrderDetails from './Component/User/OrderDetails';

function App() {


  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100
    });
  }, []);
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
        <Route path='/login' element={<Loginpage/>} />
        <Route path='/signin' element={<Signinpage/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/profile' element={<Profilepage/>} />
        <Route path='/address' element={<Profileaddress/>} />
        <Route path='/resetpass' element={<Resetpass/>} />
        <Route path='/orderpage' element={<OrderPage/>} />
        <Route path='/orderdetails' element={<OrderDetails/>} />
      </Routes>
      <Footer />
      <Stickyheader/>
    </>
  );
}

export default App;
