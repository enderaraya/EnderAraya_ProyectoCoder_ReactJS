import React from "react";
import classes from './Navbar.module.css'
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    console.log(classes)

    return(
        <header className={classes.header}>
            <h4> style={{ color: 'blue', fontSize: 12}} Ender Araya</h4>

            <nav>
                <a className='btn btn-primary'>Celulares</a>
                <a>Tablets</a>
                <a>Notebooks</a>
            </nav>
            <CartWidget/>
        </header>
    )

}

export default Navbar