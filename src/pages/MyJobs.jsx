import { useContext, useState } from "react";
import { API_BASE_URL } from "../config/api";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import {
  HiOutlineBriefcase,
  HiOutlinePencilAlt,
  HiOutlineTrash,
  HiOutlineSearch,
  HiOutlineUsers,
  HiOutlineCurrencyDollar,
  HiOutlineCalendar,
  HiOutlinePlus,
} from "react-icons/hi";

const CATEGORY_COLORS = {
  "On Site Job": "badge-info",
  "Remote Job": "badge-success",
  "Hybrid": "badge-warning",
  "Part Time": "badge-secondary",
};

const MyJobs = () => {
  const allJobs = useLoaderData();
  const { user } = useContext(AuthContext);
  const filteredJobs = allJobs.filter((job) => job.email === user.email);
  const [myJobs, setMyjJobs] = useState(filteredJobs);
  const [search, setSearch] = useState("");

  const displayed = myJobs.filter(
    (job) =>
      job.title?.toLowerCase().includes(search.toLowerCase()) ||
      job.category?.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#331D2C",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${API_BASE_URL}/job/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyjJobs((prev) => prev.filter((job) => job._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "The job listing has been removed.",
                icon: "success",
                confirmButtonColor: "#331D2C",
              });
            }
          });
      }
    });
  };

  const formatDeadline = (deadline) => {
    if (!deadline) return "—";
    const d = new Date(deadline);
    return isNaN(d) ? deadline : d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <div className="min-h-screen bg-base-200">
      <Helmet>
        <title>iApplyNow | My Jobs</title>
      </Helmet>

      {/* Page Header */}
      <div style={{ background: "linear-gradient(135deg, #331D2C 0%, #5a2d47 100%)" }} className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <HiOutlineBriefcase className="text-white/70 text-xl" />
                <span className="text-white/70 text-sm font-medium uppercase tracking-widest">Dashboard</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">My Job Listings</h1>
              <p className="text-white/60 mt-1 text-sm">
                {myJobs.length} {myJobs.length === 1 ? "listing" : "listings"} posted by you
              </p>
            </div>
            <Link to="/addAJob">
              <button className="btn gap-2 bg-white text-[#331D2C] border-0 hover:bg-white/90 font-semibold shadow-lg">
                <HiOutlinePlus className="text-lg" />
                Post New Job
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* Search + Count Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div className="relative w-full sm:w-72">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title or type…"
              className="input input-bordered w-full pl-9 bg-white focus:outline-none focus:border-[#331D2C]"
            />
          </div>
          <span className="text-sm text-gray-500">
            Showing <span className="font-semibold text-gray-700">{displayed.length}</span> of{" "}
            <span className="font-semibold text-gray-700">{myJobs.length}</span> jobs
          </span>
        </div>

        {/* Table */}
        {displayed.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm py-20 flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-[#331D2C]/10 flex items-center justify-center">
              <HiOutlineBriefcase className="text-[#331D2C] text-3xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              {search ? "No jobs match your search" : "No job listings yet"}
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              {search
                ? "Try a different keyword or clear your search."
                : "Post your first job listing to start finding candidates."}
            </p>
            {!search && (
              <Link to="/addAJob">
                <button className="btn btn-sm mt-2 bg-[#331D2C] text-white border-0 hover:bg-[#4a2840] gap-2">
                  <HiOutlinePlus /> Post a Job
                </button>
              </Link>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-gray-400 font-semibold text-xs uppercase tracking-wider w-10">#</th>
                    <th className="text-gray-500 font-semibold text-xs uppercase tracking-wider">Job</th>
                    <th className="text-gray-500 font-semibold text-xs uppercase tracking-wider">Type</th>
                    <th className="text-gray-500 font-semibold text-xs uppercase tracking-wider hidden md:table-cell">Salary</th>
                    <th className="text-gray-500 font-semibold text-xs uppercase tracking-wider hidden lg:table-cell">Deadline</th>
                    <th className="text-gray-500 font-semibold text-xs uppercase tracking-wider hidden lg:table-cell">Applicants</th>
                    <th className="text-gray-500 font-semibold text-xs uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {displayed.map((job, index) => (
                    <tr
                      key={job._id}
                      className="hover:bg-gray-50/60 transition-colors duration-150"
                    >
                      {/* Index */}
                      <td className="text-gray-400 font-medium text-sm">{index + 1}</td>

                      {/* Job title + logo */}
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200">
                            {job.logo ? (
                              <img
                                src={job.logo}
                                alt={job.title}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.style.display = "none"; }}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <HiOutlineBriefcase className="text-gray-400 text-lg" />
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800 text-sm leading-tight">{job.title}</p>
                            {job.poster && (
                              <p className="text-gray-400 text-xs mt-0.5">{job.poster}</p>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Category badge */}
                      <td>
                        <span className={`badge badge-sm font-medium ${CATEGORY_COLORS[job.category] || "badge-ghost"}`}>
                          {job.category}
                        </span>
                      </td>

                      {/* Salary */}
                      <td className="hidden md:table-cell">
                        {job.salary ? (
                          <div className="flex items-center gap-1 text-gray-600 text-sm">
                            <HiOutlineCurrencyDollar className="text-green-500 flex-shrink-0" />
                            <span>{job.salary}</span>
                          </div>
                        ) : (
                          <span className="text-gray-300 text-sm">—</span>
                        )}
                      </td>

                      {/* Deadline */}
                      <td className="hidden lg:table-cell">
                        {job.deadline ? (
                          <div className="flex items-center gap-1 text-gray-600 text-sm">
                            <HiOutlineCalendar className="text-orange-400 flex-shrink-0" />
                            <span>{formatDeadline(job.deadline)}</span>
                          </div>
                        ) : (
                          <span className="text-gray-300 text-sm">—</span>
                        )}
                      </td>

                      {/* Applicants */}
                      <td className="hidden lg:table-cell">
                        <div className="flex items-center gap-1 text-gray-600 text-sm">
                          <HiOutlineUsers className="text-blue-400 flex-shrink-0" />
                          <span>{job.number ?? 0}</span>
                        </div>
                      </td>

                      {/* Actions */}
                      <td>
                        <div className="flex items-center justify-end gap-2">
                          <Link to={`/updateJob/${job._id}`}>
                            <button
                              className="btn btn-xs gap-1 bg-[#331D2C]/10 text-[#331D2C] border-0 hover:bg-[#331D2C] hover:text-white transition-colors"
                              title="Edit"
                            >
                              <HiOutlinePencilAlt className="text-base" />
                              <span className="hidden sm:inline">Edit</span>
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDelete(job._id)}
                            className="btn btn-xs gap-1 bg-red-50 text-red-500 border-0 hover:bg-red-500 hover:text-white transition-colors"
                            title="Delete"
                          >
                            <HiOutlineTrash className="text-base" />
                            <span className="hidden sm:inline">Delete</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyJobs;
