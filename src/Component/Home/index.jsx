import React, { useEffect, useState } from 'react'
import Silder from './Silder'
import Banner from './Banner'
import Topproductsslide from './Topproductsslide'
import Stickyinfo from './Stickyinfo'
import Featuredprdslide from './Featuredprdslide'
import Instainfo from './Instainfo'
import Testimonialslide from './Testimonialslide'
import axios from 'axios'
import Loader from "react-js-loader";

function Home() {
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(function (response) {
                setProductData(response.data.products);
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <div>
            <Silder />
            <Banner />
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
                <Topproductsslide data={productData} />
            }
            <Stickyinfo />
            <Featuredprdslide data={productData} />
            <Testimonialslide />
            <Instainfo />
        </div>
    )
}

export default Home
