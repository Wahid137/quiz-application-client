import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import Quiz from "../components/Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
]);

export default router;
