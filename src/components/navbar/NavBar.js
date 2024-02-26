import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu, GiCrossedBones } from "react-icons/gi";
import { useState } from 'react';
import { Modal ,Button} from 'antd';
const NavBar = ({token,setToken}) => {
  const [show, setShow] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
  
    const handleOk = () => {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.href='/'
    };
    const handleCancel = () => {
      setModalOpen(false);
    }
  return (
    <>
   
  
      <div className="navbar-stiky fixed-top mb-2">
      {/* <section className="bg-dark ">
  <div className="container">
    <div className="row top-bar" style={{paddingBottom: 5}}>
      <div className="col" style={{textAlign: 'left'}}>
        <span className="text-white">
          <i className="fas fa-envelope" />&nbsp; &nbsp; 
          bloodbuddies@gmail.com
        </span>&nbsp; &nbsp;
        <span className="text-white">
          |
        </span>&nbsp; &nbsp;
        <span className="text-white ">
          <i className="fas fa-phone" />&nbsp;&nbsp;
          +923 00000000
        </span>
      </div>
      <div className="col" style={{textAlign: 'right'}}>
        <span>
          <a href="#" style={{color: '#fff', textDecoration: 'none'}}><i className="fa-brands fa-facebook" /></a>
        </span>&nbsp; &nbsp; &nbsp; &nbsp; 
        <span>
          <a href="#" style={{color: '#fff'}}><i className="fab fa-instagram" /></a>
        </span>
      </div>
    </div>
  </div>
</section> */}
 <div className="container-fluid  ">
  <div className="row d-flex bg-dark ">
    {/* Mission  */}
   
    <div className="col-sm-6 text-center mvs">
      <span className="text-white ">
          <i className="fas fa-envelope" />&nbsp; &nbsp;
          bloodbuddies@gmail.com
        </span>&nbsp; &nbsp;
        <span className="text-white">
          |
        </span>&nbsp; &nbsp;
        <span className="text-white ">
          <i className="fas fa-phone" />&nbsp;&nbsp;
          +923 00000000
        </span>
    </div>
   

    {/* Vision */}
    
    <div className="col-sm-6 text-center mvs">
      <span>
          <a href="#" style={{color: '#fff', textDecoration: 'none'}}><i className="fa-brands fa-facebook" /></a>
        </span>&nbsp; &nbsp; &nbsp; &nbsp;
        <span>
          <a href="#" style={{color: '#fff'}}><i className="fab fa-instagram" /></a>
        </span>
    </div>
    
  </div>
</div>

        <div className="navbar">
        <div className="navbar_logo">
            <Link to="/">
            <img src="/images/logo.png" alt="logo" />
            </Link>
        </div>
        <div className="navbar_menu">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/bloodinfo">Blood Info</Link></li>
                {
                  token?
                  <li>
                  <Link to="/register">Register</Link>
                  </li>:""
                }
                  {
                  token?
                  <li>
                  <Link to="/donors">Donors</Link>
                  </li>:""
                }
            </ul>

            </div>
              {
                token?
                <button 
                onClick={() => {
                  setShow(!show);
                  setModalOpen(true);
                }}
                >
                    Logout
                </button>:
                <button>
                <Link to="/login">Login</Link> 
                </button>
              }
            
            <div className="navbar_mobile">
        {show ? (
          <GiCrossedBones
            className="navbar_hamburger"
            onClick={() => setShow(false)}
          />
        ) : (
          <GiHamburgerMenu
            className="navbar_hamburger"
            onClick={() => setShow(true)}
          />
        )}

        {show ? (
          <div className="navbar_mobile-menu">
            <ul>
                <li 
              onClick={() => setShow(false)}
                ><Link to="/">Home</Link></li>
                <li 
                  onClick={() => setShow(false)}
                ><Link to="/about">About</Link></li>
                <li 
                  onClick={() => setShow(false)}
                ><Link to="/contact">Contact</Link></li>
                <li 
                onClick={() => setShow(false)}
                ><Link to="/bloodinfo">Blood Info</Link></li>
                {
                  token?
                  <li     onClick={() => setShow(false)}>
                  <Link to="/register">Register</Link>
                  </li>:""
                }
                {
                  token?
                  <li 
                  style={{color:'white',cursor:'pointer'}}
                   onClick={() => {
                    setShow(!show);
                    setModalOpen(true);
                  }}
                  >Logout</li>:
                  <li><Link to={"/login"}>Login</Link></li>
                 
                }
               
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>



      {
        <Modal
          title="Log Out"
          open={modalOpen}
          footer={[
            <Button
              style={{
                backgroundColor: "rgb(186, 31, 31)",
                color: "white",
              }}
              key="reset"
              type="primary"
              onClick={handleOk}
            >
              Yes
            </Button>,
            <Button key="cancel" onClick={handleCancel}>
              No
            </Button>,
          ]}
        >
          <p>Are you sure you want to Logout?</p>
        </Modal>
      }

</div>
</div>

    </>
  )
}

export default NavBar
