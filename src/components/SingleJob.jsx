import { useContext, useState } from "react";
import { API_BASE_URL } from "../config/api";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import moment from "moment";
import Swal from "sweetalert2";
import {
  FiBriefcase,
  FiCalendar,
  FiClock,
  FiDollarSign,
  FiUsers,
  FiArrowLeft,
  FiMail,
  FiMapPin,
  FiSend,
  FiX,
} from "react-icons/fi";

const categoryColors = {
  "On Site": "bg-blue-100 text-blue-700",
  Remote: "bg-emerald-100 text-emerald-700",
  Hybrid: "bg-violet-100 text-violet-700",
  "Part Time": "bg-orange-100 text-orange-700",
};

const categoryDot = {
  "On Site": "bg-blue-500",
  Remote: "bg-emerald-500",
  Hybrid: "bg-violet-500",
  "Part Time": "bg-orange-500",
};

const SingleJob = () => {
  const { user } = useContext(AuthContext);
  const job = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);

  const {
    poster,
    email,
    category,
    date,
    deadline,
    description,
    logo,
    photo,
    salary,
    number,
    title,
  } = job;

  const isExpired = moment(deadline).isBefore(moment());
  const isOwner = job.email === user?.email;
  const cannotApply = isExpired || isOwner;

  const handleApply = (event) => {
    event.preventDefault();
    const form = event.target;
    const resume = form.resume.value;
    const applicantEmail = form.email.value;
    const applicant = form.name.value;

    const jobWithoutId = {
      poster,
      posterEmail: email,
      category,
      date,
      deadline,
      description,
      applicantEmail,
      logo,
      number,
      photo,
      applicant,
      salary,
      title,
      resume,
    };

    if (cannotApply) {
      Swal.fire({
        title: "Cannot Apply",
        text: isOwner
          ? "You cannot apply to your own job posting."
          : "The application deadline has passed.",
        icon: "error",
      });
      return;
    }

    fetch(`${API_BASE_URL}/appliedJobs`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(jobWithoutId),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setModalOpen(false);
          job.number = parseInt(job.number) + 1;
          Swal.fire({
            title: "Application Submitted!",
            text: "Your application has been sent successfully.",
            icon: "success",
          });
        }
      });
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #331D2C 0%, #4e2a42 55%, #1a0e18 100%)",
        }}
      >
        {/* Blobs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #f59e0b, transparent)",
            transform: "translate(35%, -35%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-15 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #a78bfa, transparent)",
            transform: "translate(-35%, 35%)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative w-11/12 md:w-4/5 mx-auto py-14 lg:py-20">
          <Link
            to="/allJobs"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm mb-8 transition-colors group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to All Jobs
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-center gap-7">
            {/* Logo */}
            <div className="w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center flex-shrink-0 overflow-hidden ring-2 ring-white/20">
              {logo ? (
                <img
                  src={logo}
                  alt={poster}
                  className="w-full h-full object-cover"
                />
              ) : (
                <FiBriefcase className="text-[#331D2C] text-3xl" />
              )}
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${categoryColors[category] || "bg-gray-100 text-gray-600"}`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${categoryDot[category] || "bg-gray-400"}`}
                  />
                  {category}
                </span>
                {isExpired && (
                  <span className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-red-100 text-red-600">
                    Closed
                  </span>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {title}
              </h1>
              <p className="text-gray-300 mt-3 text-base font-medium flex items-center gap-2">
                <FiMapPin className="text-amber-400" />
                {poster}
                <span className="text-gray-500">·</span>
                <FiMail className="text-gray-400" />
                {email}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Featured image ── */}
      {photo && (
        <div className="w-11/12 md:w-4/5 mx-auto -mt-10 relative z-10">
          <div className="rounded-2xl overflow-hidden shadow-2xl h-64 md:h-[380px] ring-4 ring-white">
            <img
              src={photo}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* ── Body ── */}
      <div className="w-11/12 md:w-4/5 mx-auto py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* ── Main content ── */}
          <div className="flex-1 min-w-0 space-y-8">

            {/* Stat chips */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <FiDollarSign className="text-emerald-500 text-lg" />
                </div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                  Salary
                </p>
                <p className="text-gray-900 font-extrabold text-base leading-tight">
                  ${salary}
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-2">
                <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center">
                  <FiCalendar className="text-amber-500 text-lg" />
                </div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                  Posted
                </p>
                <p className="text-gray-900 font-extrabold text-base leading-tight">
                  {moment(date).format("MMM D, YYYY")}
                </p>
              </div>

              <div
                className={`bg-white rounded-2xl border shadow-sm p-5 flex flex-col gap-2 ${isExpired ? "border-red-100" : "border-gray-100"}`}
              >
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${isExpired ? "bg-red-50" : "bg-violet-50"}`}
                >
                  <FiClock
                    className={`text-lg ${isExpired ? "text-red-500" : "text-violet-500"}`}
                  />
                </div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                  Deadline
                </p>
                <p
                  className={`font-extrabold text-base leading-tight ${isExpired ? "text-red-500" : "text-gray-900"}`}
                >
                  {moment(deadline).format("MMM D, YYYY")}
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-2">
                <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                  <FiUsers className="text-blue-500 text-lg" />
                </div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">
                  Applicants
                </p>
                <p className="text-gray-900 font-extrabold text-base leading-tight">
                  {number}
                </p>
              </div>
            </div>

            {/* Applicant Competition Meter */}
            {(() => {
              const count = parseInt(number) || 0;
              const level =
                count <= 10
                  ? { label: "Low Competition", color: "emerald", pct: Math.max(8, (count / 10) * 33) }
                  : count <= 30
                  ? { label: "Moderate Competition", color: "amber", pct: 33 + ((count - 10) / 20) * 34 }
                  : { label: "High Competition", color: "red", pct: Math.min(100, 67 + ((count - 30) / 30) * 33) };

              const barColors = {
                emerald: "from-emerald-400 to-emerald-500",
                amber: "from-amber-400 to-amber-500",
                red: "from-red-400 to-red-500",
              };
              const badgeColors = {
                emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
                amber: "bg-amber-50 text-amber-700 border-amber-200",
                red: "bg-red-50 text-red-600 border-red-200",
              };
              const dotColors = {
                emerald: "bg-emerald-400",
                amber: "bg-amber-400",
                red: "bg-red-400",
              };

              return (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className={`h-1.5 bg-gradient-to-r ${barColors[level.color]} `} />
                  <div className="p-6 md:p-7">
                    <div className="flex items-center gap-2 mb-5">
                      <span className={`w-1 h-6 rounded-full bg-${level.color}-400 flex-shrink-0`} style={{ backgroundColor: level.color === "emerald" ? "#34d399" : level.color === "amber" ? "#fbbf24" : "#f87171" }} />
                      <h2 className="text-xl font-extrabold text-gray-900">
                        Applicant Competition
                      </h2>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                      {/* Gauge */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-500 font-medium">
                            {count} applicant{count !== 1 ? "s" : ""} so far
                          </span>
                          <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full border ${badgeColors[level.color]}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${dotColors[level.color]}`} />
                            {level.label}
                          </span>
                        </div>
                        <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${barColors[level.color]} transition-all duration-700`}
                            style={{ width: `${level.pct}%` }}
                          />
                        </div>
                        <div className="flex justify-between mt-1.5 text-[10px] text-gray-400 font-semibold uppercase tracking-wide">
                          <span>Low</span>
                          <span>Moderate</span>
                          <span>High</span>
                        </div>
                      </div>

                      {/* Tip */}
                      <div className={`sm:w-56 rounded-xl p-4 border ${badgeColors[level.color]} text-xs leading-relaxed`}>
                        {level.color === "emerald" &&
                          "Few applicants — a strong application now has a great chance of standing out."}
                        {level.color === "amber" &&
                          "Moderate interest — tailor your resume to the job description to get noticed."}
                        {level.color === "red" &&
                          "High competition — make your cover letter personal and highlight unique achievements."}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Description */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent" />
              <div className="p-7 md:p-9">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1 h-6 rounded-full bg-amber-400 flex-shrink-0" />
                  <h2 className="text-xl font-extrabold text-gray-900">
                    Job Description
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                  {description}
                </p>
              </div>
            </div>

            {/* Company */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div
                className="h-1.5"
                style={{
                  background:
                    "linear-gradient(90deg, #331D2C, #4e2a42, #f59e0b)",
                }}
              />
              <div className="p-7 md:p-9 flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {logo ? (
                    <img
                      src={logo}
                      alt={poster}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FiBriefcase className="text-[#331D2C] text-2xl" />
                  )}
                </div>
                <div>
                  <p className="text-[10px] text-amber-500 uppercase tracking-widest font-bold mb-0.5">
                    Posted by
                  </p>
                  <p className="text-gray-900 font-extrabold text-lg">
                    {poster}
                  </p>
                  <p className="text-gray-500 text-sm mt-0.5 flex items-center gap-1.5">
                    <FiMail className="text-gray-400 text-xs" />
                    {email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="lg:w-72 xl:w-80 flex-shrink-0 space-y-5 lg:sticky lg:top-24">

            {/* Apply CTA */}
            <div
              className="rounded-2xl p-6 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #331D2C 0%, #4e2a42 80%, #1a0e18 100%)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, #f59e0b, transparent)",
                  transform: "translate(30%, -30%)",
                }}
              />
              <div className="relative">
                <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-1">
                  Ready to apply?
                </p>
                <p className="text-white font-extrabold text-xl mb-1">
                  {title}
                </p>
                <p className="text-gray-400 text-sm mb-5">{poster}</p>

                {cannotApply ? (
                  <div className="w-full py-3 rounded-xl bg-white/10 text-gray-400 font-semibold text-sm text-center">
                    {isOwner ? "Your Listing" : "Applications Closed"}
                  </div>
                ) : (
                  <button
                    onClick={() => setModalOpen(true)}
                    className="w-full flex items-center justify-center gap-2 py-3 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold rounded-xl transition-colors text-sm"
                  >
                    <FiSend /> Apply Now
                  </button>
                )}
              </div>
            </div>

            {/* Quick details */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
              <div className="flex items-center gap-2 pb-3 border-b border-gray-100">
                <span className="w-1 h-5 rounded-full bg-amber-400 flex-shrink-0" />
                <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wide">
                  Quick Details
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center gap-2">
                    <FiBriefcase className="text-gray-400 text-xs" /> Type
                  </span>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[category] || "bg-gray-100 text-gray-600"}`}
                  >
                    {category}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center gap-2">
                    <FiDollarSign className="text-gray-400 text-xs" /> Salary
                  </span>
                  <span className="text-sm font-bold text-emerald-600">
                    ${salary}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center gap-2">
                    <FiCalendar className="text-gray-400 text-xs" /> Posted
                  </span>
                  <span className="text-sm font-semibold text-gray-700">
                    {moment(date).format("MMM D, YYYY")}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center gap-2">
                    <FiClock className="text-gray-400 text-xs" /> Deadline
                  </span>
                  <span
                    className={`text-sm font-semibold ${isExpired ? "text-red-500" : "text-gray-700"}`}
                  >
                    {moment(deadline).format("MMM D, YYYY")}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 flex items-center gap-2">
                    <FiUsers className="text-gray-400 text-xs" /> Applicants
                  </span>
                  <span className="text-sm font-bold text-gray-700">
                    {number}
                  </span>
                </div>
              </div>
            </div>

            {/* Deadline progress */}
            {!isExpired && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                    Time Remaining
                  </span>
                  <span className="text-xs text-amber-600 font-semibold">
                    {moment(deadline).fromNow(true)} left
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500"
                    style={{
                      width: `${Math.max(
                        5,
                        Math.min(
                          100,
                          (moment(deadline).diff(moment(), "days") / 30) * 100,
                        ),
                      )}%`,
                    }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Deadline: {moment(deadline).format("MMMM D, YYYY")}
                </p>
              </div>
            )}
          </aside>
        </div>
      </div>

      {/* ── Apply Modal ── */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setModalOpen(false)}
          />

          {/* Panel */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
            {/* Top stripe */}
            <div
              className="h-1.5"
              style={{
                background:
                  "linear-gradient(90deg, #331D2C, #4e2a42, #f59e0b)",
              }}
            />

            {/* Header */}
            <div className="px-7 pt-6 pb-4 flex items-start justify-between">
              <div>
                <p className="text-[10px] text-amber-500 uppercase tracking-widest font-bold mb-0.5">
                  Submit Application
                </p>
                <h3 className="text-xl font-extrabold text-gray-900 leading-tight">
                  {title}
                </h3>
                <p className="text-sm text-gray-500 mt-0.5">{poster}</p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
              >
                <FiX />
              </button>
            </div>

            <form onSubmit={handleApply} className="px-7 pb-7 space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm outline-none focus:border-[#331D2C] focus:ring-2 focus:ring-[#331D2C]/10 transition-all bg-gray-50"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm outline-none focus:border-[#331D2C] focus:ring-2 focus:ring-[#331D2C]/10 transition-all bg-gray-50"
                />
              </div>

              {/* Resume */}
              <div>
                <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">
                  Resume Link
                </label>
                <input
                  type="text"
                  name="resume"
                  placeholder="https://drive.google.com/..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 text-sm outline-none focus:border-[#331D2C] focus:ring-2 focus:ring-[#331D2C]/10 transition-all bg-gray-50"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#331D2C] hover:bg-[#4e2a42] text-white font-bold text-sm rounded-xl transition-colors"
                >
                  <FiSend className="text-xs" /> Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleJob;
