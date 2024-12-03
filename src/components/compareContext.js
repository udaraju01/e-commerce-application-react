import React, { createContext, useContext, useState } from 'react';

const CompareContext = createContext();

export const useCompare = () => useContext(CompareContext);

export const CompareProvider = ({ children }) => {
    const [compareItems, setCompareItems] = useState([]);

    const addToCompare = (product) => {
        if (!compareItems.find(item => item.id === product.id)) {
            setCompareItems([...compareItems, product]);
        }
    };

    const removeFromCompare = (id) => {
        setCompareItems(compareItems.filter(item => item.id !== id));
    };

    return (
        <CompareContext.Provider value={{ compareItems, addToCompare, removeFromCompare }}>
            {children}
        </CompareContext.Provider>
    );
};
