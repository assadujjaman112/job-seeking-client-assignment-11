import moment from "moment";
import { Link } from "react-router-dom";
import { FiBriefcase, FiCalendar, FiClock, FiDollarSign, FiUsers, FiArrowRight } from "react-icons/fi";

const categoryColors = {
  "On Site": "bg-blue-100 text-blue-700",
  "Remote": "bg-green-100 text-green-700",
  "Hybrid": "bg-purple-100 text-purple-700",
  "Part Time": "bg-orange-100 text-orange-700",
};

const JobDetails = ({ job }) => {
  const { _id, poster, title, date, deadline, salary, number, category } = job;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#331D2C]/10 flex items-center justify-center">
            <FiBriefcase className="text-[#331D2C] text-xl" />
          </div>
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[category] || "bg-gray-100 text-gray-600"}`}>
            {category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{poster}</p>
        <div className="space-y-2.5">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FiCalendar className="text-gray-400 shrink-0" />
            <span>Posted: {moment(date).format("MMM Do, YYYY")}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FiClock className="text-gray-400 shrink-0" />
            <span>Deadline: {moment(deadline).format("MMM Do, YYYY")}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FiDollarSign className="text-emerald-500 shrink-0" />
            <span className="font-semibold text-emerald-600">{salary}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FiUsers className="text-gray-400 shrink-0" />
            <span>{number} Applicants</span>
          </div>
        </div>
      </div>
      <div className="px-6 pb-6">
        <div className="h-px bg-gray-100 mb-4"></div>
        <Link to={`/singleJob/${_id}`}>
          <button className="w-full flex items-center justify-center gap-2 bg-[#331D2C] hover:bg-[#4e2a42] text-white font-semibold py-2.5 rounded-xl transition-colors text-sm">
            View Details <FiArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
