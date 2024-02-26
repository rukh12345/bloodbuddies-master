import React from 'react'
import './Search.css'
import DonorInfo from '../../donorinfo/DonorInfo'
import { useState, useEffect } from 'react'
import Api from '../../../services/api'
import { useLocation } from 'react-router-dom'

export default function Search() {
  const [donors, setDonors] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const location=useLocation()

   
  useEffect(() => {
    setLoading(true)
     const searchDonors = async () => {
      try {
        const data = await Api.getDonors()
        const filteredData = data.filter((donor) => {
          return donor.area === location.state.area && donor.blood_group === location.state.blood_group
        })
        if (filteredData.length >0
          ) {
          setDonors(filteredData)
        } 
        
      } catch (error) {
        setError(error)
       
      } finally {
        setLoading(false)
      }
    }
    searchDonors()
  }, [])
  return (
    <div className='search'>
     
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Something went wrong</p>
        ) : donors.length === 0 ? (
          <p>No donors found</p>
        ) : (
          donors?.map((donor) => <DonorInfo key={donor.id} {...donor} />)
        )}
     
    </div>
  )
}
