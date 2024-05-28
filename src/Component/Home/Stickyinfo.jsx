import React from 'react'

function Stickyinfo() {
    return (
        <div className='pt-4'>
            <section className='new_fashion'>
                <div className='new_fashion_perent'>
                    <img src={require('../../img/asset 23.jpeg')} alt="" className='new_fashion_img' />
                    <div className='new_fashion_font' style={{overflow:"hidden"}}><p className='new_fashion_p'>TRENDING</p>
                        <h3 className='text-capitalize fw-bold'data-aos-duration="1000" data-aos="slide-right">Subscibe to our Newsletter</h3>
                        <p  data-aos="slide-left"data-aos-duration="1000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi distinctio magni, iure deserunt doloribus optio</p>
                        <div className='d-flex justify-content-center'>
                            <input type="email" placeholder='Enter a valid Email Address' className='newsltr'/>
                            <button className='sldbtn py-2 text-light' style={{width:"120px", fontSize:"12px",backgroundColor:"#c2572b"}}>Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Stickyinfo
