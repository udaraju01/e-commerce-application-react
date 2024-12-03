import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import { useCompare } from '../components/compareContext'


const CompareProduct = () => {
    const { compareItems, removeFromCompare} = useCompare();

    return (
        <>
            <Meta title={"Compare Products"}></Meta>
            <Breadcrumb title="Compare Products" />
            <Container class1='compare-product-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-3 d-flex gap-15'>
                        {compareItems.map((item, index) => (
                            <div className='compare-product-card position-relative'>
                                 <img
                                    src='images/cross.svg'
                                    alt='cross'
                                    className='position-absolute cross img-fluid'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        removeFromCompare(item.id);
                                      }}
                                />

                                <div className='product-compare'>
                                    <div className='product-card-image'>
                                        <img src={item.image} alt='watch' />
                                    </div>
                                    <div className='compare-product-details'>
                                        <h5 className='title'>
                                            {item.tagline}
                                        </h5>
                                        <h6 className='price mb-3 mt-3'>{item.price}</h6>
                                        <div className='product-dtails'>
                                            <h5>Brand</h5>
                                            <p className='text-dark'>{item.brand}</p>
                                        </div>
                                        <div className='product-dtails'>
                                            <h5>Avaiablity</h5>
                                            <p className='text-dark'>In Stock</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        }


                    </div>
                </div>
            </Container>

        </>
    )
}

export default CompareProduct