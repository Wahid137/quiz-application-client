import { Outlet, ScrollRestoration } from "react-router-dom";

import { useContext } from "react";
import Header from "../components/Header";
import { AuthContext } from "../providers/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <ScrollRestoration />
      <div className="drawer min-h-full">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle hidden lg:checked"
        />
        <div className="drawer-content">
          <Outlet />
        </div>

        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content lg:static lg:h-full">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
