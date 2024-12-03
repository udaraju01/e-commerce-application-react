import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import Wishlist from './pages/Wishlist';
import LoginPage from './pages/LoginPage';
import Forgotpassword from './pages/Forgotpassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndContions from './pages/TermsAndContions';
import SingleProduct from './pages/SingleProduct';
import AddToCart from './pages/AddToCart';
import CheckOut from './pages/CheckOut';
import ProductDetails from './components/ProductDetails';
import OurStoreSinglePage from './pages/OurStoreSinglePage';
import Products from './utils/products';
import { CartProvider } from './components/CartContext';
import { WishlistProvider } from './components/WishlistContext';
import { CompareProvider } from './components/compareContext';
import CompareProducts from './pages/compareProducts';
import { AuthProvider } from './components/AuthContext';



function App() {
  return (
    <>
      <AuthProvider>
      <CompareProvider>
          <WishlistProvider>
            <CartProvider>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='product' element={<OurStore products={Products} />} />
                    <Route path='product/:id' element={<SingleProduct />} />
                    <Route path='products/:id' element={<OurStoreSinglePage />} />
                    <Route path='blog' element={<Blog />} />
                    <Route path='/Blog/:id' element={<SingleBlog />} />
                    <Route path='compare-products' element={<CompareProducts />} />
                    <Route path='wishlist' element={<Wishlist />} />
                    <Route path='loginpage' element={<LoginPage />} />
                    <Route path='/forgot-password' element={<Forgotpassword />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/Reset-Password' element={<ResetPassword />} />
                    <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                    <Route path='/refund-policy' element={<RefundPolicy />} />
                    <Route path='/shipping-policy' element={<ShippingPolicy />} />
                    <Route path='/terms-and-contions' element={<TermsAndContions />} />
                    <Route path='/cart' element={<AddToCart />} />
                    <Route path='/CheckOut' element={<CheckOut />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </CartProvider>
          </WishlistProvider>
        </CompareProvider>
      </AuthProvider>
       
   

    </>
  );
}

export default App;
