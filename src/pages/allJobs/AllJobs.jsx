import moment from "moment";
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineCurrencyDollar,
  HiOutlineSearch,
  HiOutlineUserGroup,
  HiOutlineX,
} from "react-icons/hi";
import { Link, useLoaderData } from "react-router-dom";

const CATEGORY_ALL = "All";

const categoryColors = {
  "On-Site": "bg-blue-100 text-blue-700",
  Remote: "bg-green-100 text-green-700",
  Hybrid: "bg-purple-100 text-purple-700",
  "Part-Time": "bg-orange-100 text-orange-700",
};

const isExpired = (deadline) => moment(deadline).isBefore(moment(), "day");

const AllJobs = () => {
  const allJobs = useLoaderData();
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(CATEGORY_ALL);

  const categories = useMemo(() => {
    const cats = [...new Set(allJobs?.map((j) => j.category).filter(Boolean))];
    return [CATEGORY_ALL, ...cats];
  }, [allJobs]);

  const displayJobs = useMemo(() => {
    return allJobs?.filter((job) => {
      const matchesQuery = job.title
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory =
        activeCategory === CATEGORY_ALL || job.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [allJobs, query, activeCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>iApplyNow | All Jobs</title>
      </Helmet>

      {/* ── Hero / Search banner ── */}
      <section
        className="py-16 px-4"
        style={{
          background: "linear-gradient(135deg, #331D2C 0%, #5c3352 60%, #7a4a6e 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold tracking-widest uppercase text-purple-200 mb-3">
            {allJobs?.length ?? 0} opportunities available
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Find Your Next Role
          </h1>
          <p className="text-purple-200 mb-8 text-lg">
            Browse all open positions and land your dream job today.
          </p>

          {/* Search bar */}
          <div className="relative max-w-xl mx-auto">
            <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search job title…"
              className="w-full pl-11 pr-10 py-3.5 rounded-xl bg-white text-gray-800 text-base shadow-lg border-0 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <HiOutlineX className="text-lg" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Filters + results ── */}
      <section className="max-w-7xl mx-auto px-4 py-10">

        {/* Category pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#331D2C] text-white border-[#331D2C] shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#331D2C] hover:text-[#331D2C]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Result count */}
        <p className="text-sm text-gray-500 mb-6">
          Showing{" "}
          <span className="font-semibold text-gray-800">
            {displayJobs?.length ?? 0}
          </span>{" "}
          {displayJobs?.length === 1 ? "job" : "jobs"}
          {activeCategory !== CATEGORY_ALL && (
            <> in <span className="font-semibold text-[#331D2C]">{activeCategory}</span></>
          )}
          {query && (
            <> matching &ldquo;<span className="font-semibold text-[#331D2C]">{query}</span>&rdquo;</>
          )}
        </p>

        {/* ── Job cards grid ── */}
        {displayJobs?.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {displayJobs.map((job) => {
              const expired = isExpired(job.deadline);
              const catColor =
                categoryColors[job.category] ?? "bg-gray-100 text-gray-600";

              return (
                <div
                  key={job._id}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col overflow-hidden"
                >
                  {/* Card header */}
                  <div className="p-5 flex items-start gap-4">
                    {/* Logo / avatar */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
                      {job.logo ? (
                        <img
                          src={job.logo}
                          alt={job.poster}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-xl font-bold text-[#331D2C]">
                          {job.poster?.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h2 className="font-bold text-gray-900 text-base leading-snug line-clamp-2">
                        {job.title}
                      </h2>
                      <p className="text-sm text-gray-500 mt-0.5 truncate">
                        {job.poster}
                      </p>
                    </div>

                    {/* Category badge */}
                    {job.category && (
                      <span
                        className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${catColor}`}
                      >
                        {job.category}
                      </span>
                    )}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-50 mx-5" />

                  {/* Meta info */}
                  <div className="px-5 py-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-gray-600 flex-1">
                    <div className="flex items-center gap-2">
                      <HiOutlineCurrencyDollar className="text-[#331D2C] text-base flex-shrink-0" />
                      <span className="truncate">{job.salary || "N/A"}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <HiOutlineUserGroup className="text-[#331D2C] text-base flex-shrink-0" />
                      <span>
                        {job.number ?? 0}{" "}
                        {job.number === 1 ? "applicant" : "applicants"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <HiOutlineBriefcase className="text-[#331D2C] text-base flex-shrink-0" />
                      <span className="truncate">
                        Posted {moment(job.date).fromNow()}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <HiOutlineCalendar
                        className={`text-base flex-shrink-0 ${
                          expired ? "text-red-400" : "text-[#331D2C]"
                        }`}
                      />
                      <span className={expired ? "text-red-400 font-medium" : ""}>
                        {expired
                          ? "Expired"
                          : `Due ${moment(job.deadline).format("MMM D, YYYY")}`}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="px-5 pb-5">
                    <Link to={`/singleJob/${job._id}`} className="block">
                      <button
                        className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                          expired
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : "bg-[#331D2C] text-white hover:bg-[#4a2940] active:scale-95"
                        }`}
                      >
                        {expired ? "Closed" : "View Details"}
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* ── Empty state ── */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 rounded-full bg-purple-50 flex items-center justify-center mb-5">
              <HiOutlineSearch className="text-4xl text-[#331D2C]" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              No jobs found
            </h3>
            <p className="text-gray-500 mb-6 max-w-xs">
              Try adjusting your search or clearing the filters to see more
              results.
            </p>
            <button
              onClick={() => {
                setQuery("");
                setActiveCategory(CATEGORY_ALL);
              }}
              className="px-6 py-2.5 rounded-xl bg-[#331D2C] text-white text-sm font-semibold hover:bg-[#4a2940] transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default AllJobs;
