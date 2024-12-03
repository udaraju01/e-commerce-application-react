import React, { useState } from 'react';
import FeaturedCollection from '../utils/FeaturedCollectionData';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { LuIndianRupee } from "react-icons/lu";
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';
import { useCompare } from './compareContext';

const FeaturedProducts = ({ grid }) => {

  const [wishlistItems, setWishlistItems] = useState([]);
  const { addToWishlist, removeFromWishlist } = useWishlist();


  const handleWishlistClick = (product) => {
    setWishlistItems((prevItems) => {
      if (prevItems.includes(product.id)) {
        removeFromWishlist(product);
        return prevItems.filter(id => id !== product.id);
      } else {
        addToWishlist(product);
        return [...prevItems, product.id];
      }
    });
  };

  const { addToCart } = useCart();

  const { addToCompare } = useCompare();

  return (
    <div className="d-flex flex-wrap ">
      {FeaturedCollection.map((i, j) => (
        <div key={j} className={`col-${grid} col-sm-6 col-md-4 col-lg-3`}>
          <Link to={`/product/${i.id}`} className='product-card  position-relative'>
            <div className='wishlist-icon position-absolute'>
              <button
                className={`border-0 bg-transparent ${wishlistItems.includes(i.id) ? 'wishlist-active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                 
                  handleWishlistClick(i);
                }}>
                <img src='images/wish.svg' alt='wish' />
              </button>
            </div>
            <div className='product-image'>
              <img src={i.image} className='img-fluid' alt='productimage' />
            </div>
            <div className='product-details'>
              <h6 className='brand'>{i.brand}</h6>
              <h5 className='product-title'>{i.tagline}</h5>
              <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                value={i.rating}
                edit={false} />
              <h5 className={`${grid === 12 ? "d-block" : "d-none"}`}>Available offers</h5>
              <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C.
                Bank Offer 10% off up to ₹1,500 on Axis Bank Credit Card (incl. migrated ones) on orders of ₹4,990 and above T&C.
              </p>
              <p className='price'><LuIndianRupee />{i.price}</p>
            </div>
            <div className='action-bar position-absolute'>
              <div className='d-flex flex-column gap-15'>
                <button className='border-0 bg-transparent'
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCompare(i);
                  }}>
                  <img src='images/prodcompare.svg' alt='compare' />
                </button>
                <button className='border-0 bg-transparent'><img src='images/view.svg' alt='view' /></button>
                <button className='border-0 bg-transparent' onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart(i);
                }}>
                  <img src='images/add-cart.svg' alt='add to cart' />
                </button>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
