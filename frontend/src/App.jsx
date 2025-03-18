import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react"; // Importamos lazy y Suspense
import ProductProvider from "./context/ProductProvider.jsx";
import CartProvider from "./context/CartProvider.jsx";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Nav/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Toaster } from "react-hot-toast";
import "./App.css";

// Carga perezosa de los componentes
const Home = lazy(() => import("./pages/Home.jsx"));
const Shop = lazy(() => import("./pages/Shop/Shop.jsx"));
const ProductDetail = lazy(() =>
  import("./components/Products/ProductDetail/ProductDetail.jsx")
);
const Alimentos = lazy(() => import("./pages/Alimentos.jsx"));
const Brands = lazy(() => import("./pages/Brands.jsx"));
const Promociones = lazy(() => import("./pages/Promociones.jsx"));
const Dashboard = lazy(() => import("./Admin/Pages/Dashboard.jsx"));
const ProductsAdmin = lazy(() => import("./Admin/Pages/ProductsAdmin.jsx"));
const OrdersAdmin = lazy(() => import("./Admin/Pages/OrdersAdmin.jsx"));
const UsersAdmin = lazy(() => import("./Admin/Pages/UsersAdmin.jsx"));
const Login = lazy(() => import("./Auth/Login.jsx"));
const PrivateRoute = lazy(() => import("./Admin/PrivateRoute.jsx"));
const AdminLayout = lazy(() => import("./Admin/AdminLayout.jsx"));

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Toaster position="top-center" reverseOrder={false} />

        <Header />
        <Navbar />

        <Suspense fallback={<div>Loading...</div>}>
          <main className="main-content">
            <Routes>
              {/* Rutas públicas */}
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route
                path="/shop/product/:productId"
                element={<ProductDetail />}
              />
              <Route path="/alimentos" element={<Alimentos />} />
              <Route path="/promociones" element={<Promociones />} />
              <Route path="/marcas" element={<Brands />} />

              <Route path="/dashboard" element={<Dashboard />} />

              {/* Ruta pública para el login del admin */}
              <Route path="/admin/login" element={<Login />} />

              {/* Rutas protegidas para el panel de administración */}
              <Route path="/admin" element={<PrivateRoute />}>
                <Route
                  path="dashboard"
                  element={
                    <AdminLayout>
                      <Dashboard />
                    </AdminLayout>
                  }
                />
                <Route
                  path="products"
                  element={
                    <AdminLayout>
                      <ProductsAdmin />
                    </AdminLayout>
                  }
                />
                <Route
                  path="orders"
                  element={
                    <AdminLayout>
                      <OrdersAdmin />
                    </AdminLayout>
                  }
                />
                <Route
                  path="users"
                  element={
                    <AdminLayout>
                      <UsersAdmin />
                    </AdminLayout>
                  }
                />
              </Route>
            </Routes>
          </main>
        </Suspense>

        <Footer />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
