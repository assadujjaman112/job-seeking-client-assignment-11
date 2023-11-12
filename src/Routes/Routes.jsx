import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AllJobs from "../Pages/AllJobs/AllJobs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp";
import SingleJob from "../components/SingleJob";
import Blog from "../Pages/blog/Blog";
import PrivateRoute from "./PrivateRoute";
import AddAJob from "../components/AddAJob";
import MyJobs from "../Pages/MyJobs";
import UpdateJob from "../components/UpdateJob";
import AppliedJobs from "../Pages/AppliedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/jobs"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
        loader: () => fetch("http://localhost:5000/jobs"),
      },
      {
        path: "/singleJob/:id",
        element: (
          <PrivateRoute>
            <SingleJob></SingleJob>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/addAJob",
        element: (
          <PrivateRoute>
            <AddAJob></AddAJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/myJobs",
        element: (
          <PrivateRoute>
            <MyJobs></MyJobs>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/jobs"),
      },
      {
        path: "/updateJob/:id",
        element: (
          <PrivateRoute>
            <UpdateJob></UpdateJob>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/appliedJobs",
        element: (
          <PrivateRoute>
            <AppliedJobs></AppliedJobs>
          </PrivateRoute>
        ),
        loader : ()=> fetch("http://localhost:5000/appliedJobs")
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
