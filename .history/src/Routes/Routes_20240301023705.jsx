import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../Layout/Main";
import DisplayError from "../components/DisplayError";
import Login from "../components/Login";
import Quiz from "../components/Quiz";
import SignUp from "../components/Signup";
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
            <QuizCustomize></QuizCustomize>
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
