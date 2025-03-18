import PropTypes from "prop-types";

export default function PrivateLayout({ children }) {
  return <main className="main-content">{children}</main>;
}

PrivateLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
