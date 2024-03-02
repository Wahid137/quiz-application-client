import { Link, Outlet, ScrollRestoration } from "react-router-dom";

import { useContext } from "react";
import Header from "../components/Header";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../providers/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

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
        <div className="drawer-side md:bg-opacity-0">
          <label
            htmlFor="dashboard-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-primary text-base-content">
            {isAdmin ? (
              <>
                <li className="mb-5">
                  <Link
                    to="/dashboard/quizcustomize"
                    className="text-white hover:text-white hover:bg-[#1D2844] font-bold bg-[black]"
                  >
                    Quiz Customize
                  </Link>
                </li>
                <li className="mb-5">
                  <Link
                    to="/dashboard/addquiz"
                    className="text-white hover:text-white hover:bg-[#1D2844] font-bold bg-[black]"
                  >
                    Add Quiz
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="mb-5">
                  <Link
                    to="/dashboard/addquiz"
                    className="text-white hover:text-white hover:bg-[#1D2844] font-bold bg-[black]"
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
