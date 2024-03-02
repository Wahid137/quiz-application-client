import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Quiz from "../components/Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
]);

export default router;
