import { FiCode, FiTrendingUp, FiDollarSign, FiPenTool, FiActivity, FiBook, FiShoppingBag, FiHeadphones } from "react-icons/fi";

const categories = [
  {
    label: "Engineering & IT", icon: FiCode, count: 124,
    card: "bg-[#331D2C]/10 border-[#331D2C]/20 hover:bg-[#331D2C]/15",
    iconBox: "bg-[#331D2C]/20", iconColor: "text-[#331D2C]", countColor: "text-[#331D2C]/50",
  },
  {
    label: "Marketing", icon: FiTrendingUp, count: 87,
    card: "bg-rose-50 border-rose-200 hover:bg-rose-100",
    iconBox: "bg-rose-100", iconColor: "text-rose-700", countColor: "text-rose-400",
  },
  {
    label: "Finance", icon: FiDollarSign, count: 65,
    card: "bg-amber-50 border-amber-200 hover:bg-amber-100",
    iconBox: "bg-amber-100", iconColor: "text-amber-700", countColor: "text-amber-400",
  },
  {
    label: "Design & Creative", icon: FiPenTool, count: 52,
    card: "bg-[#4e2a42]/10 border-[#4e2a42]/20 hover:bg-[#4e2a42]/15",
    iconBox: "bg-[#4e2a42]/20", iconColor: "text-[#4e2a42]", countColor: "text-[#4e2a42]/50",
  },
  {
    label: "Healthcare", icon: FiActivity, count: 43,
    card: "bg-orange-50 border-orange-200 hover:bg-orange-100",
    iconBox: "bg-orange-100", iconColor: "text-orange-600", countColor: "text-orange-400",
  },
  {
    label: "Education", icon: FiBook, count: 38,
    card: "bg-amber-100 border-amber-300 hover:bg-amber-200",
    iconBox: "bg-amber-200", iconColor: "text-amber-800", countColor: "text-amber-500",
  },
  {
    label: "Sales", icon: FiShoppingBag, count: 71,
    card: "bg-rose-100 border-rose-200 hover:bg-rose-200",
    iconBox: "bg-rose-200", iconColor: "text-rose-800", countColor: "text-rose-500",
  },
  {
    label: "Customer Support", icon: FiHeadphones, count: 29,
    card: "bg-stone-100 border-stone-200 hover:bg-stone-200",
    iconBox: "bg-stone-200", iconColor: "text-stone-600", countColor: "text-stone-400",
  },
];

const JobCategories = ({ activeCategory, onSelect }) => {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Browse by <span className="text-[#331D2C]">Category</span>
        </h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Click a category to filter job listings instantly.
        </p>
        <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map(({ label, icon: Icon, count, card, iconBox, iconColor, countColor }) => {
          const isActive = activeCategory === label;
          return (
            <div
              key={label}
              onClick={() => onSelect(label)}
              className={`rounded-2xl border-2 p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-[#331D2C] border-[#331D2C] shadow-lg -translate-y-1"
                  : card
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                isActive ? "bg-white/15" : iconBox
              }`}>
                <Icon className={`text-2xl transition-colors ${isActive ? "text-white" : iconColor}`} />
              </div>
              <h3 className={`font-bold text-sm mb-1 ${isActive ? "text-white" : "text-gray-900"}`}>
                {label}
              </h3>
              <p className={`text-xs font-medium ${isActive ? "text-amber-300" : countColor}`}>
                {count} Jobs
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobCategories;
