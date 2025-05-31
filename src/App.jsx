import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage"; // A page for each product
import CartPage from "./pages/CartPage"; //Cart page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
