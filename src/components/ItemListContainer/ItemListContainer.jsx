// ItemListContainer.jsx
import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import '../../App.css'

const ItemListContainer = ({ greeting }) => {


    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(result => {
                setProducts(result)
            })

    })


    return (
        <div>
            <main>
                <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{greeting}</h1>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'space-between'}}>
                    <ItemList products={products}/>
                </div>
                
            </main>
        </div>
    );
}

export default ItemListContainer;
