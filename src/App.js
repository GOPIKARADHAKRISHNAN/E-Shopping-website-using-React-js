
import './App.css';

import react from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Navbar from "./components/Navbar"

import ProductsContextProvider from "./Global/ProductsContext"
import CartContextProvider from "./Global/CartContext"
// import CartContextProvider from "./Global/CartContext"
import Products from "./components/Products"
import Cart from "./components/Cart"
import NotFound from "./components/NotFound"

function App() {
  return (
    <div>
      <ProductsContextProvider>
      <CartContextProvider>
      {/* <CartContextProvider>   */}
      <Router>
      <Navbar />       
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </Router>  
      </CartContextProvider>  
      {/* </CartContextProvider>                    */}
      </ProductsContextProvider>
    </div>
  );
}

export default App;
