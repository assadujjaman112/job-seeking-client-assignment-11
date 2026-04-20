import moment from "moment";
import {
  HiOutlineCurrencyDollar,
  HiOutlineCalendar,
  HiOutlineUserGroup,
  HiOutlineClock,
  HiOutlineBriefcase,
  HiCheckCircle,
} from "react-icons/hi";

const CATEGORY_COLORS = {
  Remote:       "bg-amber-100 text-amber-700",
  "On Site":    "bg-[#331D2C]/10 text-[#331D2C]",
  Hybrid:       "bg-orange-100 text-orange-700",
  "Part Time":  "bg-rose-100 text-rose-700",
};

const AppliedJobCart = ({ job }) => {
  const { poster, title, date, deadline, salary, number, category, logo, photo } = job;
  const expired = moment(deadline).isBefore(moment(), "day");
  const initials = poster?.charAt(0).toUpperCase() ?? "?";
  const catColor = CATEGORY_COLORS[category] ?? "bg-stone-100 text-stone-600";

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col overflow-hidden">

      {/* Header */}
      <div className="p-5 flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
          {logo || photo ? (
            <img
              src={logo || photo}
              alt={poster}
              className="w-full h-full object-cover"
              onError={(e) => { e.target.style.display = "none"; }}
            />
          ) : (
            <span className="text-[#331D2C] font-bold text-lg">{initials}</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2">{title}</h3>
          <p className="text-gray-400 text-xs mt-0.5 truncate">{poster}</p>
        </div>

        {category && (
          <span className={`flex-shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${catColor}`}>
            {category}
          </span>
        )}
      </div>

      <div className="border-t border-gray-50 mx-5" />

      {/* Meta grid */}
      <div className="px-5 py-4 grid grid-cols-2 gap-x-4 gap-y-3 text-xs text-gray-600 flex-1">
        <div className="flex items-center gap-1.5">
          <HiOutlineCurrencyDollar className="text-[#331D2C] text-sm flex-shrink-0" />
          <span className="truncate">{salary ? `$${salary}` : "N/A"}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <HiOutlineUserGroup className="text-[#331D2C] text-sm flex-shrink-0" />
          <span>{number ?? 0} applicants</span>
        </div>
        <div className="flex items-center gap-1.5">
          <HiOutlineBriefcase className="text-amber-500 text-sm flex-shrink-0" />
          <span>Posted {moment(date).fromNow()}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <HiOutlineCalendar className={`text-sm flex-shrink-0 ${expired ? "text-red-400" : "text-amber-500"}`} />
          <span className={expired ? "text-red-400 font-medium" : ""}>
            {expired ? "Expired" : `Due ${moment(deadline).format("MMM D, YYYY")}`}
          </span>
        </div>
      </div>

      {/* Status footer */}
      <div className="px-5 pb-5">
        <div className={`w-full py-2 rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-1.5 ${
          expired ? "bg-red-50 text-red-500" : "bg-amber-50 text-amber-700"
        }`}>
          {expired ? (
            <>
              <HiOutlineClock className="text-sm" /> Application Closed
            </>
          ) : (
            <>
              <HiCheckCircle className="text-sm" /> Application Submitted
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppliedJobCart;
