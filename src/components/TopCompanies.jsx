import { useState } from "react";

const companies = [
  { name: "Apple Inc.", industry: "Technology", domain: "apple.com", fallbackStyle: "bg-gray-900 text-white" },
  { name: "Microsoft", industry: "Technology", domain: "microsoft.com", fallbackStyle: "bg-blue-600 text-white" },
  { name: "JPMorgan Chase", industry: "Finance", domain: "jpmorganchase.com", fallbackStyle: "bg-blue-900 text-white" },
  { name: "Bank of America", industry: "Finance", domain: "bankofamerica.com", fallbackStyle: "bg-red-700 text-white" },
  { name: "Toyota Motor", industry: "Automotive", domain: "toyota.com", fallbackStyle: "bg-red-600 text-white" },
  { name: "General Motors", industry: "Automotive", domain: "gm.com", fallbackStyle: "bg-blue-700 text-white" },
  { name: "Novartis", industry: "Healthcare", domain: "novartis.com", fallbackStyle: "bg-emerald-600 text-white" },
  { name: "Amazon", industry: "Technology", domain: "amazon.com", fallbackStyle: "bg-amber-500 text-white" },
];

const industryBadge = {
  Technology: "bg-blue-100 text-blue-700",
  Finance: "bg-purple-100 text-purple-700",
  Automotive: "bg-orange-100 text-orange-700",
  Healthcare: "bg-emerald-100 text-emerald-700",
};

const CompanyLogo = ({ domain, name, fallbackStyle }) => {
  const [error, setError] = useState(false);
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("");

  if (error) {
    return (
      <div className={`w-full h-full rounded-lg flex items-center justify-center text-base font-extrabold ${fallbackStyle}`}>
        {initials}
      </div>
    );
  }

  return (
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt={name}
      className="w-full h-full object-contain"
      onError={() => setError(true)}
    />
  );
};

const TopCompanies = () => {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Top <span className="text-[#331D2C]">Companies</span>
        </h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Explore career opportunities with industry-leading employers known for excellence and innovation.
        </p>
        <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {companies.map((company) => (
          <div
            key={company.name}
            className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <div className="w-16 h-16 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-3 p-2 overflow-hidden">
              <CompanyLogo
                domain={company.domain}
                name={company.name}
                fallbackStyle={company.fallbackStyle}
              />
            </div>
            <h3 className="font-bold text-gray-800 text-sm mb-2">{company.name}</h3>
            <span
              className={`text-xs px-2.5 py-1 rounded-full font-medium ${industryBadge[company.industry] || "bg-gray-100 text-gray-600"}`}
            >
              {company.industry}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCompanies;
