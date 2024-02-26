
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import Api from '../../services/api'
const Login = () => {
    const [credentials,setCredentials]=useState({
        email:'',
        password:''
    })
  
  
    const handleSubmit=async(e)=>{
        e.preventDefault()
        const response=await Api.loginUser(credentials)
        console.log(response)
        if(response.success){
          console.log(response.data)
            localStorage.setItem('token',JSON.stringify(response.token))
            localStorage.setItem('user',JSON.stringify(response.data))
            alert('Login success')
            window.location.href='/'
        }
        else{
            alert('Invalid credentials')
        } 
  
    }
  return (
    <>
   <div className="login">
        <div className="login__container">
            <h1>Login to continue</h1>
           
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
                >Login</button>
              
          <p>Don't have an account?<Link to="/signup">Signup</Link></p>
        </div>
   </div>


    </>
  )
}

export default Login
