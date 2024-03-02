import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Dashboard from "../components/Dashboard";
import DisplayError from "../components/DisplayError";
import Login from "../components/Login";
import Quiz from "../components/Quiz";
import Scoreboard from "../components/Scoreboard";
import SignUp from "../components/Signup";
import AdminRoute from "./AdminRoutes";
import PrivateRoute from "./PrivateRoutes";

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
        element: (
          <PrivateRoute>
            <Quiz />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <DisplayError />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/scoreboard",
        element: (
          <PrivateRoute>
            <Scoreboard></Scoreboard>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/quizcustomize",
        element: (
          <AdminRoute>
            <Scoreboard></Scoreboard>
          </AdminRoute>
        ),
      },
      {
        path: "*",
        element: <DisplayError />,
      },
    ],
  },
]);

export default router;