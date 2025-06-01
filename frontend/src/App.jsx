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
import AuthLayout from "./Layouts/AuthLayout.jsx";
import "./App.css";

// Lazy Loading de Componentes
const Home = lazy(() => import("./pages/Home.jsx"));
const Shop = lazy(() => import("./pages/Shop/Shop.jsx"));
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

// Definimos arrays para las rutas
const publicRoutes = [
  { path: "/", Component: Home },
  { path: "/shop", Component: Shop },
  { path: "/shop/product/:productId", Component: ProductDetail },
  { path: "/alimentos", Component: Alimentos },
  { path: "/marcas", Component: Brands },
  { path: "/promociones", Component: Promociones },
];

const authRoutes = [
  { path: "/admin/login", Component: Login },
  { path: "/admin/register", Component: RegisterForm },
];

const privateRoutes = [
  { path: "/admin/dashboard", Component: Dashboard },
  { path: "/admin/products", Component: ProductsAdmin },
  { path: "/admin/orders", Component: OrdersAdmin },
  { path: "/admin/users", Component: UsersAdmin },
];

function App() {
  // Precarga los componentes de las páginas al iniciar la aplicación
  useEffect(() => {
    startTransition(() => {
      import("./pages/Home.jsx");
      import("./pages/Shop/Shop.jsx");
    });
  }, []);

  const renderRoute = ({ path, Component }) => (
    <Route
      key={path}
      path={path}
      element={
        <Suspense fallback={<Loader />}>
          <Component />
        </Suspense>
      }
    />
  );

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <FrontProductProvider>
        <CartProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <WhatsAppButton />
          <Routes>
            {/* Rutas públicas */}
            <Route element={<PublicLayout />}>
              {publicRoutes.map(renderRoute)}
            </Route>

            {/* Rutas de autenticación */}
            <Route element={<AuthLayout />}>
              {authRoutes.map(renderRoute)}
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
                {privateRoutes.map(renderRoute)}
              </Route>
            </Route>
          </Routes>
        </CartProvider>
      </FrontProductProvider>
    </ErrorBoundary>
  );
}

export default App;
