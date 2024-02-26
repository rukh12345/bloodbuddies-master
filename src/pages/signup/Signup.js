import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import Api from '../../services/api'

const Signup = () => {
    const [credentials,setCredentials]=useState({
        email:'',
        password:''
    })
  
  
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const response=await Api.signupUser(credentials)
        console.log(response)
        if(response.success){
          console.log(response.data)
            localStorage.setItem('token',JSON.stringify(response.token))
            localStorage.setItem('user',JSON.stringify(response.data))
            alert('Signup success')
            window.location.href='/'
        }
        else{
            alert('Something went wrong')
        } 
  
    }
  return (
    <>
      
    <div className="signup">
        <div className="signup__container">
            <h1>Signup to continue</h1>
                
            <input type="text" placeholder="Username" 
                value={credentials.username}
                onChange={(e)=>setCredentials({...credentials,username:e.target.value})}
                 />
                <input type="text" placeholder="Email" 
                value={credentials.email}
                onChange={(e)=>setCredentials({...credentials,email:e.target.value})}
                 />
                <input type="password" placeholder="Password" 
                value={credentials.password}
                onChange={(e)=>setCredentials({...credentials,password:e.target.value})}
                 />
                <button 
                onClick={handleSubmit}
                >Signup</button>
              
        <p>Already have an account?<Link to="/login">Login</Link></p>
        </div>
   </div>


    </>
  )
}

export default Signup
