import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './style.css';

function Silder() {

    return (
        <div>
            <Carousel fade  interval={2000}>
                <Carousel.Item className='sldimage'>
                    <img src={require('../../img/asset 20.jpeg')} alt="" />
                    <Carousel.Caption className='animate__animated animate__zoomInLeft'>
                        <p>Stylish Shop</p>
                        <h3>Great Lookbook 2021</h3>
                        <button className='sldbtn py-3 ms-2'>Shop now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='sldimage'>
                    <img src={require('../../img/asset 21.jpeg')} alt="" />
                    <Carousel.Caption className='animate__animated animate__zoomInLeft'>
                        <p>Stylish Shop</p>
                        <h3>Stylish Coat</h3>
                        <button className='sldbtn py-3 ms-2'>Shop now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='sldimage'>
                    <img src={require('../../img/asset 22.jpeg')} alt="" />
                    <Carousel.Caption className='animate__animated animate__zoomInLeft'>
                        <p>Stylish Shop</p>
                        <h3>Trendy Collection</h3>
                        <button className='sldbtn py-3 ms-2'>Shop now</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Silder
