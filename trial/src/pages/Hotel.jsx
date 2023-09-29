import React from 'react'

import CommonSection from '../shared/CommonSection';
import "../style/hotel.css";
import tours from '../assets/data/tours';
import NewsLetter from '../shared/NewsLetter';
import HotelCard from '../shared/HotelCard';
import SearchBar from '../shared/SearchBar';
import {Container, Row, Col} from 'reactstrap';
// import {Row} from 'reactstrap';



const Hotel = () => {
  return ( 
  <>
  <CommonSection title={"All Hotels"}/>
  <section>
    <Container>
      <Row>
        <SearchBar/>
      </Row>
    </Container>
  </section>
   
   <section>
    <Container>
      <Row>
        {
          tours?.map(hotel=> <Col lg='3' key={hotel.id}> <HotelCard tour={hotel}/> </Col>)
        } 
       </Row>
    </Container>
   </section>

  </>
  );
    
  
};

export default Hotel;
