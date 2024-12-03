import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <header className='header-top py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p>Free shipping over $100 & Free Returns</p>
            </div>
            <div className='col-6'>
              <p className='text-end'>Hotline:
                <a className='text-white' href='tel:+91 6302469003'>+91 6302469003</a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center '>
            <div className='col-2'>
              <h3>
                <Link className='text-white'>Riya</Link>
              </h3>
            </div>
            <div className='col-5'>
              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2" />
                <span className="input-group-text"
                  id="basic-addon2"><BsSearch /></span>
              </div>

            </div>
            <div className='col-5'>
              <div className='header-upper-links d-flex align-items-center justify-content-between '>
                <div>
                  <Link to={"compare-products"} className='d-flex align-items-center gap-10'>
                    <img src='images/compare.svg' alt='compare' />
                    <p>
                      compare <br /> product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to={"wishlist"} className='d-flex align-items-center gap-10'>
                    <img src='images/Wishlist.svg' alt='wishlist' />
                    <p>
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link to={"loginpage"} className='d-flex align-items-center gap-10'>
                    <img src='images/user.svg' alt='user' />
                    <p>
                      Log in <br /> My Account
                    </p>
                  </Link>
                </div>
                <div className="link-item">
                  <Link to={"cart"} className='d-flex align-items-center gap-10'>
                    <img src='images/cart.svg' alt='cart'></img>
                    <div className='d-flex flex-column gap-10' >
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15 '>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/product'>Our Store</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </header>

    </>
  )
}

export default Header
