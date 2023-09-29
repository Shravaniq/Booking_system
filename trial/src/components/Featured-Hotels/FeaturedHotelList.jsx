import React from 'react'
import HotelCard from '../../shared/HotelCard'
import tourData from '../../assets/data/tours'
import { Col } from 'reactstrap'

const FeaturedHotelList = () => {
  return <>
    {
        tourData?.map(tour => (
            <Col lg='3' className='mb-4' key={tour.id}>
            <HotelCard tour={tour}/>

            </Col>

        ))
    }
  </>
}

export default FeaturedHotelList;
