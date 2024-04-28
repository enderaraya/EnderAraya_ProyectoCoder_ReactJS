import { useState, useEffect } from 'react';
import React from 'react';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/config';
import { Link, useLocation, useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import '../../App.css'

const ItemListContainer = ({ greeting }) => {


    const [products, setProducts] = useState([])

    const category = useParams().category;
    useEffect(() => {

        const productosRef = collection(db, "producto");

        const q = category ? query(productosRef, where("category", "==", category)) : productosRef;
        getDocs(q)
            .then((resp) => {
                    
                    
                setProducts(

                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id}
                    })
                )
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
