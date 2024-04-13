
import React, { useState, useContext } from "react";
import { Context } from "../../App";


const Alert = ({ message }) => {
    return (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'linear-gradient(to right, #5B5EF2, #B6B7F9)', padding: '20px', border: '1px solid black', borderRadius: '5px', zIndex: '1000' }}>
            <p>{message}</p>
        </div>
    );
};

const ItemCount = ({ initial = 1, stock, productName, onAdd,price }) => {
    const [count, setCount] = useState(initial);
    const [showAlert, setShowAlert] = useState(false);

    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1);
        }
    };

    const increment = () => {
        if (count < stock) {
            setCount(prev => prev + 1);
        }
    };

    const handleAddToCart = () => {
        const total = price * count;
        const message = `Haz agregado ${count} ${productName} con un valor total de $${total}`;
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 2000); // Oculta la alerta después de 2 segundos
        onAdd(count);
    };

    const value = useContext(Context)

    return (
        <article>
            <h3 style={{ display: 'flex', justifyContent: 'center', alignItems: 'space-between' }}>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
            <button onClick={increment}>+</button>
            {showAlert && <Alert message={`Haz agregado ${count} ${productName} con un valor total de $${price * count}`} />}
        </article>
    );
};

export default ItemCount;
