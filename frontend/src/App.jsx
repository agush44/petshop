import { Routes, Route } from "react-router-dom";
import ProductProvider from "./context/ProductProvider.jsx";
import CartProvider from "./context/CartProvider.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Nav/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail.jsx";
import CartModal from "./pages/CartPage/CartModal.jsx";
import SearchBar from "./components/Header/SearchBar/SearchBar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Alimentos from "./pages/Alimentos.jsx";
import Brands from "./pages/Brands.jsx";
import Promociones from "./pages/Promociones.jsx";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Header />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />/
            <Route path="/shop" element={<Shop />} />
            <Route
              path="/shop/product/:productId"
              element={<ProductDetail />}
            />
            <Route path="/cart" element={<CartModal />} />
            <Route path="/shop" element={<SearchBar />} />
            <Route path="/alimentos" element={<Alimentos />} />
            <Route path="/promociones" element={<Promociones />} />
            <Route path="/marcas" element={<Brands />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
