import React, {useState, useEffect} from 'react';

import CommonSection from '../shared/CommonSection';
import "../style/hotel.css";
import tours from '../assets/data/tours';
import NewsLetter from '../shared/NewsLetter';
import HotelCard from '../shared/HotelCard';
import SearchBar from '../shared/SearchBar';
import {Container, Row, Col} from 'reactstrap';

// import {Row} from 'reactstrap';



const Hotel = () => {

const [pageCount, setPageCount]=useState(0)
const [page, setPage]= useState(0)

useEffect(()=>{

  const page = Math.ceil(5/4)//later we will use backend data count
  setPageCount(page)
},[page])


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
   
   <section className="pt-0">
    <Container>
      <Row>
        {
          tours?.map(hotel=> (
          <Col lg='3' className='mb-4' key={hotel.id}> 
          <HotelCard tour={hotel}/> 
          </Col>
          ))} 
          <Col lg='12'>
            <div className="pagination d-flex align-ite,s-cemter
            justify-content-center mt-4 gap-3">
              {[...Array(pageCount).keys()].map(number=>(
                <span key={number} onClick={()=> setPage(number)}
                className={page==number ? "active_page" : "" }
                >
                  {number + 1}
                </span>
              ))}
            </div>
          </Col>
       </Row>
    </Container>
   </section>
  <NewsLetter/>
  </>
  );
    
  
};

export default Hotel;
