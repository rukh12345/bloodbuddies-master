import React, { useState } from 'react'

import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import './Register.css'
import Api from '../../services/api'

const Register = () => {
  
  const [data,setData]=useState({
    fullName:'',
    email:'',
    phone:'',
    date_of_birth:'',
    gender:'',
    blood_group:'',
    area:'',
    city:''
     
  })
  const onChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})

  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(data)
    const resposne=await Api.addDonor(data)
    console.log(resposne)
    if(resposne.success){
      console.log(resposne.data)
      alert('Donor registered successfully')
      window.location.href='/'
    }
    else{
      alert('An error occured. Please try again later.')
    }
  }
  return (
    <>
  
      <div className="form-container slider-margin">
        <h1 >register page</h1>
  <div className=" container  form-css">
    <h2 className='heading-text'>Donar Information</h2>
    <form action="/action_page.php" noValidate>
      <table className=''>
        <tbody><tr>
            <td>  
              <label htmlFor="name">Full Name:</label>
            </td>
            <td>
              <input type="text" id="name" name="fullName" 
              value={data.fullName}
              onChange={onChange}
              required /><br />
            </td>
          </tr>
          <tr>
            <td>
              <label className="form-lable" htmlFor="date">D.O.B:</label>
            </td>
            <td>
              <input type="date" id="date" name="date_of_birth" 
              value={data.date_of_birth}
              onChange={onChange}
              required /><br />
            </td>
          </tr>
          <tr>
            <td>
              <label className="form-lable" htmlFor="City">City:</label>
            </td>
            <td>
              <input type="text" id="City" name="city"  
              value={data.city}
              onChange={onChange}
              required /><br />
            </td>
          </tr>
          <tr>
            <td>
              <label className="form-lable" htmlFor="area">Area:</label>
            </td>
            <td>
              <input type="text" id="area" name="area" 
              value={data.area}
              onChange={onChange}
               required /><br />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="bloodgroup">Blood Group:</label>
            </td>
            <td>
              <input type="text" id="bloodgroup" name="blood_group" 
              value={data.blood_group}
              onChange={onChange}
               required /><br />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="phone"> Contact No:</label>
            </td>
            <td>
              <input type="text" id="phone" name="phone" 
              value={data.phone}
              onChange={onChange}
               required /><br />
            </td>
          </tr>
          <tr>
            <td>
              <label className="form-lable" htmlFor="email">Email:</label>
            </td>
            <td>
              <input type="email" id="email" name="email" 
              value={data.email}
              onChange={onChange}
               required /><br />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="gender">Gender:</label>
            </td>
            <td>
              <label className="form-lable">
                <input type="radio" name="gender" defaultValue="male"  
                checked={data.gender === 'male'}
                onChange={onChange}
                />
                Male
              </label>
              <label>
                <input type="radio" name="gender" defaultValue="female" 
                checked={data.gender === 'female'}
                onChange={onChange}

                 />
                Female
              </label>
            </td>
          </tr>
          <tr>
            <td colSpan={2}> <button 
            onClick={handleSubmit}
             className="submit-decore"  >Submit</button>
            </td>
            <td />
          </tr>
        </tbody></table>
    </form>
  </div>
</div>
<br />
    <Footer/>

    </>
  )
}

export default Register
