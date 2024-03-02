import App from "../App";
import Login from "../components/Login";
import Quiz from "../components/Quiz";
import SignUp from "../components/Signup";

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
    ],
  },


export default router;
