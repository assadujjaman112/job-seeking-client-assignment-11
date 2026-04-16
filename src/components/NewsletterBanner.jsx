import { useState } from "react";
import { FiBell, FiArrowRight } from "react-icons/fi";

const NewsletterBanner = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div
      className="relative overflow-hidden rounded-3xl px-8 py-14 md:px-16 text-center"
      style={{ background: "linear-gradient(135deg, #331D2C 0%, #4e2a42 60%, #1a0e18 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-56 h-56 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent)", transform: "translate(-30%, 30%)" }}
      />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
          <FiBell className="text-amber-400" />
          Job Alerts
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
          Never Miss Your Dream Job
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-lg mx-auto mb-8">
          Subscribe and get personalized job alerts delivered straight to your inbox — tailored to your skills and preferences.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-2 bg-amber-400 text-amber-900 font-bold px-6 py-3 rounded-xl text-sm">
            ✓ You&apos;re subscribed! We&apos;ll be in touch soon.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-3.5 rounded-xl text-gray-800 text-sm outline-none bg-white shadow-lg"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold text-sm rounded-xl transition-colors shadow-lg shrink-0"
            >
              Subscribe <FiArrowRight />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterBanner;
