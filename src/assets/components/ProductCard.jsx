import {Link} from "react-router-dom";

function ProductCard({product}) {
    return (

    <div className="w-full max-w-sm mx-auto border border-gray shadow-sm hover:shadow-md mt-10">
      <Link to={`/product/${product.id}`} className="block text-center group">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover brightness-75 group-hover:brightness-100 transition duration-300"
        />
        <div className="p-4">
          <h2 className="mt-1 text-sm text-gray-800 truncate font-mono">{product.name}</h2>
          <p className="text-sm font-bold font-mono text-gray-800 mt-1">${product.price}</p>
        </div>
      </Link>
    </div>

    )
}

export default ProductCard;