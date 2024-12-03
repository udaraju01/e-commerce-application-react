import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import Custominput from '../components/Custominput'

const Forgotpassword = () => {
  return (
    <>
        <Meta title={"Forgot password"}></Meta>
        <Breadcrumb title="Forgot password"/>
        <Container class1='login-wrapper py-5 home-wrapper-2'>
           <div className='row'>
                <div className='col-12'>
                    <div className='login-card'>
                        <h3 className='text-center mb-3'>Reset Your Password</h3>
                        <form action='' className='d-flex flex-column gap-15 '>
                          <p className='text-center mt-2 mb-3'>We Will send you an email to reset your password</p>
                          <Custominput type='email' name='email' placeholder='Email'/>
                            <div className=' mt-3 d-flex flex-column justify-content-center gap-15 align-items-center'>
                                <button className='button border-0'>Submit</button>
                                <Link to={"/loginpage"}>Cancle</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>

    </>
  )
}

export default Forgotpassword
