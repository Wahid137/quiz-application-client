import React, { useContext } from "react";
import { Link, Outlet, ScrollRestoration } from "react-router-dom";

import { AuthContext } from "../Context/AuthProvider";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import useAdmin from "../hooks/useAdmin";
import useBuyer from "../hooks/useBuyer";
import useSeller from "../hooks/useSeller";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);

  return (
    <div>
      <Navbar></Navbar>
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
        <div className="drawer-side lg:bg-warning">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full text-base-content">
            {isBuyer && (
              <>
                <li>
                  <Link
                    to="/dashboard/myorders"
                    className="text-accent hover:text-secondary"
                  >
                    My Orders
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
