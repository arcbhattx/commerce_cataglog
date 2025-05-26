import {useState, useEffect} from "react";
import axios from "axios";
import ProductCard from "../assets/components/ProductCard";

//Displays a grid of all the products fetched from "https://cart-api.alexrodriguez.workers.dev/"

function Home(){

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://cart-api.alexrodriguez.workers.dev/products")
        .then(res => setProducts(res.data))
        .catch(err => console.error(err));
    }, []);

    return(
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> 
            <h1> Hi</h1>
            {products.map(product =>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default Home;


