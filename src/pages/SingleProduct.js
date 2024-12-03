import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import FeaturedCollection from '../utils/FeaturedCollectionData';

import { Link, useParams } from 'react-router-dom';
import ReactImageZoom from 'react-image-zoom';
import Colors from '../components/Colors';
import { BiGitCompare } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import Container from '../components/Container';
import { useCart } from '../components/CartContext';

const SingleProduct = () => {
const [orderProduct,setOrderProduct] =useState(true);
const { addToCart } = useCart();


    const { id } = useParams();
    const product = FeaturedCollection.find(item => item.id === parseInt(id));

    if (!product) return <p>Product not found</p>;

    const props = { width: 600, height: 600, zoomWidth: 500, img: product.image };

    return (
        <>
        <Meta title={"Product Names"}></Meta>
        <Breadcrumb title="Product Names"/>
        <Container class1='main-product-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image '>
                            <div>
                            <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className='other-products-images d-flex flex-wrap gap-15'>
                            <div>
                                <img src={product.image1} alt='watch' className='img-fluid'/>
                            </div>
                            <div>
                                <img src={product.image2} alt='watch' className='img-fluid'/>
                            </div>
                            <div>
                                <img src={product.image3} alt='watch' className='img-fluid'/>
                            </div>
                            <div>
                                <img src={product.image4} alt='watch' className='img-fluid'/>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>{product.tagline}</h3>
                            </div>
                            <div className='border-bottom py-3'>
                                <p className='price'>{product.price}</p>
                            
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars 
                                        count={5} 
                                        size={24} 
                                        activeColor="#ffd700"
                                        value={product.rating}
                                        edit={false} />
                                    <p className='text-dark mb-0'>(2 reviews)</p>
                                </div>
                                <a className='review-btn' href='#review'>Write A Review</a>
                            </div>
                            <div className='border-bottom py-3'>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Type :</h3>
                                    <p className='product-data text-dark'>{product.Name}</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Brand :</h3>
                                    <p className='product-data text-dark'>{product.brand}</p>
                                </div>
                              
                                <div className='d-flex gap-10 align-items-center my-2'>
                                    <h3 className='product-heading'>Availablity :</h3>
                                    <p className='product-data text-dark'>In Stock</p>
                                </div>
                                <div className='d-flex gap-10 align-items-center mt-2 mb-3'>
                                    <h3 className='product-heading'>Size :</h3>
                                    <div className='d-flex flex-wrap gap-10'>
                                        <div className='badge border text-dark border-1 bg-white border-secondary'>32</div>
                                        <div className='badge border text-dark border-1 bg-white border-secondary'>43</div>
                                        <div className='badge border text-dark border-1 bg-white border-secondary'>24</div>
                                        <div className='badge border text-dark border-1 bg-white border-secondary'>55</div>
                                    </div>

                                </div>
                                <div className='d-flex gap-10 align-items-center mt-2 mb-3'>
                                    <h3 className='product-heading'>Color :</h3>
                                    <Colors />
                                </div>
                                <div className='d-flex gap-1 flex-row  align-items-center mt-2 mb-3'>
                                    <h3 className='product-heading'>Quantity :</h3>
                                    <div className='quanitiy'>
                                      
                                    <input 
                                     type="number" 
                                     id="quantity" 
                                     name="quantity"
                                     value={1} 
                                     min={1}
                                     max={10}
                                     className='form-control'
                                     style={{ width:"70px"}}
                                    />
                                    </div>
                                    <div>
                                        <div className=' d-flex justify-content-center  gap-30 ms-5 mb-4 align-items-center'>
                                            <button className='button border-0'
                                                    type='submit'
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        addToCart(product);
                                                      }}> Add to cart
                                                      </button>
                                            <button to={"/signup"} className='button signup'>Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <a href='raju'><BiGitCompare className='fs-5 me-2' />Add to comparea</a>
                                    </div>
                                    <div>
                                        <a href='raju'> <CiHeart className='fs-5 me-2' />Add to Wishlish</a>
                                    </div>
                                </div>
                                <div className='d-flex gap-10 flex-column my-3'>
                                    <h3 className='product-heading'>Delivery:</h3>
                                    <p className='product-data text-dark'>Delivery by19 Oct, Saturday|Free₹40?
                                    Installation & Demo by20 Oct, Sunday
                                    </p>
                                </div>
                               

                            </div>
                        </div>
                    </div>
                </div>
        </Container>
        <Container className='descripstion-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                <h4>Description</h4>
                    <div className='bg-white p-3'>
                        
                        <p className='text-dark'>
                        to be something that you cannot describe 
                        accurately because of its great size, quality, 
                        or level: Her beauty is beyond description. See 
                        more. More examplesFewer
                        accurately because of its great size, quality, 
                        or level: Her beauty is beyond description. See 
                        more. More examplesFewer 
                        examples. A witness gave a detailed
                        </p>
                    </div>
                </div>
            </div>
        </Container>
        <Container class1='reviews-wrapper home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                    <h3 id='review'>Reviews</h3>
                        <div className='review-inner-wrapper'>
                           
                            <div className=' review-head d-flex justify-content-between align-items-end'>
                                    <div>
                                        <h4 className='mb-2'>Customer Reviews</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars 
                                                count={5} 
                                                size={24} 
                                                activeColor="#ffd700"
                                                value={3}
                                                edit={false} />
                                            <p className='text-dark mb-0'>Based on 2 reviews</p>
                                        </div>
                                    </div>
                                <div > 
                                {
                                        setOrderProduct &&
                                        <div>
                                            <Link to={""} className='text-dark text-decoration-underline mb-2'>write a Review</Link>
                                        
                                        </div>
                                    } 
                                </div>
                            </div>
                            <div id='review' className='review-form py-4'>
                                <h6>Write a Review</h6>
                                <form action='' className='d-flex review-form flex-column gap-15'>
                                    <div>
                                        <lable>Name</lable>
                                        <input type='text' className='form-control' placeholder='Enter your Name'/>
                                    </div>
                                    <div>
                                        <lable>Email</lable>
                                        <input type='text' className='form-control' placeholder='Enter your Email'/>
                                    </div>
                                    <div>
                                        <lable>Rating</lable>
                                        <ReactStars 
                                            count={5} 
                                            size={24} 
                                            activeColor="#ffd700"
                                            value={3}
                                            edit={true} />
                                    </div>
                                    <div>
                                        <lable>Review Title</lable>
                                        <input type='text' className='form-control' placeholder='Give your review a title'/>
                                    </div>
                                    <div>
                                        <lable>Body of Review(1500)</lable>
                                        <textarea name='' id='' cols={30} className='w-100 form-control' rows={4} placeholder='Write your Comments here'></textarea>
                                    </div>
                                    <div className='d-flex justify-content-end py-4'>
                                    <button className='button border-0 '>Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className='reviews mt-4'>
                                <div className='review'>
                                <div className='d-flex gap-10 align-items-center'>
                                    <h6 className='mb-0'>raju</h6>
                                    <ReactStars 
                                        count={5} 
                                        size={24} 
                                        activeColor="#ffd700"
                                        value={3}
                                        edit={false}
                                    />
                                </div>
                                <p >More examplesFewer
                                    accurately because of its great size, quality, 
                                    or level: Her beauty is beyond description. See 
                                    more. More examplesFe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
      
    </>
  )
}

export default SingleProduct
