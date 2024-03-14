import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    setLoginError("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  return (
    <div>
      <div className="min-h-screen pb-6 px-2 md:px-0">
        <div className="bg-secondary max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <div>
            <h3 className="font-bold text-2xl">Login</h3>
            <p className="text-gray-600 pt-2">Sign in to your account.</p>
          </div>

          <di className="mt-4">
            <p className="text-gray-600 pt-2">
              Admin Email : wahidahmed5037@gmail.com
            </p>
            <p className="text-gray-600">Admin Pass: 123456</p>
            <p className="text-red-600">don't misuse the power of admin</p>
          </di>

          <div className="mt-10">
            <form onSubmit={handleLogin} className="flex flex-col">
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold ml-3"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-accent transition duration-500 px-3 pb-3"
                />
              </div>
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold ml-3"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-accent transition duration-500 px-3 pb-3"
                />
              </div>

              <button
                className="bg-accent hover:bg-slate-600 text-slate-100 dark:bg-primary dark:text-accent px-10 py-2 rounded float-right flex items-center gap-2 justify-center"
                type="submit"
              >
                Sign In
              </button>
            </form>
            <div>
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
            <div className="max-w-lg mx-auto text-center mt-12 mb-6">
              <p>
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="font-bold hover:underline hover:text-default"
                >
                  Sign up
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
