import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
} from "react-icons/hi";

const PERKS = [
  "Access thousands of job listings",
  "Apply with one click",
  "Track all your applications",
  "Get notified of new opportunities",
];

const Login = () => {
  const { signIn, googleSignIn, user } = useContext(AuthContext);
  const [loginErr, setLoginErr] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  if (user) return <Navigate to="/" replace />;

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setLoginErr("");
    setLoading(true);

    signIn(email, password)
      .then(() => navigate(location?.state ?? "/"))
      .catch((error) => {
        setLoginErr(error.message);
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    setLoginErr("");
    setLoading(true);
    googleSignIn()
      .then(() => navigate(location?.state ?? "/"))
      .catch((error) => {
        setLoginErr(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Helmet>
        <title>iApplyNow | Login</title>
      </Helmet>

      {/* Left brand panel */}
      <div
        className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12"
        style={{ background: "linear-gradient(135deg, #1a0e18 0%, #331D2C 50%, #5a2d47 100%)" }}
      >
        <div>
          <h1 className="text-3xl font-extrabold">
            <span className="text-amber-400">i</span>
            <span className="text-white">ApplyNow</span>
          </h1>
        </div>

        <div>
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
            <HiOutlineBriefcase className="text-amber-400 text-3xl" />
          </div>
          <h2 className="text-4xl font-bold text-white leading-snug mb-4">
            Your next career<br />move starts here.
          </h2>
          <p className="text-white/60 text-base mb-10">
            Sign in to access your personalised job dashboard and stay ahead of the competition.
          </p>
          <ul className="space-y-3">
            {PERKS.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-white/80 text-sm">
                <HiOutlineCheckCircle className="text-amber-400 text-lg flex-shrink-0" />
                {perk}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-white/30 text-xs">© {new Date().getFullYear()} iApplyNow. All rights reserved.</p>
      </div>

      {/* Right form panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">

          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <h1 className="text-2xl font-extrabold">
              <span className="text-amber-500">i</span>
              <span className="text-[#331D2C]">ApplyNow</span>
            </h1>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-1">Welcome back</h2>
          <p className="text-gray-400 text-sm mb-8">Sign in to your account to continue</p>

          {/* Google */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-sm transition-all duration-200 shadow-sm mb-6 disabled:opacity-50"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-xs font-medium">or sign in with email</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email address
              </label>
              <div className="relative">
                <HiOutlineMail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#331D2C]/30 focus:border-[#331D2C] transition"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-semibold text-gray-700">Password</label>
                <a href="#" className="text-xs text-[#331D2C] font-semibold hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <HiOutlineLockClosed className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#331D2C]/30 focus:border-[#331D2C] transition"
                />
              </div>
            </div>

            {loginErr && (
              <div className="bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl px-4 py-3">
                {loginErr}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#331D2C] text-white font-semibold text-sm hover:bg-[#4a2940] active:scale-95 transition-all duration-200 disabled:opacity-60 mt-2"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <Link to="/signUp" className="text-[#331D2C] font-bold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
