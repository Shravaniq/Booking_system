import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ava01 from '../../assets/images/ryokans.jpeg'
import ava02 from '../../assets/images/dedeagac.jpg'
import ava03 from '../../assets/images/france.jpg'


const Testimonial = () => {
  const settings ={
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,
     
    responsive :[
        {
            breakpoint:992,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite:true,
                dots:true,
            },
        },
        {
            breakpoint:576,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            }

        }
    ]



  }
 
  return ( <Slider {...settings}>
    <div className='testimonial py-4 px-3'>
      <p>
        jrygcur ucukrtiru iucgiuretiure ugcgyr idftuvytyr idtcyfg
        jrygcur ucukrtiru iucgiuretiure ugcgyr idftuvytyr idtcyfg

        jrygcur ucukrtiru iucgiuretiure ugcgyr idftuvytyr idtcyfg

        jrygcur ucukrtiru iucgiuretiure ugcgyr idftuvytyr idtcyfg


      </p>
      <div className='d-flex align-items-center gap-4 mt-3'>
         <img src={ava01} className='w-25 h-25 rounded-2' alt=''/>
     <div>
      <h6 className='mb-0 mt-3'>Harry Doe</h6>
      
      <p>Customer</p>
      </div>
    </div>
    </div>

    <div className='testimonial py-4 px-3'>
      <p>
        jrygcur ucukrtiru iucgiuretiure ugcgyr idftuvytyr idtcyfg
        jrygcur ucukrtiru iucgiuretiure ugcgyr idftuvytyr idtcyfg

        jrygcur ucukrtiru iucgiuretiure ugcgyr idftuvytyr idtcyfg

        jrygcur ucukrtiru iucgiuretiure ugcgyr idftuvytyr idtcyfg


      </p>
      <div className='d-flex align-items-center gap-4 mt-3'>
         <img src={ava02} className='w-25 h-25 rounded-2' alt=''/>
     <div>
      <h6 className='mb-0 mt-3'>Liam Grey</h6>
      
      <p>Customer</p>
      </div>
    </div>
    </div>

    <div className='testimonial py-4 px-3'>
      <p>
        jrygcur ucukrtiru iucgiuretiure ugcgyr idftuvytyr idtcyfg
        jrygcur ucukrtiru iucgiuretiure ugcgyr idftuvytyr idtcyfg

        jrygcur ucukrtiru iucgiuretiure ugcgyr idftuvytyr idtcyfg

        jrygcur ucukrtiru iucgiuretiure ugcgyr idftuvytyr idtcyfg


      </p>
      <div className='d-flex align-items-center gap-4 mt-3'>
         <img src={ava03} className='w-25 h-25 rounded-2' alt=''/>
     <div>
      <h6 className='mb-0 mt-3'>Paxton Franklin</h6>
      
      <p>Customer</p>
      </div>
    </div>
    </div>

    <div className='testimonial py-4 px-3'>
      <p>
        jrygcur ucukrtiru iucgiuretiure ugcgyr idftuvytyr idtcyfg
        jrygcur ucukrtiru iucgiuretiure ugcgyr idftuvytyr idtcyfg

        jrygcur ucukrtiru iucgiuretiure ugcgyr idftuvytyr idtcyfg

        jrygcur ucukrtiru iucgiuretiure ugcgyr idftuvytyr idtcyfg


      </p>
      <div className='d-flex align-items-center gap-4 mt-3'>
         <img src={ava03} className='w-25 h-25 rounded-2' alt=''/>
     <div>
      <h6 className='mb-0 mt-3'>Paxton Franklin</h6>
      
      <p>Customer</p>
      </div>
    </div>
    </div>
  </Slider>
  )
    
  
}

export default Testimonial
