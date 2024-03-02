import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">
        <div className="bg-gray-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <div>
            <h3 className="font-bold text-2xl">Sign Up</h3>
            <p className="text-gray-600 pt-2">Create An Account</p>
          </div>

          <div className="mt-10">
            <form className="flex flex-col">
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold ml-3"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-green-600 transition duration-500 px-3 pb-3"
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
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-green-600 transition duration-500 px-3 pb-3"
                />
              </div>

              <button
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <div className="max-w-lg mx-auto text-center mt-12 mb-6">
              <p>
                Already have an account? Please{" "}
                <Link
                  to="/login"
                  className="font-bold hover:underline hover:text-green-600"
                >
                  Login
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

export default SignUp;
