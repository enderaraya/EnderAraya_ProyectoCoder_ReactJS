import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function Navbar() {
    const [itemCount, setItemCount] = React.useState(4);

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/category/tienda">Tienda</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/acerca-de">Acerca de</Link></li>
            </ul>
            <CartWidget itemCount={itemCount} />
        </nav>
    );
}

export default Navbar;
