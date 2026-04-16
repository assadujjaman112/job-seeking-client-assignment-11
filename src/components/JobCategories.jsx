import { FiCode, FiTrendingUp, FiDollarSign, FiPenTool, FiActivity, FiBook, FiShoppingBag, FiHeadphones } from "react-icons/fi";

const categories = [
  { label: "Engineering & IT", icon: FiCode, count: 124 },
  { label: "Marketing", icon: FiTrendingUp, count: 87 },
  { label: "Finance", icon: FiDollarSign, count: 65 },
  { label: "Design & Creative", icon: FiPenTool, count: 52 },
  { label: "Healthcare", icon: FiActivity, count: 43 },
  { label: "Education", icon: FiBook, count: 38 },
  { label: "Sales", icon: FiShoppingBag, count: 71 },
  { label: "Customer Support", icon: FiHeadphones, count: 29 },
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
        {categories.map(({ label, icon: Icon, count }) => {
          const isActive = activeCategory === label;
          return (
            <div
              key={label}
              onClick={() => onSelect(label)}
              className={`group rounded-2xl border p-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-[#331D2C] border-[#331D2C] shadow-lg -translate-y-1"
                  : "bg-white border-gray-100 hover:bg-[#331D2C] hover:border-[#331D2C]"
              }`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                isActive ? "bg-white/15" : "bg-[#331D2C]/10 group-hover:bg-white/15"
              }`}>
                <Icon className={`text-2xl transition-colors ${
                  isActive ? "text-white" : "text-[#331D2C] group-hover:text-white"
                }`} />
              </div>
              <h3 className={`font-bold text-sm mb-1 transition-colors ${
                isActive ? "text-white" : "text-gray-900 group-hover:text-white"
              }`}>
                {label}
              </h3>
              <p className={`text-xs transition-colors ${
                isActive ? "text-amber-300" : "text-gray-400 group-hover:text-gray-300"
              }`}>
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
