const companies = [
  { name: "Apple Inc.", industry: "Technology", initials: "AP", avatarStyle: "bg-gray-900 text-white" },
  { name: "Microsoft", industry: "Technology", initials: "MS", avatarStyle: "bg-blue-600 text-white" },
  { name: "JPMorgan Chase", industry: "Finance", initials: "JP", avatarStyle: "bg-blue-900 text-white" },
  { name: "Bank of America", industry: "Finance", initials: "BA", avatarStyle: "bg-red-700 text-white" },
  { name: "Toyota Motor", industry: "Automotive", initials: "TM", avatarStyle: "bg-red-600 text-white" },
  { name: "General Motors", industry: "Automotive", initials: "GM", avatarStyle: "bg-blue-700 text-white" },
  { name: "Novartis", industry: "Healthcare", initials: "NV", avatarStyle: "bg-emerald-600 text-white" },
];

const industryBadge = {
  Technology: "bg-blue-100 text-blue-700",
  Finance: "bg-purple-100 text-purple-700",
  Automotive: "bg-orange-100 text-orange-700",
  Healthcare: "bg-emerald-100 text-emerald-700",
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
            <div
              className={`w-14 h-14 rounded-xl ${company.avatarStyle} flex items-center justify-center text-lg font-extrabold mb-3`}
            >
              {company.initials}
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
