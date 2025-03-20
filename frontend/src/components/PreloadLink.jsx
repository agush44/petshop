import { Link } from "react-router-dom";
import { useCallback } from "react";
import PropTypes from "prop-types";

export default function PreloadLink({ to, component, children, ...props }) {
  const preload = useCallback(() => {
    component();
  }, [component]);

  return (
    <Link to={to} onMouseEnter={preload} onTouchStart={preload} {...props}>
      {children}
    </Link>
  );
}

PreloadLink.propTypes = {
  to: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
