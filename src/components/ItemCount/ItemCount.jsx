import { useState } from "react";

const ItemCount = ({ initial = 1, stock, onAdd } ) => {
    const [count, setCount] = useState(initial)

    const decrement = () => {
        if(count > 1) {
            setCount(prev => -1)
        }
    }

    const increment = () => {
        if(count < stock) {
            setCount(prev => +1)
        }
    }

    return (
        <article>
            <h3 style={{display: 'flex', justifyContent: 'center', alignItems: 'space-between'}}>{count}</h3>
            <button onClick={decrement}>-</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button onClick={increment}>+</button>
        </article>
    )
}

export default ItemCount