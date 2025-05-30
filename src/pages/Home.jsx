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

    return(

        <div className="flex flex-col">
            <Navbar/>

            <div className="grid grid-cols-4 gap-2"> 
                
                {products.map(product =>(
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div> 

        </div>
        
    )
}

export default Home;


