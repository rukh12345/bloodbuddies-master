import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './DonorInfo.css'

const DonorInfo = ({fullName,phone,area,blood_group,date_of_birth,email,gender}) => {
   const date=new Date(date_of_birth)
  return (
    <>
      
    <div className="DonorInfo">
        <div className="DonorInfo__container">
            <h1>Donor Information</h1>
            <h5 class="card-title">Name:{fullName}</h5><br/>
          <p class="card-text">D.O.B: {date.toISOString().split('T')[0]}</p>
          <p class="card-text">Area:{area}</p>
          <p class="card-text">Blood Group: {blood_group}</p>
          <p class="card-text">Gender:{gender}</p>
          <p class="card-text">Contact:{phone}</p>
          <p class="card-text">Email:{email}</p><br/>    
           
        </div>
   </div>


    </>
  )
}

export default DonorInfo