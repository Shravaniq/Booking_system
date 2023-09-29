import React from 'react'
import '../style/home.css';
import { Container,Row,Col} from 'reactstrap';
import campimg from '../assets/images/camps.jpeg';
import campimg3 from '../assets/images/cottages.jpeg';

import campimg1 from '../assets/images/batum.jpg';

import campimg2 from '../assets/images/bbs.jpeg';
import worldimg from '../assets/images/country.jpeg';
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../Services/ServiceList';
import FeaturedHotelList from '../components/Featured-Hotels/FeaturedHotelList';
import experiecneImg from '../assets/images/fırsat1.jpeg';
import MasonryImangesGallery from '../components/Image-gallery/MasonryImangesGallery';
import Testimonial from '../components/Testimonials/Testimonial';
import NewsLetter from '../shared/NewsLetter';

const Home = () => {
  return<>
    {/* ==============hero========== */}
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className='hero__content'>
               <div className='hero__subtitle d-flex align-items-center'>
                <Subtitle Subtitle={'Know before you go'} />
                <img className='img1' src={worldimg} alt=""/>
               </div>
               <h1>Reserve Your rooms 
               <span className='highlight'>
                   memories 
               </span>
               </h1>
               <p>kuhcahewg lcechiefihacef wjegcfjwgfjcwegf
               wejfgcjwegfjwegfjgefeghaekg
               wekgckg gkuergkuerguerg
               rkgrjgkrkuergkcrkurhguiehgtkurgkurgugrgergt
               jgjrgjurguergtcr urgerjg,jergerg,ergjergjeg</p>
            </div>
          
          </Col>

          <Col lg='2'>
             <div className='hero__img-box'>
              <img src={campimg} alt=""/>
             </div>
          </Col>

          <Col lg='2'>
             <div className='hero__img-box mt-4'>
              <img src={campimg3} alt=""/>
             </div>
          </Col>
          <Col lg='2'>
             <div className='hero__img-box mt-5'>
              <img src={campimg2} alt=""/>
             </div>
          </Col>
<SearchBar/>


        </Row>
      </Container>
    </section>
    {/* ================================hero section start========== */}
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className='services__subtitle'>What we Serve</h5>
            <h2 className='services__title'>We offer our best Services</h2>
          </Col>
          <ServiceList/>

        </Row>
      </Container>
    </section>
    {/* ==============================featured section start */}
    <section>
      <Container>
        <Row>
          <Col 
             lg='12' className='mb-5'>
             <Subtitle Subtitle={'Explore'}/>
             <h2 className='featured__tour-title'>Our Featured Hotels</h2>
          </Col>
          <FeaturedHotelList/>
        </Row>
      </Container>
    </section>
     {/* ==============================featured section end */}
     {/* =======================experience section start */}
       <section>
        <Container>
          <Row>
            <Col lg='6'>
            <div className='experience__content'>
              <Subtitle Subtitle={'Experience'}/>

              
              <h2>With our all experience<br/>We Will Serve You</h2>
              <p>
                gecwi iugcrgfh iugviusliyr ugfiuiuviry iugfctbfctaycilrug
                <br/>
                jecgrk igiyreg ygrciyet iyriutrey rtviueti eriytiuveryt iuerytviury 
              </p>
            </div>
            <div className='counter__wrapper d-flex align-items-center gap-5'>
            <div className='counter__box'>
                  <span>12k+</span>
                  <h6>Succesful Booking</h6>
            </div>
            <div className='counter__box'>
                  <span>2k+</span>
                  <h6>Regular Guests</h6>
            </div>
            <div className='counter__box'>
                  <span>12</span>
                  <h6>Years experience</h6>
            </div>

            </div>
              
            </Col>
            <Col lg="6">
              <div className="experience__img">
              <img src={experiecneImg} alt=''/>

              </div>
            </Col>
          </Row>
        </Container>
       </section>
          {/* =======================experience section end */}

        {/* Gallery Section start */}

        <section>
          <Container>
            <Row>
              <Col lg="2">
                   <Subtitle Subtitle={'Gallery'}/>
                   <h2 className='garllery__title'>Visit Our Gallery</h2>

                   
              </Col>
              <Col lg='12'>
                  <MasonryImangesGallery/>

                  
              </Col>
            </Row>
          </Container>
        </section>
          {/* Gallery Section end */}

{/* ================= Testimonial section start==========*/}
<section>
  <Container>
  <Row>
    <Col lg='12'>
      <Subtitle Subtitle={'Fans Love'}/>
      <h2 className='testimonial__title'>What our Guests say about us</h2>
     
    </Col>
    <Col lg='12'>
    <Testimonial/>

    </Col>
    </Row>
  </Container>
</section>
  



{/* ================= Testimonial section end==========*/}
<NewsLetter/>
  </>
}

export default Home
