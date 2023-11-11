import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#331D2C] text-white mr-1"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#331D2C] text-white mr-1"
              : ""
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allJobs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#331D2C] text-white mr-1 "
              : ""
          }
        >
          All Jobs
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/addAJob"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-[#331D2C] text-white mr-1 "
                : ""
            }
          >
            Add A Job
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <NavLink
            to="/myJobs"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-[#331D2C] text-white mr-1 "
                : ""
            }
          >
            My Jobs
          </NavLink>
        </li>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut().then().catch();
  };
  return (
    <div className="navbar bg-base-100 md:w-4/5 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className=" normal-case text-xl">
          <div className="flex items-center">
            <img src={logo} className="w-10 md:w-16" alt="" />
            <h1 className="font-extrabold">iApplyNow</h1>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-5">
            <img
              className="w-12 h-12 rounded-full"
              src={user.photoURL}
              alt=""
            />
            <Link>
              <button
                onClick={handleLogOut}
                className="btn bg-[#331D2C] text-white hover:text-black"
              >
                Log out
              </button>
            </Link>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn bg-[#331D2C] text-white hover:text-black"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
