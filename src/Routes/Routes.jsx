import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllJobs from "../Pages/AllJobs/AllJobs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
            path : "/allJobs",
            element : <AllJobs></AllJobs>
        },
        {
          path : "/signUp",
          element : <SignUp></SignUp>
        },
        {
            path : "/login",
            element : <Login></Login>
        }
      ]
    },
  ]);

  export default router;