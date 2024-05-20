import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore"; // Cambiar importación a getDoc para un solo documento
import { db } from '../../firebase/config';
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount"; // Asegúrate de que la ruta de importación sea correcta

const ItemDetailContainer = ({ greeting }) => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const docRef = doc(db, "producto", id); // Obtener la referencia del documento por ID
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setProduct(docSnap.data()); // Guardar datos del producto en el estado
            } else {
                console.log("No such document!");
            }
        };

        fetchProduct().catch((error) => {
            console.error("Error fetching product data: ", error);
        });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <main>
            <h1>Detalle del producto</h1>
            <article style={{ padding: '30px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'space-between' }}>
                    <img src={product.img} width={500} alt={product.name} />
                </div>
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
                <h4>Categoria: {product.category}</h4>
                <h4>Descripcion: {product.description}</h4>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'space-between' }}>
                    <ItemCount stock={product.stock} productName={product.name} price={product.price} />
                </div>
            </article>
        </main>
    );
};

export default ItemDetailContainer;