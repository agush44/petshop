import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect, startTransition } from "react";
import FrontProductProvider from "./context/FrontProductProvider.jsx";
import BackProductProvider from "./context/BackProductProvider.jsx";
import PublicLayout from "./Layouts/PublicLayout.jsx";
import PrivateLayout from "./Layouts/PrivateLayout.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import CartProvider from "./context/CartProvider.jsx";
import { Toaster } from "react-hot-toast";
import ErrorFallback from "./components/ErrorBoundary.jsx";
import { ErrorBoundary } from "react-error-boundary";
import Loader from "./UI/Loader.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import "./App.css";
import AuthLayout from "./Layouts/AuthLayout.jsx";

// Lazy Loading de Componentes
const Home = lazy(() =>
  import(/* webpackChunkName: "home" */ "./pages/Home.jsx")
);
const Shop = lazy(() =>
  import(/* webpackChunkName: "shop" */ "./pages/Shop/Shop.jsx")
);
const ProductDetail = lazy(() =>
  import("./components/Products/ProductDetail/ProductDetail.jsx")
);
const Alimentos = lazy(() => import("./pages/Alimentos.jsx"));
const Brands = lazy(() => import("./pages/Brands.jsx"));
const Promociones = lazy(() => import("./pages/Promociones.jsx"));
const Login = lazy(() => import("./Auth/Login.jsx"));
const RegisterForm = lazy(() => import("./Auth/RegisterForm.jsx"));
const Dashboard = lazy(() => import("./Admin/Pages/Dashboard.jsx"));
const ProductsAdmin = lazy(() => import("./Admin/Pages/ProductsAdmin.jsx"));
const OrdersAdmin = lazy(() => import("./Admin/Pages/OrdersAdmin.jsx"));
const UsersAdmin = lazy(() => import("./Admin/Pages/UsersAdmin.jsx"));

function App() {
  useEffect(() => {
    startTransition(() => {
      import("./pages/Home.jsx");
      import("./pages/Shop/Shop.jsx");
    });
  }, []);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <FrontProductProvider>
        <CartProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <WhatsAppButton />
          <Routes>
            {/* Rutas públicas */}
            <Route element={<PublicLayout />}>
              <Route
                path="/"
                element={
                  <Suspense fallback={<Loader />}>
                    <Home />
                  </Suspense>
                }
              />
              <Route
                path="/shop"
                element={
                  <Suspense fallback={<Loader />}>
                    <Shop />
                  </Suspense>
                }
              />
              <Route
                path="/shop/product/:productId"
                element={
                  <Suspense fallback={<Loader />}>
                    <ProductDetail />
                  </Suspense>
                }
              />
              <Route
                path="/alimentos"
                element={
                  <Suspense fallback={<Loader />}>
                    <Alimentos />
                  </Suspense>
                }
              />
              <Route
                path="/marcas"
                element={
                  <Suspense fallback={<Loader />}>
                    <Brands />
                  </Suspense>
                }
              />
              <Route
                path="/promociones"
                element={
                  <Suspense fallback={<Loader />}>
                    <Promociones />
                  </Suspense>
                }
              />
            </Route>

            {/* Rutas de autenticación */}
            <Route element={<AuthLayout />}>
              <Route
                path="/admin/login"
                element={
                  <Suspense fallback={<Loader />}>
                    <Login />
                  </Suspense>
                }
              />
              <Route
                path="/admin/register"
                element={
                  <Suspense fallback={<Loader />}>
                    <RegisterForm />
                  </Suspense>
                }
              />
            </Route>

            {/* Rutas privadas protegidas */}
            <Route element={<ProtectedRoute />}>
              <Route
                element={
                  <BackProductProvider>
                    <PrivateLayout />
                  </BackProductProvider>
                }
              >
                <Route
                  path="/admin/dashboard"
                  element={
                    <Suspense fallback={<Loader />}>
                      <Dashboard />
                    </Suspense>
                  }
                />
                <Route
                  path="/admin/products"
                  element={
                    <Suspense fallback={<Loader />}>
                      <ProductsAdmin />
                    </Suspense>
                  }
                />
                <Route
                  path="/admin/orders"
                  element={
                    <Suspense fallback={<Loader />}>
                      <OrdersAdmin />
                    </Suspense>
                  }
                />
                <Route
                  path="/admin/users"
                  element={
                    <Suspense fallback={<Loader />}>
                      <UsersAdmin />
                    </Suspense>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </CartProvider>
      </FrontProductProvider>
    </ErrorBoundary>
  );
}

export default App;
