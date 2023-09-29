import React,{useRef} from 'react'
import './Search-bar.css';
import { Col,Form,FormGroup } from 'reactstrap';

const SearchBar = () => {
      const locationRef = useRef('')
      const distanceRef = useRef(0)
      const PeopleRef = useRef(0)

   const searchHandler = ()=>{
    const location = locationRef.current.value
    const distance = distanceRef.current.value
    const People = PeopleRef.current.value
   

if(location =='' || distance=='' || People=='')
{
 return alert("Please fill all requirements ")
}
   
}







  return <Col lg='12'>
    <div className='Search__bar'>
        <Form className='d-flex align-items-center gap-4'>
             <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span>
                <i class="ri-hotel-bed-line"></i>
                </span>
                <div>
                    <h6>Attractions</h6>
                    <input type='text' placeholder='Where are you going?'
                        ref={locationRef}
                    />
                </div>
               
             </FormGroup> 
             <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span>
                <i class="ri-map-pin-time-line"></i>
                </span>
                <div>
                    <h6>Distance</h6>
                    <input type='number' placeholder='Distance k/m'
                        ref={distanceRef}
                    />
                </div>
                
             </FormGroup> 
             <FormGroup className='d-flex gap-3 form__group form__group-last'>
                <span>
                <i class="ri-group-line"></i>         
                       </span>
                <div>
                    <h6>Number of People</h6>
                    <input type='number' placeholder='0'
                        ref={PeopleRef}
                    />
                </div>
                
             </FormGroup> 
              <span className='search__icon' type='submit' onClick={searchHandler}>
              <i class="ri-search-line"></i>
              </span>


        </Form>
    </div>
  </Col>
}

export default SearchBar
