import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { ArrowLeftIcon } from "@heroicons/react/24/outline"; // optional

function ProductPage() {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);

  // Fetch product data on component mount
  useEffect(() => {
    axios
      .get("https://cart-api.alexrodriguez.workers.dev/products")
      .then((res) => {
        const foundProduct = res.data.find((p) => p.id === id);
        setProduct(foundProduct);
      })
      .catch((err) => console.error(err));
  }, [id]);

  // Add product to localStorage cart
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
  };

  // Show loading state
  if (!product) {
    return (
      <div className="text-center mt-10 font-mono">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 font-mono">

      {/* Back Button */}
      <Link
        to="/"
        className="flex items-center mb-4 text-gray-600 hover:text-black transition"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-1" />
        <span>Back</span>
      </Link>

      {/* Product Display */}
      <div className="flex flex-col md:flex-row items-start gap-8">

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 object-cover border border-black"
        />

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-xl text-gray-700 font-semibold mb-2">
            ${product.price}
          </p>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <p className="text-sm uppercase text-gray-500 mb-4">
            Category: {product.category}
          </p>

          <button
            onClick={handleAddToCart}
            className="mt-4 px-6 py-2 bg-black text-white font-bold border-2 border-black hover:bg-white hover:text-black transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
