import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllJobs from "../Pages/AllJobs/AllJobs";

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
        }
      ]
    },
  ]);

  export default router;