import { Link } from "react-router-dom"
const Item = ({id, name, category, price, img }) => { 
    return (
        <article>
            <h3>{name}</h3>
            <img src={img} width={300}/>
            <h4>${price}</h4>
            <Link to={`/item/${id}`}>ver detalle</Link>
        </article>
    )
}

export default Item