// ItemDetailContainer.jsx

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const { itemId } = useParams();

    useEffect(() => {
        // Aquí puedes realizar acciones cuando cambia el ID del producto, como obtener detalles del producto
        console.log("ID del producto:", itemId);
    }, [itemId]);

    return (
        <div>
            <h2>Detalles del producto</h2>
            {/* Aquí puedes mostrar los detalles del producto */}
        </div>
    );
}

export default ItemDetailContainer;
