import React from 'react';
import '../style/hotel-details.css'
 
 import {Container, Row, Col, Form, ListGroup} from 'reactstrap'

import {useParams} from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../Utils/AvgRating';

const HotelDetails = () => {

  const {id}= useParams()
  //this is a static data later we will call our API and load our data from database
  const tour= tourData.find(tour=> tour.id ===id)
  // destruction properties from tour object
  
  const {photo, title, desc, price, address, reviews, city, distance, maxGroupSize}= tour

  const {totalRating, avgRating}=calculateAvgRating(reviews)

  return <> <section> 
<Container>
  <Row>
    <Col lg="8">
      <div className="tour__content">
        <img src={photo} alt=""/>
        <div className="tour__info">
        <h2>{title}</h2>
        <div className='d-flex 
        align-items-center gap=5'>
          <span className='tour__rating d-flex align-items-center gap-1'>
      <i class="ri-star-fill"></i>{calculateAvgRating === 0? null:avgRating}
      {totalRating===0 ?
      (  'Not rated' )
      : 
      ( <span> ({reviews.length}) </span>
      )}
      </span>
        </div>
        </div>
      </div>
    </Col>
  </Row>
</Container>
  </section>
  
  </>
}

export default HotelDetails
