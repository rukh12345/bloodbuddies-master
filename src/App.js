import React, { useState } from 'react'
import Home from './pages/home/Home';
import {BrowserRouter ,Routes ,Route, Link, json} from 'react-router-dom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Bloodinfo from './pages/bloodinfo/Bloodinfo';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Search from './pages/about/search/Search';
import Signup from './pages/signup/Signup';
import NavBar from './components/navbar/NavBar';
import DonorInfo from './pages/donorinfo/DonorInfo';
import Donors from './pages/donors/Donors';
// import Accodian from './accordian/Accodian'
// import Accordian from './accordian/Accodian'


const App = () => {
  const [token,setToken]=useState(JSON.parse(localStorage.getItem('token')))
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('user')))
  return (
    <div>
      <BrowserRouter>
        <NavBar token={token} setToken={setToken} />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/bloodinfo' element={<Bloodinfo/>}/>
            <Route path='/donors' element={<Donors />}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/search' element={<Search/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='search' element={<Search />} />
            <Route path='/donorinfo' element={<DonorInfo/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
