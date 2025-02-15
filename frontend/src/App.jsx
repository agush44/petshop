//import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductProvider from "./context/ProductProvider.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Nav/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import CartPage from "./pages/CartPage.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Header />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </ProductProvider>
  );
}

export default App;
