import React, { useState } from 'react'
import {questions} from './Api';
import "./Accodian.css"
import Myaccordian from './Myaccordian';
const Accordian = () => {
    const [data, setData] = useState(questions);
  return (
    <>
    <section className="main-div container-fluid" data-aos="zoom-in-right">
        <h1 className='heading-text '>Frequently Asked Question</h1>
    {
     data.map((curElem) => {
        const { id } =  curElem;
        return <Myaccordian key={ id } { ...curElem} />
     })
     }
     </section>
    </>
  )
}

export default Accordian
