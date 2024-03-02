import { useContext } from "react";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <header className="h-16 flex items-center shadow-sm z-50">
      <nav className="flex justify-between items-center w-9/12 mx-auto">
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
        {user ? (
          <div className="flex justify-center items-center ">
            <Link>
              <p className="text-black flex justify-center items-center "></p>
            </Link>

            <p className="text-black flex justify-center items-center ">
              <FaUser className="me-2" /> {user?.email}
            </p>
            <p
              onClick={handleLogout}
              className="ms-5 cursor-pointer flex justify-center items-center"
            >
              <FaSignOutAlt className="me-1 mt-1" />
              Logout
            </p>
          </div>
        ) : (
          <Link to="/login">
            <button className="bg-green-600 font-light text-sm px-5 py-1 rounded text-white">
              Login
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
