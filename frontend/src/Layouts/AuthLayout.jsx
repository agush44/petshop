import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="flex-grow">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
