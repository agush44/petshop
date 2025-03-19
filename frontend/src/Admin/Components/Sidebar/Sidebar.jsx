import { useState } from "react";
import PropTypes from "prop-types";
import {
  FiBarChart,
  FiDollarSign,
  FiHome,
  FiMonitor,
  FiShoppingCart,
  FiTag,
  FiUsers,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { TitleSection } from "./TitleSection";
import { Option } from "./Option";
import { ToggleClose } from "./ToggleClose";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

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
        />
        <Option
          Icon={FiTag}
          title="Categorías"
          selected={selected}
          setSelected={setSelected}
          open={open}
        />
        <Option
          Icon={FiBarChart}
          title="Analytics"
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
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

Sidebar.propTypes = {
  openModal: PropTypes.func,
};

export default Sidebar;
