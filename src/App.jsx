import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import Item from "./components/Item";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";



function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    commerce.products.list().then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <Router>
      <div>
        <NavBar/>
      </div>
      <div>
        {products.map((product) => (
          <Item key={product.id} {...product} />
        ))}
      </div>
      <div>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
