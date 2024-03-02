import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <header className="h-16 flex items-center shadow-sm">
      <nav className="flex justify-between items-center w-9/12 mx-auto">
        <div className="text-zinc-800 font-bold uppercase">
          <h1 className="text-lg">
            INSPIRED <span className="text-green-700">IT</span>
          </h1>
          <p className="text-[10px] font-normal capitalize -mt-1">
            Get ready to Quiz!
          </p>
        </div>
        {user ? (
          <p className="text-black flex justify-center items-center ">
            <FaUser className="me-2" /> {user?.email}
          </p>
<p>
<FaSignOutAlt />
</p>

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
