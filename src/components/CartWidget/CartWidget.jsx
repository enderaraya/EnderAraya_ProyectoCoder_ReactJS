import cart from './assets/cart.svg'

import React from 'react';

function CartWidget({ itemCount }) {
    return (
        <div className="cart-widget">
            <img src={cart} alt="Carrito de compras" style={{ width: '45px', height: '45px' }} />
            <span className="item-count">{itemCount}</span>
        </div>
    );
}

export default CartWidget;
