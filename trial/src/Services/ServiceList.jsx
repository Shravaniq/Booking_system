import React from 'react'
import ServicesCard from './ServicesCard'
import { Col } from 'reactstrap'

import Wimg from '../assets/images/holland.jpg'
import Wimg1 from '../assets/images/dedeagac.jpg'
import Wimg2 from '../assets/images/berlin.jpg'

const servicesData = [
    {
        imgUrl: Wimg,
        title:"fuecfgewkgfkugfu",
        desc:"uetctek eugfcj,ueg weugcfjegf,egfiuef uegfcuegf",
    },
    {
        imgUrl: Wimg1,
        title:"Best Room Services",
        desc:"uetctek eugfcj,ueg weugcfjegf,egfiuef uegfcuegf",
    },
    {
        imgUrl: Wimg2,
        title:"Customization",
        desc:"uetctek eugfcj,ueg weugcfjegf,egfiuef uegfcuegf",
    },

]


const ServiceList = () => {
  return <>
    {
        servicesData.map((item,index)=>(  <Col lg='3' key={index}>
        <ServicesCard item={item} />
        </Col>))
    }
  </>
}

export default ServiceList
