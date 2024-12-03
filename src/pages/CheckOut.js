import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import Container from '../components/Container';


const CheckOut = () => {
  return (
   <>
        <Meta title={"Check Out"}></Meta>
        <Breadcrumb title="Check Out"/>
        <Container class1='checkout-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-7'>
                    <div className='checkout-left-data'>
                        <h3 className='website-name'> Dev corner</h3>
                        <nav style={{"--bs-breadcrumb-divider":">"}} 
                            aria-label="breadcrumb">

                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={"/cart"} className='text-dark'>cart</Link>
                                </li>
                                &nbsp; /
                                <li className="breadcrumb-item active" 
                                    aria-current="page">
                                    Information
                                </li>
                                &nbsp; /
                                <li className="breadcrumb-item active">
                                    shipping
                                </li>
                                &nbsp; /
                                <li className="breadcrumb-item active" 
                                    aria-current="page">
                                    payment
                                </li>
                            </ol>
                        </nav>
                        <h4 className='title total'>
                            contact information
                        </h4>
                        <p className='user-details text-dark'>
                            udaraju matta (udarajumatta2603@gmail.com)
                        </p>
                        <h4 className='mt-3 total'> Shipping Address</h4>
                        <form action='' 
                            className='d-flex gap-15 flex-wrap justify-content-between'>
                                <div className='w-100'>
                                    <select
                                    name=''
                                    className='form-control form-select'
                                    id=''>
                                        <option value={""} selected disabled>
                                            select country
                                        </option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='Firt Name' className='form-control'/>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='Last Name' className='form-control'/>
                                </div>
                                <div className='w-100'>
                                    <input type='text' placeholder='Address' className='form-control'/>
                                </div>
                                <div className='w-100'>
                                    <input type='text' placeholder='Apartment,suite,etc' className='form-control'/>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='city' className='form-control'/>
                                </div>
                                <div className='flex-grow-1'>
                                <select
                                    name=''
                                    className='form-control form-select'
                                    id=''>
                                        <option value={""} selected disabled>
                                            select State
                                        </option>
                                    </select>
                                </div>
                                <div className='flex-grow-1'>
                                    <input type='text' placeholder='ZipCode' className='form-control'/>
                                </div>
                                <div className='w-100'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <Link to={"/cart"} className='text-dark'> <IoIosArrowBack className='me-2 mb-1'/>Return To Cart</Link>
                                        <Link to={"/product"} className='button'>Continue to shipping</Link>

                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
                <div className='col-5'>
                    <div className='border-bottom py-4'>
                        <div className='d-flex gap-10 mb-2 align-items-center'>
                        <div className='w-75 d-flex gap-10'>
                            <div className='w-25 position-relative'>
                                <span
                                style={{top:"-10px",right:"2px"}} 
                                className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                                <img src='https://www.bhphotovideo.com/images/images2500x2500/apple_mj3t2ll_a_watch_sport_smartwatch_42mm_1187199.jpg'
                                    className='img-fluid'
                                    alt='Add to cart product'
                                />
                            </div>
                            <div className='img-datails'>
                                <h5 className='total-price'> jffndfd</h5>
                                <p className=' total-price'>feedfdefef</p>
                            </div>
                        </div>
                        <div className='flex-grow-1'>
                            <h5>$ 100</h5>
                        </div>
                        </div>
                    </div>
                    <div className='border-bottom py-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p className='text-dark total  mb-0'>Subtotal</p>
                            <p className='text-dark total-price mb-0'> $ 10000</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center my-3'>
                            <p className='text-dark total mb-0'>Shipping</p>
                            <p className='text-dark total-price mb-0'> $ 10000</p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between align-nav-item border-bottom py-4'>
                        <h4 className='total'>Total</h4>
                        <h5 className='total-price'> $ 10000</h5>
                    </div>
                </div>
            </div>  
        </Container>
   </>
  )
}

export default CheckOut
