const companies = [
  { name: "Apple Inc.",     industry: "Technology", tileStyle: "bg-stone-800 text-white" },
  { name: "Microsoft",     industry: "Technology", tileStyle: "bg-[#331D2C] text-white" },
  { name: "JPMorgan Chase",industry: "Finance",    tileStyle: "bg-[#4e2a42] text-white" },
  { name: "Bank of America",industry: "Finance",   tileStyle: "bg-rose-700 text-white" },
  { name: "Toyota Motor",  industry: "Automotive", tileStyle: "bg-rose-600 text-white" },
  { name: "General Motors",industry: "Automotive", tileStyle: "bg-[#331D2C] text-white" },
  { name: "Novartis",      industry: "Healthcare", tileStyle: "bg-amber-600 text-white" },
  { name: "Amazon",        industry: "Technology", tileStyle: "bg-amber-500 text-white" },
];

const industryBadge = {
  Technology: "bg-amber-100 text-amber-800",
  Finance:    "bg-[#331D2C]/10 text-[#331D2C]",
  Automotive: "bg-orange-100 text-orange-700",
  Healthcare: "bg-rose-100 text-rose-700",
};

const CompanyLogo = ({ name, tileStyle }) => {
  const initials = name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return (
    <div className={`w-full h-full rounded-lg flex items-center justify-center text-base font-extrabold ${tileStyle}`}>
      {initials}
    </div>
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
              <CompanyLogo name={company.name} tileStyle={company.tileStyle} />
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
