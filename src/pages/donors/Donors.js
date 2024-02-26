import React, { useEffect, useState } from 'react'
import './Donors.css'
import Api from '../../services/api'
import DonorInfo from '../donorinfo/DonorInfo'

export default function Donors() {
    const [donors, setDonors] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        setLoading(true)
        Api.getDonors()
            .then((response) => {
                console.log(response)
                setDonors(response)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [])
  return (
    <div className="donors">
   {
         loading ? <p>Loading...</p> : error ? <p>Something went wrong</p> : donors?.map((donor) => (
              <DonorInfo key={donor.id} {...donor} />
         ))
       }
   
    </div>
  )
}
