import Header from "../components/Header/Header.jsx";
import Navbar from "../components/Nav/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
