import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';
import { useCompare } from './compareContext';

const ProductCards = ({ grid, searchTerm, products = [] }) => {
  let location = useLocation();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCompare } = useCompare();

  const [wishlistItems, setWishlistItems] = useState([]);

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

  const filteredProducts = products.filter((product) => {
    const name = product?.name ?? '';
    return name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="d-flex flex-wrap gap-10">
      {filteredProducts.map((i, j) => (
        <div key={j} className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"} col-${grid}`}>
          <div className='ourstore-product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
              <button
                className={`border-0 bg-transparent ${wishlistItems.includes(i.id) ? 'wishlist-active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleWishlistClick(i);
                }}
              >
                <img src='images/wish.svg' alt='wish' />
              </button>
            </div>
            <div className='product-image'>
              <Link to={`/products/${i.id}`} className='product-link'>
                <img src={i.image} className='img-fluid' alt='productimage' />
              </Link>
            </div>
            <div className='product-details'>
              <h6 className='brand'>{i.brand}</h6>
              <h5 className='product-title'>
                <Link to={`/products/${i.id}`}>{i.tagline}</Link>
              </h5>
              <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                value={i.rating}
                edit={false}
              />
              <p className={`price`}>INR {i.price}</p>
              <h5 className={` ${grid === 12 ? "d-block" : "d-none"}`}>Available offers</h5>
              <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C
                Bank Offer10% off up to ₹1,500 on Axis Bank Credit Card (incl. migrated ones) on orders of ₹4,990 and aboveT&C
              </p>
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
                <button className='border-0 bg-transparent'>
                  <img src='images/view.svg' alt='view' />
                </button>
                <button className='border-0 bg-transparent' onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart(i);
                }}>
                  <img src='images/add-cart.svg' alt='add to cart' />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
