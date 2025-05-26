import {Link} from "react-router-dom";

function ProductCard({product}) {
    return (

        <Link to={`/product/${product.id}`} className="bg-white p-4 rounded shadow hover:scale-105 transition">
            <img 
            src={product.image} 
            alt={product.name}
            className = "h-48 w-full object-cover rounded"
            >
            </img>

            <h2 className="mt-2 font-semibold text-lg">{product.name}</h2>
            <p className="text-blue-500 font-bold">${product.price}</p>

        </Link>
    )
}

export default ProductCard;