import {Link} from "react-router-dom";

function ProductCard({product}) {
    return (

  <div className="p-0 border border-gray shadow-sm hover:shadow-md mt-10">
    <Link to={`/product/${product.id}`} className="block text-center group">
      <img 
        src={product.image} 
        alt={product.name}
        className="h-[400px] w-[300px] object-cover mx-auto brightness-75 group-hover:brightness-100 transition duration-300"
      />
      <h2 className="mt-3 text-sm text-gray-800 truncate font-mono">{product.name}</h2>
      <p className="text-sm font-bold font-mono text-gray-800 mt-1">${product.price}</p>
    </Link>
  </div>
    )
}

export default ProductCard;