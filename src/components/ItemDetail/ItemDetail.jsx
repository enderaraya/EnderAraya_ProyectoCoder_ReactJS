import ItemCount from "../ItemCount/ItemCount"
import '../../App.css'

const ItemDetail = ({id, name, category, price, img, description, stock }) => { 
    return (
        <article style={{padding: '30px'}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'space-between'}}>
                <img src={img} width={500}/>
            </div>
            <h3>{name}</h3>
            <h4>${price}</h4>
            <h4>categoria: {category}</h4>
            <h4>Descripcion: {description}</h4>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'space-between'}}>
                <ItemCount stock={stock } productName={name} price={price}/>
            </div>
        </article>
    )
}

export default ItemDetail