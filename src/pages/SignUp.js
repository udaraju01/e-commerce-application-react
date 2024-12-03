import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import Custominput from '../components/Custominput'



const SignUp = () => {
  return (
    <>
        <Meta title={"Signup"}></Meta>
        <Breadcrumb title="Signup"/>
        <Container class1='login-wrapper py-5 home-wrapper-2'>
           <div className='row'>
                <div className='col-12'>
                    <div className='login-card'>
                        <h3 className='text-center mb-3'>Sign Up</h3>
                        <form action='' className='d-flex flex-column  gap-15'>
                            <Custominput type='text' className='form-control' name='name' placeholder='Name'/>
                            <Custominput type='email' className='form-control' name='email' placeholder='Email'/>
                            <Custominput type='tel' className='form-control'  name='Moblie' placeholder='Mobile Number'/>
                            <Custominput   type='Password' name='Password' placeholder='Password'/>
                            <Custominput   type='Password' name='Password' placeholder=' Confirm Password'/>
                            <div className=' d-flex justify-content-center gap-15 align-items-center'>
                                <button className='button border-0'>Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>

    </>
  )
}

export default SignUp
