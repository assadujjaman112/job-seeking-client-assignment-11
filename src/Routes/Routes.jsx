import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllJobs from "../Pages/AllJobs/AllJobs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp";
import SingleJob from "../components/SingleJob";
import Blog from "../Pages/blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children : [
        {
            path : "/",
            element : <Home></Home>,
            loader : () => fetch("http://localhost:5000/jobs")
        },
        {
          path : "/blog",
          element: <Blog></Blog>
        },
        {
            path : "/allJobs",
            element : <AllJobs></AllJobs>
        },
        {
          path : "/singleJob/:id",
          element : <SingleJob></SingleJob>,
          loader : ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)

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