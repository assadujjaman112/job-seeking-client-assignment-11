import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import AppliedJobCart from "../components/AppliedJobCart";
import { Helmet } from "react-helmet-async";
import moment from "moment";
import {
  HiOutlineBriefcase,
  HiOutlineClipboardList,
  HiCheckCircle,
  HiOutlineClock,
} from "react-icons/hi";

const FILTERS = ["All", "Remote", "On Site", "Hybrid", "Part Time"];

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const jobs = useLoaderData();
  const filteredJobs = jobs?.filter((job) => job.applicantEmail === user?.email) ?? [];
  const [activeFilter, setActiveFilter] = useState("All");

  const activeCount = filteredJobs.filter(
    (job) => !moment(job.deadline).isBefore(moment(), "day")
  ).length;
  const expiredCount = filteredJobs.length - activeCount;

  const displayed =
    activeFilter === "All"
      ? filteredJobs
      : filteredJobs.filter((job) => job.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>iApplyNow | Applied Jobs</title>
      </Helmet>

      {/* Page Header */}
      <div
        style={{ background: "linear-gradient(135deg, #331D2C 0%, #5a2d47 100%)" }}
        className="py-12 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 mb-1">
            <HiOutlineClipboardList className="text-white/70 text-xl" />
            <span className="text-white/70 text-sm font-medium uppercase tracking-widest">
              Dashboard
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">Applied Jobs</h1>
          <p className="text-white/60 mt-1 text-sm">
            {filteredJobs.length} {filteredJobs.length === 1 ? "application" : "applications"} submitted
          </p>

          {/* Summary stats */}
          {filteredJobs.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
                <HiOutlineBriefcase className="text-amber-300 text-base" />
                <span className="text-white text-sm font-semibold">{filteredJobs.length} Total</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
                <HiCheckCircle className="text-green-300 text-base" />
                <span className="text-white text-sm font-semibold">{activeCount} Active</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2">
                <HiOutlineClock className="text-red-300 text-base" />
                <span className="text-white text-sm font-semibold">{expiredCount} Expired</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* No applications at all */}
        {filteredJobs.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm py-24 flex flex-col items-center gap-4 text-center">
            <div className="w-20 h-20 rounded-full bg-[#331D2C]/10 flex items-center justify-center">
              <HiOutlineBriefcase className="text-[#331D2C] text-4xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">No applications yet</h3>
            <p className="text-gray-400 text-sm max-w-xs">
              You haven&apos;t applied to any jobs yet. Browse open positions and submit your first application.
            </p>
            <Link to="/allJobs">
              <button className="mt-2 px-6 py-2.5 rounded-xl bg-[#331D2C] text-white text-sm font-semibold hover:bg-[#4a2940] transition-colors">
                Browse Jobs
              </button>
            </Link>
          </div>
        ) : (
          <>
            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeFilter === f
                      ? "bg-[#331D2C] text-white border-[#331D2C] shadow-md"
                      : "bg-white text-gray-600 border-gray-200 hover:border-[#331D2C] hover:text-[#331D2C]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Filter returned nothing */}
            {displayed.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-sm py-20 flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center">
                  <HiOutlineClipboardList className="text-amber-500 text-3xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-700">
                  No {activeFilter} applications
                </h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  You haven&apos;t applied to any {activeFilter.toLowerCase()} jobs yet.
                </p>
                <button
                  onClick={() => setActiveFilter("All")}
                  className="mt-1 text-sm text-[#331D2C] font-semibold underline"
                >
                  Show all applications
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {displayed.map((job) => (
                  <AppliedJobCart key={job._id} job={job} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
