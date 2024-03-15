import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
    const [itemCount, setItemCount] = React.useState(4);

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/category/electronica">Electronica</Link></li>
                <li><Link to='/category/hogar'>Hogar</Link></li>
                <li><Link to="/category/domotica">Domotica</Link></li>
                <li><Link to="/category/accesorios">Accesorios</Link></li>
            </ul>
            <CartWidget itemCount={itemCount} />
        </nav>
    );
}

export default Navbar;
