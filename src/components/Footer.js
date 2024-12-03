import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin ,BsYoutube , BsInstagram ,BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
   <>
    <footer className='py-4'>
    <div className='container xxl'>
      <div className='row align-items-center'>
        <div className='col-5'>
          <div className=' footer-top-data d-flex gap-30 align-items-center'>
            <img src='images/newsletter.png' alt='newsletter'/>
            <h3 className='mb-0 text-white'>Sing Up for Newsletter </h3>
          </div>
        </div>
        <div className='col-7'>
        <div className="input-group">
            <input type="text" 
            class="form-control py-1" 
            placeholder="Your Email Address" 
            aria-label="Your Email Address" 
            aria-describedby="basic-addon2"/>
            <span className="input-group-text p-2" id="basic-addon2">
              Subscribe
            </span>
          </div>
        </div>
      </div>
    </div>
    
    </footer>
    <footer className='py-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-3'>
            <h4 className='text'>Contact Us</h4>
            <div className='address'>
              <address>8/72,Indira Nagar Colony Road No1 <br/>
              Annojiguda,Hyderabad,<br/> Warangal HighWay,<br/>
              Pincode:500088</address>
              
              <a href='tel:+91 6302469003' className='mt-3 d-block mb-2 '>+91 6302469003</a>
              <a href='mailto:udarajumatta2603@gmail.com' className='mt-2 d-block mb-2 '>udarajumatta2603@gmail.com</a>
    
              <div className='social_icons d-flex align-items-center gap-30'>
                <a href=','><BsLinkedin /></a>
                <a href=','><BsInstagram /></a>
                <a href=','><BsGithub /></a>
                <a href=','><BsYoutube /></a>
              </div>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text'>Information</h4>
            <div  className='footer-links'>
              <Link to={"/privacy-policy"} className='link'>Privacy Policy</Link>
              <Link to={"/refund-policy"} className='link'>Refund Policy</Link>
              <Link to={"/shipping-policy"} className='link'>Shipping Policy</Link>
              <Link to={"/terms-and-contions"} className='link'>Terms & Conditions</Link>
              <Link className='link'>Blogs</Link>
            </div>
          </div>
          <div className='col-2'>
            <h4 className='text'>Account</h4>
            <div  className='footer-links'>
              <Link className='link'>About US</Link>
              <Link className='link'>Faq</Link>
              <Link className='link'>Contact</Link>
            </div>
          </div>
          <div className='col-2' >
            <h4 className='text'>Quick links</h4>
            <div  className='footer-links'>
              <Link className='link'>Laptops</Link>
              <Link className='link'>Headphones</Link>
              <Link className='link'>Tablets</Link>
              <Link className='link'>Watch</Link>
            </div>
          </div>
          <div className='col-3' >
            <h4 className='text'>Our Apps</h4>
            <p>Download our App and get extra 15% Discount on your first order..!</p>
            <div  className='footer-links'>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className='container xxl'>
        <div className='row'>
          <div className='col-12'></div>
            <p className='text-center mb-0 text-white'>
              &copy:{new Date().getFullYear()}; Powered by Riya's conrner
            </p>
        </div>
      </div>
    </footer>
   
   </>
  )
}

export default Footer
