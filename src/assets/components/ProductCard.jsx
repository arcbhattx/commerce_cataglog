import {Link} from "react-router-dom";

function ProductCard({product}) {
    return (

<div className="p-0 border border-gray rounded-2xl shadow-sm hover:shadow-md ">
  <Link to={`/product/${product.id}`} className="block text-center">
    <img 
      src={product.image} 
      alt={product.name}
      className="h-[200px] w-[300px] object-cover rounded-xl mx-auto"
    />
    <h2 className="mt-3 text-sm font-semibold text-gray-800 truncate">{product.name}</h2>
    <p className="text-sm text-gray-500 font-medium mt-1">${product.price}</p>
  </Link>
</div>

    )
}

export default ProductCard;