import React from 'react'
import './Newletter.css'
import manimg1 from '../assets/images/milano.jpg'

import { Container,Row,Col } from 'reactstrap'



const NewsLetter = () => {
  return ( 
  <section className='newsletter' >
    <Container>
        <Row>
            <Col lg='6'>
               <div className='newsletter_content'>
                   <h2>Suscribe noe to get useful traveling information</h2>
                   <div className='newsletter__input'>
                   <input type='email' placeholder='Enter your name'/>
                     <button className='btn newsletter__btn'>Subscribe</button>
                   </div>
                   <p>ywegef iugfciug iufgkurg ufgur yugciurg iugciug iururegiugreug 
                   ugurgiu rgyiurgy iiugiruegh iuygiu iyiuygi iyiuyg</p>
               </div>

            </Col>
            <Col lg='6'>
                 <div className='newsletter__img'>
                    <img src={manimg1} alt="" />
                 </div>

            </Col>
        </Row>
    </Container>
  </section>
  )
}

export default NewsLetter
