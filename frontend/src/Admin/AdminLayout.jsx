import Sidebar from "./Components/Sidebar/Sidebar";

import PropTypes from "prop-types";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-container">
      <Sidebar />
      <div className="admin-content">{children}</div>
    </div>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node,
};

export default AdminLayout;
