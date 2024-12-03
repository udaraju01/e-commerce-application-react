import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'

const Blog = () => {
  return (
    <>
    <Meta title={"Blogs"}></Meta>
    <Breadcrumb title="Blogs"/>
    <Container class1='blog-wrapper home-wrapper-2 py-5'>
        <div className='row '>
            <div className='col-3'>
                <div className='filter-card mb-3'>
                    <h3 className='filter-title'>Shop By Categories</h3>
                    <div>
                        <ul className='ps-0'>
                            <li>Watch</li>
                            <li>Tv</li>
                            <li>Camera</li>
                            <li>Laptop</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div> 
    </Container>
    </>
  )
}

export default Blog
