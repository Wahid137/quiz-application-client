import { useContext } from "react";
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
          <p className="text-black">
            <FaUser />
            {user?.email}
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
