
import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import './Home.css'
const Home = () => {
  const [area, setArea] = React.useState('')
  const [blood_group, setBloodGroup] = React.useState('')
  return (

    <>
   <div className="container-fluid home1 slider-margin" data-aos="fade-right" >
      <img src="/images/home-slider.png" className="d-block w-100" alt="..." />
        <div className="option carousel-caption"  >
          <h1 className='heading-text' data-aos="flip-left">YOUR BLOOD <br /> THEIR HOPE</h1>
          <p data-aos="flip-up"  className='about-text-1'>
          Join the noble cause of saving lives through blood donation; your simple act of kindness can leave a lasting, positive impact on someone in need.</p>
          <div class="item-button" > 
          <button onclick="" id="myBtn"><h6><Link className="nav-link" to="/bloodinfo">Learn More</Link>
</h6></button>
</div>
        </div>
      </div>
      {/* portion 1 */}

      {/* portion 1  */}
      <div className="row row-cols-1 row-cols-md-3 g-5 mx-5 mt-3">
  <div className="col" data-aos="flip-left" >
  <div className="card">
  <div className="card-title">
        <center><h2 className="card-title mt-2 heading-text">OUR MISSION</h2></center>
  </div>
      <img src="images/image10.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text home-text about-text-1">Our mission is clear ,We save lives through blood donation. With  dedication and your support, we make a difference in our communities.<br/></p>
         <br/>
      </div>
    </div>
  </div>

  <div className="col"  data-aos="flip-left">
  <div className="card">
  <div className="card-title ">
         <center><h2 className="card-title mt-2 heading-text">EDUCATIONL RESOURSE</h2></center>
  </div>
      <img src="images/h2.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text home-text about-text-1">Explore our educational resources to learn about the importance of blood donation, the donation process, and how you can become a part of this life-saving mission.</p>
      </div>
    </div>
  </div>

  <div className="col" data-aos="flip-left">
  <div className="card">
  <div className="card-title">
         <center><h2 className="card-title mt-2 heading-text">CONTACT US</h2></center>
  </div>
      <img src="images/h3.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-text home-text about-text-1">If you have any questions, suggestions, or need assistance, please don't hesitate to reach out to us. We're here to help you with your blood donation journey.</p>
      </div>
    </div>
  </div>
</div>
<br/>
{/* search bar  */}
<div className="container-fluid mt-1 s1 ">
  <div className="row row1">
    <div className="col-md-6 offset-md-3">
      <div className="header">
        <h1 className="text-center">Search Donors</h1>
        <hr className="text-center" style={{height: 3, color: 'white'}} />
        <p className="text-center" style={{color: 'grey'}}>Donate the Blood to help others</p>
      </div></div>
    <div className="row row1 g-2">
      <div className="col-md">
        <div className="form-floating ">
        <input type='text' className="form-control" id="floatingInputGrid"  name='blood_group' 
        value={blood_group}
         onChange={(e) => setBloodGroup(e.target.value)}
        />
          <label for="floatingInputGrid">Blood Group</label>
        </div>
      </div>
      <div className="col-md">
        <div className="form-floating">
        <input type='text' className="form-control" id="floatingInputGrid" name='area' 
        value={area}
        onChange={(e) => setArea(e.target.value)}
        />
          <label for="floatingInputGrid">Area</label>
        </div>
      </div>
    </div>
  </div>         
  <div className="mt-5">
    <Link  to={`/search`} state={
      {area: area, blood_group: blood_group}
    }  className="b1 text-white text-decoration-none px-3 py-2 rounded-3">Search</Link>
  </div> </div>


      {/* portion 2 */}
      <div className="container-fluid home-quote" data-aos="flip-down">
        <div>      
           <h4 className='heading-text'>" In every drop of donated blood, there's a story of hope, compassion, and the <br /> power to heal. "</h4>
        </div>
      </div>

      {/* portion 3 */}

      <div className="contaier home-video-con" >
        <div className="row">
          <div className="col video-text " data-aos="fade-down-right">
            <h2 className='heading-text'>We Can Count On Us</h2>
            <p className='about-text-1' >  Blood donation is an act of compassion that saves lives, strengthens communities, and offers health benefits to donors.
           By understanding the vital importance of blood donation,
            we can all contribute to the well-being of our society. Each donation is a precious gift of life,
             and by increasing awareness and participation, we can ensure that this invaluable resource remains readily available to those in need.
              So, consider rolling up your sleeve and making a difference today – your blood donation could be the lifeline someone is desperately waiting for.
        </p>
          </div>
          <div className="col " data-aos="fade-down-left">
          <video width="430" height="560" controls>
        <source src="video/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <img src="images/h1.png" alt="" /> */}
          </div>
        </div>
      </div>
    
   <Footer/>
    </>
  )
}

export default Home
