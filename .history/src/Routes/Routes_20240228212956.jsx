import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Dashboard from "../components/Dashboard";
import DisplayError from "../components/DisplayError";
import Login from "../components/Login";
import Quiz from "../components/Quiz";
import SignUp from "../components/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "*",
        element: <DisplayError />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "*",
        element: <DisplayError />,
      },
    ],
  },
]);

export default router;
