import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FiMenu, FiX, FiLogOut } from "react-icons/fi";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut().then().catch();
    setMenuOpen(false);
  };

  const publicLinks = [
    { to: "/", label: "Home", end: true },
    { to: "/blog", label: "Blogs" },
    { to: "/allJobs", label: "All Jobs" },
  ];

  const privateLinks = [
    { to: "/addAJob", label: "Add A Job" },
    { to: "/myJobs", label: "My Jobs" },
    { to: "/appliedJobs", label: "Applied Jobs" },
  ];

  const allLinks = [...publicLinks, ...(user ? privateLinks : [])];

  const desktopLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? "text-[#331D2C] bg-amber-200 font-semibold"
        : "text-gray-500 hover:text-[#331D2C] hover:bg-gray-50"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
      isActive
        ? "text-[#331D2C] bg-amber-200 font-semibold"
        : "text-gray-600 hover:text-[#331D2C] hover:bg-gray-50"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="w-11/12 md:w-4/5 mx-auto">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img src={logo} className="w-8 h-8" alt="iApplyNow logo" />
            <span className="font-extrabold text-xl tracking-tight">
              <span className="text-amber-500">i</span>
              <span className="text-[#331D2C]">ApplyNow</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-1">
            {allLinks.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className={desktopLinkClass}>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop auth section */}
          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <>
                <div className="flex items-center gap-2.5">
                  <img
                    title={user.displayName}
                    className="w-9 h-9 rounded-full object-cover ring-2 ring-amber-400 ring-offset-1"
                    src={user.photoURL}
                    alt=""
                  />
                  {user.displayName && (
                    <span className="text-sm font-medium text-gray-700 max-w-[120px] truncate">
                      {user.displayName}
                    </span>
                  )}
                </div>
                <button
                  onClick={handleLogOut}
                  className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-gray-600 border border-gray-200 hover:border-[#331D2C] hover:text-[#331D2C] rounded-lg transition-colors"
                >
                  <FiLogOut />
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-semibold text-[#331D2C] border-2 border-[#331D2C] rounded-lg hover:bg-[#331D2C] hover:text-white transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signUp"
                  className="px-4 py-2 text-sm font-semibold bg-amber-400 hover:bg-amber-500 text-amber-900 rounded-lg transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-[#331D2C] hover:bg-gray-50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-3 space-y-1">
            {allLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={mobileLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <div className="pt-3 border-t border-gray-100 mt-2 flex flex-col gap-2">
              {user ? (
                <>
                  <div className="flex items-center gap-3 px-4 py-2">
                    <img
                      className="w-9 h-9 rounded-full object-cover ring-2 ring-amber-400"
                      src={user.photoURL}
                      alt=""
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {user.displayName}
                    </span>
                  </div>
                  <button
                    onClick={handleLogOut}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-gray-600 border border-gray-200 rounded-lg hover:border-[#331D2C] hover:text-[#331D2C] transition-colors"
                  >
                    <FiLogOut /> Log out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block text-center px-4 py-2.5 text-sm font-semibold text-[#331D2C] border-2 border-[#331D2C] rounded-lg hover:bg-[#331D2C] hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signUp"
                    className="block text-center px-4 py-2.5 text-sm font-semibold bg-amber-400 hover:bg-amber-500 text-amber-900 rounded-lg transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
