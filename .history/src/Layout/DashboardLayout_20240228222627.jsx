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
      <div className="drawer lg:drawer-open">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side lg:bg-warning">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-base-content">

                        {
                            user &&
                            <>
                                <li><Link to="/dashboard/myorders" className='text-accent hover:text-secondary'>Scoreboard</Link></li>
                            </>

                        }




                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default DashboardLayout;
