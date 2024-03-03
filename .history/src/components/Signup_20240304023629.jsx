import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState(""); //for showing error message

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const savedUser = { name, email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Failed to save user");
            }
            return res.json();
          })
          .then((data) => {
            if (data.acknowledged) {
              toast.success("User Created Successfully!");
              navigate("/");
            }
          })
          .catch((error) => {
            toast.error("Failed to save user. Please try again later.");
          });
      })
      .catch((error) => {
        setSignUpError(error.message);
      });
    form.reset();
  };

  return (
    <div>
      <div className="min-h-screen pb-6 px-2 md:px-0">
        <div className="bg-gray-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <div>
            <h3 className="font-bold text-2xl">Sign Up</h3>
            <p className="text-gray-600 pt-2">Create An Account</p>
          </div>

          <div className="mt-8">
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold ml-3"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-accent transition duration-500 px-3 pb-3"
                />
              </div>
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold ml-3"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
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
                  name="password"
                  id="password"
                  required
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-accent transition duration-500 px-3 pb-3"
                />
              </div>

              <button
                className="bg-accent hover:bg-slate-600 text-slate-100 dark:bg-primary dark:text-accent px-10 py-2 rounded float-right flex items-center gap-2 justify-center"
                type="submit"
              >
                Sign Up
              </button>
            </form>
            <div>
              {signUpError && <p className="text-red-600">{signUpError}</p>}
            </div>
            <div className="max-w-lg mx-auto text-center mt-8 mb-6">
              <p>
                Already have an account? Please{" "}
                <Link
                  to="/login"
                  className="font-bold hover:underline hover:text-default"
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
