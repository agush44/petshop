import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProductProvider from "./context/ProductProvider.jsx";
import CartProvider from "./context/CartProvider.jsx";
import { Toaster } from "react-hot-toast";
import "./App.css";

// Importar páginas
const Home = lazy(() => import("./pages/Home.jsx"));
const Shop = lazy(() => import("./pages/Shop/Shop.jsx"));
const ProductDetail = lazy(() =>
  import("./components/Products/ProductDetail/ProductDetail.jsx")
);
const Alimentos = lazy(() => import("./pages/Alimentos.jsx"));
const Brands = lazy(() => import("./pages/Brands.jsx"));
const Promociones = lazy(() => import("./pages/Promociones.jsx"));
const Login = lazy(() => import("./Auth/Login.jsx"));
const Dashboard = lazy(() => import("./Admin/Pages/Dashboard.jsx"));
const ProductsAdmin = lazy(() => import("./Admin/Pages/ProductsAdmin.jsx"));
const OrdersAdmin = lazy(() => import("./Admin/Pages/OrdersAdmin.jsx"));
const UsersAdmin = lazy(() => import("./Admin/Pages/UsersAdmin.jsx"));

import PublicLayout from "./Layouts/PublicLayout.jsx";
import PrivateLayout from "./Layouts/PrivateLayout.jsx";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Toaster position="top-center" reverseOrder={false} />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Rutas públicas */}
            <Route
              path="/"
              element={
                <PublicLayout>
                  <Home />
                </PublicLayout>
              }
            />
            <Route
              path="/shop"
              element={
                <PublicLayout>
                  <Shop />
                </PublicLayout>
              }
            />
            <Route
              path="/shop/product/:productId"
              element={
                <PublicLayout>
                  <ProductDetail />
                </PublicLayout>
              }
            />
            <Route
              path="/alimentos"
              element={
                <PublicLayout>
                  <Alimentos />
                </PublicLayout>
              }
            />
            <Route
              path="/marcas"
              element={
                <PublicLayout>
                  <Brands />
                </PublicLayout>
              }
            />
            <Route
              path="/promociones"
              element={
                <PublicLayout>
                  <Promociones />
                </PublicLayout>
              }
            />

            {/* Ruta pública para el login */}
            <Route
              path="/admin/login"
              element={
                <main className="main-content">
                  <Login />
                </main>
              }
            />

            {/* Rutas privadas */}
            <Route path="/admin" element={<Dashboard />}>
              <Route
                path="dashboard"
                element={
                  <PrivateLayout>
                    <Dashboard />
                  </PrivateLayout>
                }
              />
              <Route
                path="products"
                element={
                  <PrivateLayout>
                    <ProductsAdmin />
                  </PrivateLayout>
                }
              />
              <Route
                path="orders"
                element={
                  <PrivateLayout>
                    <OrdersAdmin />
                  </PrivateLayout>
                }
              />
              <Route
                path="users"
                element={
                  <PrivateLayout>
                    <UsersAdmin />
                  </PrivateLayout>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
