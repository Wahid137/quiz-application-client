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
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side  md:bg-white">
          <label
            htmlFor="dashboard-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-zinc-200 text-base-content">
            <>
              <li className="mb-5">
                <Link
                  to="/dashboard/scoreboard"
                  className="text-green-700 hover:text-secondary font-bold bg-[#FFF9DE]"
                >
                  Scoreboard
                </Link>
              </li>
              <li className="mb-5">
                <Link
                  to="/dashboard/quizcustomize"
                  className="text-green-700 hover:text-secondary font-bold bg-[#FFF9DE]"
                >
                  Quiz Customize
                </Link>
              </li>
            </>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
