import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Meta from '../components/Meta';
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import { useCart } from '../components/CartContext';


const AddToCart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemTotal = parseFloat(item.price) * parseInt(item.quantity, 10);
      return total + (isNaN(itemTotal) ? 0 : itemTotal);
    }, 0);
  };

  return (
    <>
      <Meta title={"Add To Cart"} />
      <Breadcrumb title="Add To Cart" />
      <Container class1='cart-wrapper home-wrapper-2 py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='cart-header d-flex justify-content-between align-items-center'>
              <h4 className='cart-col-1'>Product</h4>
              <h4 className='cart-col-2'>Price</h4>
              <h4 className='cart-col-3'>Quantity</h4>
              <h4 className='cart-col-4'>Total</h4>
            </div>
            {cartItems.map((item, index) => {
              const itemTotal = parseFloat(item.price) * parseInt(item.quantity, 10);
              return (
                <div key={index} className='cart-data d-flex py-3 mb-2 justify-content-between align-items-center'>
                  <div className='cart-col-1 gap-15 d-flex align-items-center'>
                    <div className='cart-img'>
                      <img src={item.image} className='img-fluid' alt='product' />
                    </div>
                    <div className='w-75'>
                      <p>{item.name}</p>
                    </div>
                  </div>
                  <div className='cart-col-2'>
                    <h5 className='price'>INR {item.price}</h5>
                  </div>
                  <div className='cart-col-3 d-flex align-items-center gap-15'>
                    <div>
                      <input 
                        type='number' 
                        className='form-control'
                        min={1}
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                      />
                    </div>
                    <div>
                      <AiOutlineDelete className='text-danger' onClick={() => removeFromCart(item.id)} />
                    </div>
                  </div>
                  <div className='cart-col-4'>
                    <h5 className='price'>INR {isNaN(itemTotal) ? 0 : itemTotal.toFixed(2)}</h5>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='col-12 py-2 mt-4'>
            <div className='d-flex justify-content-between align-items-baseline'>
              <Link to={"/product"} className="button">Continue to Shopping</Link>
              <div className='d-flex flex-column align-items-end'>
                <h4>Subtotal: INR {calculateTotal().toFixed(2)}</h4>
                <p className='text-dark'>Taxes and shipping calculated at checkout</p>
                <Link to={"/CheckOut"} className='button'>Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default AddToCart;
