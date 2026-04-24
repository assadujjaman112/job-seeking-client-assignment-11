import { Link, useRouteError } from "react-router-dom";
import { HiOutlineHome, HiOutlineSearch, HiOutlineEmojiSad } from "react-icons/hi";

const ErrorPage = () => {
  const error = useRouteError();
  const status = error?.status ?? 404;
  const statusText = error?.statusText ?? "Page Not Found";

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: "linear-gradient(160deg, #331D2C 0%, #4e2a42 40%, #1a0e18 100%)" }}
    >
      {/* Decorative glows */}
      <div
        className="fixed top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="fixed bottom-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #a78bfa, transparent)", transform: "translate(-30%, 30%)" }}
      />

      <div className="relative text-center max-w-md">
        {/* Brand */}
        <p className="text-2xl font-extrabold tracking-tight mb-8">
          <span className="text-amber-400">i</span>
          <span className="text-white">ApplyNow</span>
        </p>

        {/* Icon */}
        <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
          <HiOutlineEmojiSad className="text-4xl text-amber-400" />
        </div>

        {/* Error code */}
        <h1 className="text-8xl font-extrabold text-white/10 leading-none select-none mb-2">
          {status}
        </h1>

        <h2 className="text-2xl font-extrabold text-white mb-3 -mt-4">
          {statusText}
        </h2>

        <p className="text-white/40 text-sm mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          {error?.data && (
            <span className="block mt-1 text-white/25 text-xs">{error.data}</span>
          )}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-400 text-amber-900 font-bold text-sm hover:bg-amber-300 active:scale-95 transition-all duration-200 shadow-lg shadow-amber-400/20"
          >
            <HiOutlineHome className="text-base" />
            Back to Home
          </Link>
          <Link
            to="/allJobs"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 active:scale-95 transition-all duration-200"
          >
            <HiOutlineSearch className="text-base" />
            Browse Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
