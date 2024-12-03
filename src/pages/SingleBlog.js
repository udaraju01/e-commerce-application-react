import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from "react-icons/bs";
import Container from '../components/Container';

const SingleBlog = () => {
  return (
    <>
        <Meta title={"Dynamic Blog Name"}></Meta>
        <Breadcrumb title="Dynamic Blog Name "/>
        <Container class1='blog-wrapper home-wrapper-2 py-5'>
              <div className='row '>
                  <div className='col-12'>
                    <div className='single-blog-card'>
                      <Link to={"/blog"} className='d-flex align-items-center gap-10' ><BsArrowLeft className='fs-4'/> Go Back To Blog</Link>
                        <h3 className='title'>
                          A Beautiful Sunday Morning Renaissance
                        </h3>
                        <img src='images/blog-1.jpg' className='img-fulid w-100 my-4' alt='blog-1'/>
                        <p>
                          you are only as good as your last collection,Which is an 
                          enormous pressure. I think there is something about luxury
                          it's not something people need, but it's what they want. it
                          really pulls at their heart. I have a fantastic relationship
                          with money. scelerisQue sociosqu ullamcorper urna nisl mollis
                          vestibulum pretium cmmodo inceptos cum condimenyum placerat diam 
                          venenatis blandit hac eget dis lacus a praturient Aaccusam nisl
                          vestibulum
                        </p>
                    </div>
                  </div>
              </div>
        </Container>
    </>
  )
}

export default SingleBlog
