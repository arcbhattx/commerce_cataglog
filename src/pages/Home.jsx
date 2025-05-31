import { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "../assets/components/ProductCard";
import Navbar from "../assets/components/Navbar";
import Filter from "../assets/components/Filter";

function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All Categories");

  // Fetch product list from the API
  useEffect(() => {
    axios
      .get("https://cart-api.alexrodriguez.workers.dev/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Update selected filter category
  const handleFilterChange = (selectedCategory) => {
    setCategory(selectedCategory);
  };

  // Apply category filter
  let filteredProducts = products;

  if (category !== "All Categories") {
    filteredProducts = products.filter((product) =>
      product.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  return (
    <div className="flex flex-col min-h-screen">

      {/* Top Navbar */}
      <Navbar />

      {/* Filter Dropdown */}
      <Filter onFilterChange={handleFilterChange} />

      {/* Product Grid */}
      <div className="w-full max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
