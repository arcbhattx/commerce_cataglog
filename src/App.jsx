import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";

import ProductPage from "./pages/ProductPage";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element= {<Home/>} > </Route>
        <Route path="/product/:id" element={<ProductPage/>}> </Route>
      </Routes>
    </Router>
  )
}

export default App;