import { useEffect, useState } from "react"
import { getProductById, getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = ({greeting}) => {
    const [products, setProducts] = useState(null)

    const {itemId} = useParams()
    
    useEffect(() => {
        getProductById(itemId)
        .then(result => {  
            setProducts(result)
        })
    }, [itemId])
    
    return (
        <main>
            <h1>Detalle del producto</h1>
            <ItemDetail {...products}/>
        </main>
    )
}

export default ItemDetailContainer