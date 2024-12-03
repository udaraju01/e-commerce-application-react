import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import Custominput from '../components/Custominput'

const ResetPassword = () => {
  return (
<>
        <Meta title={"Reset Password"}></Meta>
        <Breadcrumb title="Reset Password"/>
        <Container class1='login-wrapper py-5 home-wrapper-2'>
           <div className='row'>
                <div className='col-12'>
                    <div className='login-card'>
                        <h3 className='text-center mb-3'>Reset Password</h3>
                        <form action='' className='d-flex flex-column gap-15 '>
                            <Custominput type='Password' name='Password' placeholder='Password'/>
                            <Custominput type='Password' name='Password' placeholder='Password'/>
                            <div className=' d-flex justify-content-center gap-15 align-items-center'>
                                <button className='button border-0'>Ok</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Container>

    </>
  )
}

export default ResetPassword
