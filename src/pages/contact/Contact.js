import React, { useState } from 'react'
import NavBar from '../../components/navbar/NavBar'
import Footer from '../../components/footer/Footer'
import './Contact.css'
import Api from '../../services/api'

const Contact = () => {

  const [data,setData]=useState({
    name:'',
    email:'',
    phone:'',
    message:''
  })

  const onChange=(e)=>{
    e.preventDefault()
    setData({...data,[e.target.name]:e.target.value})
  }
  
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const response=await Api.sendMessage(data)
    console.log(response)
    if(response.success){
      console.log(response.data)
      alert('Message sent')
      window.location.href='/'
    }
    else{
      alert('An error occured. Please try again later.')
    }
  }
  return (
    <>
 
    <div>
  <div className="container-fluid contact-header slider-margin">
    <div className="row contact-text ">
      <div className="col-lg-6 handsome" data-aos="fade-in">
        <br /><br />
        &nbsp;&nbsp;<h3 className="contact-title ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONTACT US</h3>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your contribution is matters. 
          <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;contactc us today to discover 
          the ways<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;you can  get involved and 
          begin distributing<br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;blood to those in need</p>
      </div>
    </div>
  </div>
  {/* location */}
  <div className="container-fluid contact-map">
    <div style={{width: '100%'}}><iframe width="100%" height={400} frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&height=400&hl=en&q=Iqbal%20town%20Lahore%20Pakistan+(Blood%20Buddies)&t=&z=14&ie=UTF8&iwloc=B&output=embed">&lt;a href="https://www.maps.ie/population/"&gt;Population mapping&lt;/a&gt;</iframe></div>
  </div>
  {/* location */}

</div>
<div className="container-fluid">
  <div className="row d-flex justify-content-center ">
    <section className="contact-form-init">
    <div className="container contact-container">
      <div className="contactForm" data-aos="fade-down-right" >
        <form >
          <h2>Let's start<br />The conversation</h2>
          <div className="inputbox ">
            <input type="text" name="name" 
           value={data.name} 
            onChange={onChange}
            required="required" />
            <span>Your Name</span>
          </div>
          <div className="inputbox ">
            <input type="text" 
            name="phone" 
            value={data.phone}
            onChange={onChange}
             required="required" />
            <span>Your Phone</span>
          </div>
          <div className="inputbox ">
            <input type="text" 
            name='email'
            value={data.email}
            onChange={onChange}
             required="required" />
            <span>Your Email</span>
          </div>
          <div className="inputbox ">
            <textarea  
            name='message'
            value={data.message}
            onChange={onChange}
            required="required" defaultValue={""} />
            <span>type your message---</span>
          </div>
          <div className="inputbox ">
        <button onClick={handleSubmit}>
          Submit
        </button>
          </div>
        </form>
      </div>
    </div>
  </section>
    
    <div className="col-sm-4 m-5 mvs" data-aos="fade-down-left" >
    <br/>
    <br/>
    <br/>
      <div className="text">
        <h2>Start A new Conversation</h2>
      <div class="jkh">               
                   <i class="fa fa-location-dot"></i>
                    <h4>Location</h4>
                    <p>Iqbal Town Wahdat Road Lhr.</p>
                    
                    <i class="fa fa-phone"></i>
                    <h4>Toll Free number</h4>
                    <p>030000000000</p>
                
                    <i class="fa-solid fa-envelope"></i>
                    <h4>Email</h4>
                    <p>bloodbuddies@gmail.com </p>
       </div>  </div>
    </div>
  </div>
</div>

<Footer/>
    </>
  )
}

export default Contact
