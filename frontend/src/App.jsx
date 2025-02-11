//import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Nav/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import ProductList from "./components/ProductList/ProductList.jsx";
import Cart from "./components/Cart/Cart.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="main-content">
        <Hero />
        <ProductList />
        <h2>Shopping Cart</h2>
        <Cart />
      </main>
      <footer className="footer">Este es el footer</footer>
    </>
  );
}

export default App;
