import { useState } from "react";
import PropTypes from "prop-types";
import {
  FiDollarSign,
  FiHome,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiUsers,
  FiLogOut,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { TitleSection } from "./TitleSection";
import { Option } from "./Option";
import { ToggleClose } from "./ToggleClose";
import { logoutUser } from "../../../services/authApi";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser(() => navigate("/admin/login"));
  };

  const handleProducts = () => {
    navigate("/admin/products");
  };

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <TitleSection open={open} />

      <div className="space-y-1">
        <Option
          Icon={FiHome}
          title="Dashboard"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiDollarSign}
          title="Ventas"
          selected={selected}
          setSelected={setSelected}
          open={open}
          notifs={3}
        />
        <Option
          Icon={FiMonitor}
          title="Ver Sitio"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiShoppingCart}
          title="Productos"
          selected={selected}
          setSelected={setSelected}
          open={open}
          onClick={handleProducts}
        />
        <Option
          Icon={FiTag}
          title="Categorías"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />

        <Option
          Icon={FiUsers}
          title="Usuarios"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />

        <Option
          Icon={FiLogOut}
          title="Cerrar Sesión"
          selected={selected}
          setSelected={setSelected}
          open={open}
          onClick={handleLogout}
        />
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

Sidebar.propTypes = {
  openModal: PropTypes.func,
};

export default Sidebar;
