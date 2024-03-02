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
      <div className="drawer">
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
      <label
        htmlFor="my-drawer"
        className="btn btn-ghost drawer-button lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          ></path>
        </svg>
      </label>
    </div>
  );
};

export default DashboardLayout;
