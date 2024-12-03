import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import SpecialProducts from '../components/SpecialProducts';
import Meta from '../components/Meta'
import Container from '../components/Container';
import services from '../utils/Data';
import FeaturedProducts from '../components/FeaturedProducts';
import categories from '../utils/categories';


const Home = () => {
  return (
   <>
    <Meta title={"Home"}></Meta>
    <Container class1="home-wrapper-1 py-5"> 
      <div className='row ' >
        <div className='col-6'>
          <div className='main-banner  position-relative '>
            <img src='images/main-banner-1.jpg' 
              className='img-fluid  rounded-3' 
              alt='main-banner'/>
            <div className='main-banner-content position-absolute'>
              <h4>SUPERCHARGED FOR PROS.</h4>
              <h5>iPad s13+ Pro.</h5>
              <p>From $999.00 or $41.62/mo.</p>
              <Link className='button'>BUY NOW</Link>
            </div>
          </div>
        </div>
        <div className='col-6'>
          <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center mg-0'>
            <div className='small-banner position-relative '>
              <img src='images/catbanner-01.jpg' 
                className='img-fluid  rounded-3' 
                alt='main-banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad s13+ Pro.</h5>
                <p>From $999.00 <br/>or $41.62/mo.</p>
              </div>
            </div>
            <div className='small-banner position-relative '>
              <img src='images/catbanner-03.jpg' 
                className='img-fluid  rounded-3' 
                alt='main-banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>New Arrival</h4>
                <h5> Buy iPad Air</h5>
                <p>From $999.00<br/> or $41.62/mo.</p>
              </div>
            </div>
            <div className='small-banner position-relative '>
              <img src='images/catbanner-02.jpg' 
                className='img-fluid  rounded-3' 
                alt='main-banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>15% OFF</h4>
                <h5>Smartwatch 7</h5>
                <p>Shop the latest band <br/> styles and colors</p>
              </div>
            </div>
            <div className='small-banner position-relative '>
              <img src='images/catbanner-04.jpg' 
                className='img-fluid  rounded-3' 
                alt='main-banner'/>
              <div className='small-banner-content position-absolute'>
                <h4>Free Engraving</h4>
                <h5>AirPods Max</h5>
                <p>High-fidelity playback & <br/> ultra-low distortion</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </Container>

    <Container class1="home-wrapper-2 py-5">
        <div className='row'>
          <div className='col-12'>
            <div className='servies d-flex align-items-center justify-content-between'>
            {
              services?.map((i,j)=>{
              return(
                <div className='d-flex align-items-center service-item gap-15' key={j}>
                  <img src={i.image} alt='services' />
                  <div>
                    <h6>{i.title}</h6>
                    <p className='mb-0'>{i.tagline}</p>
                  </div>
                </div>
              )  
              })          
            }
            </div>
          </div>
        </div>
      
    </Container>

    <Container class1="homw-wrapper-2 py-5">
      <div className='row'>
        <div className='col-12'>
          <div className='categories d-flex flex-wrap justify-content-between align-items-center'>
           {
            categories?.map((i,j)=>{
              return(
                <div className='d-flex  align-items-center' key={j}>
                  <div>
                    <h6>{i.title}</h6>
                  </div>
                  <img src={i.image} alt='camera'/>
                </div>
              )

            })
            }
          </div>
        </div>
      </div>
    </Container>

    <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Featured Collection</h3>
          </div>
          <FeaturedProducts />
        
        </div>
    </Container>

    <Container class1='marquee-wrapper py-5'>
      <div className='row'>
        <div className='col-12'>
          <div className='marquee-inner-wrapper card-wrapper'>
            <Marquee>
              <div className='mx-4 w-25'>
                <img src='images/brand-01.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-02.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-03.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-04.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-05.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-06.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-07.png' alt='brand'/>
              </div>
              <div className='mx-4 w-25'>
                <img src='images/brand-08.png' alt='brand'/>
              </div>
              
            </Marquee>
          </div>
        </div>
      </div>
    </Container>
    
    <Container class1="famous-wrapper py-5 home-wrapper-2">
      <div className='row d-flex'>
        <div className='col-3'>
          <div className='famous-card position-relative d-flex'>
            <img src='images/famous1.jpg' className='img-fluid same-height' alt='famouse1'/>
            <div className='famuse-content position-absolute'>
              <h5>big Screen</h5>
              <h6> Smart watch series7</h6>
              <p> form $399 or $16.62/mo. for 24 mo.* </p>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='famous-card position-relative'>
            <img src='images/famous2.jpg' className='img-fluid same-height' alt='famouse1'/>
            <div className='famuse-content position-absolute'>
              <h5 className='text-dark'>smart phones</h5>
              <h6 className='text-dark'> Smarphone 13 pro</h6>
              <p className='text-dark'> 27-inch 5k retina display</p>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='famous-card position-relative'>
            <img src='images/famous3.jpg' className='img-fluid same-height' alt='famouse1'/>
            <div className='famuse-content position-absolute'>
              <h5>Wood Study </h5>
              <h6>indian armar L100 </h6>
              <p>Free Standing, Finish Color - Glossy, Pre-assembled</p>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='famous-card position-relative'>
            <img src='images/famous4.jpg' className='img-fluid same-height' alt='famouse1'/>
            <div className='famuse-content position-absolute'>
              <h5>sofas</h5>
              <h6>Fabric 3 Seater Sofa</h6>
              <p> Finish Color - Cream Brown, DIY Do-It-Yourself</p>
            </div>
          </div>
        </div>
          
      </div>

    </Container>

    <Container class1="special-wrapper py-5 home-wrapper-2">
      <div className='row'>
        <div className='col-12'>
          <h3 className='section-headinf'>Special Products</h3>
        </div>
      </div>
      <div className='row'>
        <SpecialProducts/>
      
      </div>
    </Container>

    
   
    
   </>
  )
}

export default Home
