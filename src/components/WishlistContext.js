
import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => [...prevItems, item]);
  };
  const removeFromWishlist = (id) => { setWishlistItems(wishlistItems.filter(item => item.id !== id));}

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist,removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
