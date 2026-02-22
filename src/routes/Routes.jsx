import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import AllJobs from "../pages/allJobs/AllJobs";
import PrivateRoute from "./PrivateRoute";
import SingleJob from "../components/SingleJob";
import AddAJob from "../components/AddAJob";
import MyJobs from "../pages/MyJobs";
import UpdateJob from "../components/UpdateJob";
import AppliedJobs from "../pages/AppliedJobs";
import SignUp from "../pages/SignUp";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/allJobs",
        element: <AllJobs />,
        loader: () => fetch("https://job-seeking-server-pi.vercel.app/jobs"),
      },
      {
        path: "/singleJob/:id",
        element: (
          <PrivateRoute>
            <SingleJob />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://job-seeking-server-pi.vercel.app/jobs/${params.id}`),
      },
      {
        path: "/addAJob",
        element: (
          <PrivateRoute>
            <AddAJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/myJobs",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
        loader: () => fetch("https://job-seeking-server-pi.vercel.app/jobs"),
      },
      {
        path: "/updateJob/:id",
        element: (
          <PrivateRoute>
            <UpdateJob />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://job-seeking-server-pi.vercel.app/jobs/${params.id}`),
      },
      {
        path: "/appliedJobs",
        element: (
          <PrivateRoute>
            <AppliedJobs />
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://job-seeking-server-pi.vercel.app/appliedJobs"),
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
