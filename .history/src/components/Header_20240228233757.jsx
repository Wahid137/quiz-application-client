import { useContext } from "react";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const menuItem = (
    <>
      {user?.uid ? (
        <>
          <Link to="/dashboard">
            <p className="text-black flex justify-center items-center">
              <MdDashboardCustomize className="me-1" /> Dashboard
            </p>
          </Link>

          <p className="text-black flex justify-center items-center ms-4">
            <FaUser className="me-1" /> {user?.email}
          </p>

          <p
            onClick={handleLogout}
            className="ms-4 cursor-pointer flex justify-center items-center"
          >
            <FaSignOutAlt className="me-1 mt-1" />
            Logout
          </p>
        </>
      ) : (
        <>
          <Link to="/login">
            <button className="bg-green-600 font-light text-sm px-5 py-1 rounded text-white">
              Login
            </button>
          </Link>
        </>
      )}
    </>
  );

  return (
    <div className="h-16 flex items-center shadow-sm z-50">
      <div className="navbar-start flex  items-center w-9/12 mx-auto">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}
          </ul>
        </div>
        <Link to="/">
          <div className="text-zinc-800 font-bold uppercase">
            <h1 className="text-lg">
              INSPIRED <span className="text-green-700">IT</span>
            </h1>
            <p className="text-[10px] font-normal capitalize -mt-1">
              Get ready to Quiz!
            </p>
          </div>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItem}</ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn btn-ghost lg:hidden"
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
          />
        </svg>
      </label>
    </div>
  );
};

export default Header;
