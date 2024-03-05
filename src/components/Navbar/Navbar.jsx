import React from "react";
import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget";



function Navbar() {
    const [itemCount, setItemCount] = React.useState(4);

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
            <li><a href="/">Inicio</a></li>
            <li><a href="/acerca-de">Tienda</a></li>
            <li><a href="/contacto">Contacto</a></li>
            <li><a href="/contacto">FAQ</a></li>
            <li><a href="/contacto">Acerca de</a></li>
            </ul>
            <CartWidget itemCount={itemCount} /> {}
        </nav>
    );
}


export default Navbar