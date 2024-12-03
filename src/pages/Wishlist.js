import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Meta from '../components/Meta'
import Container from '../components/Container'
import { useWishlist } from '../components/WishlistContext'


const Wishlist = () => {
    const { wishlistItems , removeFromWishlist} = useWishlist();

    return (
        <>
            <Meta title={"Wishlist"}></Meta>
            <Breadcrumb title="Wishlist" />
            <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    {
                        wishlistItems.map((item, index) => (
                            <div className='col-3'>
                                <div className='wishlist-card position-relative'>
                                    <img
                                        src='images/cross.svg'
                                        alt='cross'
                                        className='position-absolute cross img-fluid'
                                        onClick={() => removeFromWishlist(item.id)}
                                    />
                                    <div className='wishlist-card-image'>
                                        <img
                                            src={item.image}
                                            className='img-fluid w-100'
                                            alt='watch'
                                        />
                                    </div>
                                    <div className='py-3  px-3'>
                                        <h5 className='title'>
                                            {item.tagline}
                                        </h5>
                                        <h6 className='price '>{item.price}</h6>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Container>

        </>
    )
}

export default Wishlist
