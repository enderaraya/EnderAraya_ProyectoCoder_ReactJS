// CartContext.js
import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [itemCount, setItemCount] = useState(0);

    const updateItemCount = (count) => {
        setItemCount(count);
    };

    return (
        <CartContext.Provider value={{ itemCount, updateItemCount }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
