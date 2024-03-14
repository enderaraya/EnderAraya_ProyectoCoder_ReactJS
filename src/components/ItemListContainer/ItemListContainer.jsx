// ItemListContainer.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const location = useLocation();

    // Verificar si estamos en la página de la tienda (/category/:categoryId)
    const isStorePage = location.pathname.includes('/category');

    const categories = ['Electrónica', 'Ropa', 'Hogar', 'Deportes'];

    return (
        <div>
            <h1>{greeting}</h1>
            {isStorePage && ( // Mostrar las categorías solo en la página de la tienda
                <>
                    <h2>Categorías:</h2>
                    <ul>
                        {categories.map((category, index) => (
                            <li key={index}>
                                <Link to={`/category/${category.toLowerCase()}`}>{category}</Link>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default ItemListContainer;
