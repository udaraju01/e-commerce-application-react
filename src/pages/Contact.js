import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { BiHome } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"}></Meta>
      <Breadcrumb title="Contact Us"/>
      <Container class1='contact-wrapper py-5 home-wrapper-2'>
          <div className='row'>
            <div className='col-12'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d673.5745992593006!2d78.66042219743002!3d17.434834907109934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb75fe7a307a29%3A0x4e23b510f588ec57!2sWatch%20Shop%20repairing%20centre!5e1!3m2!1sen!2sin!4v1728711760959!5m2!1sen!2sin" 
                      width="600" 
                      height="450" 
                      className='border-0 w-100'
                      title='raju'
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Name'/>
                    </div>
                    <div>
                      <input type='text' className='form-control' placeholder='Email'/>
                    </div>
                    <div>
                      <input type='text' className='form-control' placeholder='Mobile Number'/>
                    </div>
                    <div>
                      <textarea name='' id='' cols={30} className='w-100 form-control' rows={4} placeholder='comments'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get in Touch With us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-4 d-flex gap-15 align-items-center'>
                        <BiHome  className='fs-5'/>
                        <address className='mb-0'>
                          8/75,Indira Nagara Colony Road No1,Annajiguda,Hyderabad.

                        </address>
                      </li>
                      <li className='mb-4 d-flex gap-15 align-items-center'>
                        <BiPhoneCall className='fs-5' />
                        <a href='tel:+91 6302469003' > +91 6302469003</a>
                      </li>
                      <li className='mb-4 d-flex gap-15 align-items-center'>
                        <CiMail  className='fs-5'/>
                        <a href='mailto:udarajumatta2603@gmail.com ' >udarajumatta2603@gmail.com</a>
                      </li>
                      <li className='mb-4 d-flex gap-15 align-items-center'>
                        <IoIosInformationCircleOutline  className='fs-5'/>
                        <p className='mb-0'> Monday - Friday 10 AM - 8 PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Contact
