import Header from "../components/Header/Header.jsx";
import Navbar from "../components/Nav/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import PropTypes from "prop-types";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
}

PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
