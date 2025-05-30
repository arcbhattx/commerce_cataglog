import {useState, useEffect} from "react";
import axios from "axios";
import ProductCard from "../assets/components/ProductCard";
import Navbar from "../assets/components/Navbar";

//Displays a grid of all the products fetched from "https://cart-api.alexrodriguez.workers.dev/"

function Home(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://cart-api.alexrodriguez.workers.dev/products")
        .then(res => setProducts(res.data))
        .catch(err => console.error(err));
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            
            {/* Loads up the navbar */}
            <Navbar />

            {/* loads up Product Grid */}
            <div className="w-full max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
            
        </div>
    );
        
}

export default Home;


