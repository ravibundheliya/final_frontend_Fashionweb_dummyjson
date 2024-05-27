import React from 'react'
import Silder from './Silder'
import Banner from './Banner'
import Topproductsslide from './Topproductsslide'
import Stickyinfo from './Stickyinfo'
import Featuredprdslide from './Featuredprdslide'
import Instainfo from './Instainfo'
import Testimonialslide from './Testimonialslide'

function Home() {


    return (
        <div>
            <Silder />
            <Banner />
            <Topproductsslide />
            <Stickyinfo />
            <Featuredprdslide />
            <Testimonialslide />
            <Instainfo />
        </div>
    )
}

export default Home
