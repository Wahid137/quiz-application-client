import { Link, Outlet, ScrollRestoration } from "react-router-dom";

import { useContext } from "react";
import Header from "../components/Header";
import { AuthContext } from "../providers/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Header />
      <ScrollRestoration />
      <div className="drawer lg:drawer-open">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <label
          htmlFor="dashboard-drawer"
          className="btn btn-ghost drawer-button mt-0 ms-0 relative lg:hidden"
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
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side lg:bg-warning">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full text-base-content">
            {user && (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-accent hover:text-secondary"
                  >
                    Scoreboard
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
