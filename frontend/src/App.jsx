import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import FrontProductProvider from "./context/FrontProductProvider.jsx";
import BackProductProvider from "./context/BackProductProvider.jsx";
import PublicLayout from "./Layouts/PublicLayout.jsx";
import PrivateLayout from "./Layouts/PrivateLayout.jsx";
import ProtectedRoute from "./components/ProtectedRoute";
import CartProvider from "./context/CartProvider.jsx";
import { Toaster } from "react-hot-toast";
import "./App.css";

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
const RegisterForm = lazy(() => import("./Auth/RegisterForm.jsx"));

function App() {
  return (
    <FrontProductProvider>
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
                <PrivateLayout>
                  <Login />
                </PrivateLayout>
              }
            />

            <Route
              path="/admin/register"
              element={
                <PrivateLayout>
                  <RegisterForm />
                </PrivateLayout>
              }
            />

            {/* Rutas privadas protegidas */}
            <Route element={<ProtectedRoute />}>
              <Route
                path="/admin/*"
                element={
                  <BackProductProvider>
                    <PrivateLayout>
                      <Routes>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="products" element={<ProductsAdmin />} />
                        <Route path="orders" element={<OrdersAdmin />} />
                        <Route path="users" element={<UsersAdmin />} />
                      </Routes>
                    </PrivateLayout>
                  </BackProductProvider>
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </CartProvider>
    </FrontProductProvider>
  );
}

export default App;
