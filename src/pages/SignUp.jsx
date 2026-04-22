import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlinePhotograph,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from "react-icons/hi";

const STEPS = [
  "Create your free account",
  "Browse thousands of listings",
  "Apply with one click",
  "Land your dream job",
];

const SignUp = () => {
  const { createUser, googleSignIn, user } = useContext(AuthContext);
  const [signUpErr, setSignUpErr] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  if (user) return <Navigate to="/" replace />;

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setSignUpErr("");

    if (password.length < 6) {
      setSignUpErr("Password must be at least 6 characters.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setSignUpErr("Password must contain at least one uppercase letter.");
      return;
    }

    setLoading(true);
    createUser(email, password)
      .then((result) =>
        updateProfile(result.user, { displayName: name, photoURL: photoUrl })
      )
      .then(() => navigate(location?.state ?? "/"))
      .catch((error) => {
        setSignUpErr(error.message);
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    setSignUpErr("");
    setLoading(true);
    googleSignIn()
      .then(() => navigate(location?.state ?? "/"))
      .catch((error) => {
        setSignUpErr(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Helmet>
        <title>iApplyNow | Sign Up</title>
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
            <HiOutlineSparkles className="text-amber-400 text-3xl" />
          </div>
          <h2 className="text-4xl font-bold text-white leading-snug mb-4">
            Start your journey<br />in four easy steps.
          </h2>
          <p className="text-white/60 text-base mb-10">
            Join thousands of job seekers who found their perfect role through iApplyNow.
          </p>
          <ol className="space-y-3">
            {STEPS.map((step, i) => (
              <li key={step} className="flex items-center gap-3 text-white/80 text-sm">
                <span className="w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
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

          <h2 className="text-3xl font-bold text-gray-900 mb-1">Create an account</h2>
          <p className="text-gray-400 text-sm mb-8">Join iApplyNow and start applying today</p>

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
            <span className="text-gray-400 text-xs font-medium">or sign up with email</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full name</label>
              <div className="relative">
                <HiOutlineUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#331D2C]/30 focus:border-[#331D2C] transition"
                />
              </div>
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Photo URL</label>
              <div className="relative">
                <HiOutlinePhotograph className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
                <input
                  type="url"
                  name="photo"
                  placeholder="https://example.com/photo.jpg"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#331D2C]/30 focus:border-[#331D2C] transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email address</label>
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

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <HiOutlineLockClosed className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none" />
                <input
                  type="password"
                  name="password"
                  placeholder="Min. 6 chars, one uppercase"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#331D2C]/30 focus:border-[#331D2C] transition"
                />
              </div>
              <p className="text-gray-400 text-xs mt-1.5 flex items-center gap-1">
                <HiOutlineCheckCircle className="flex-shrink-0" />
                At least 6 characters with one uppercase letter
              </p>
            </div>

            {signUpErr && (
              <div className="bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl px-4 py-3">
                {signUpErr}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#331D2C] text-white font-semibold text-sm hover:bg-[#4a2940] active:scale-95 transition-all duration-200 disabled:opacity-60 mt-2"
            >
              {loading ? "Creating account…" : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-[#331D2C] font-bold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
