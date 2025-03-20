import Sidebar from "../Admin/Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { ModalProvider } from "../context/ModalProvider";

const PrivateLayout = () => {
  return (
    <ModalProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Outlet />
        </div>
      </div>
    </ModalProvider>
  );
};

export default PrivateLayout;
