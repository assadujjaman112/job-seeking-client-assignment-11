import { FiUserPlus, FiSearch, FiCheckCircle, FiArrowRight } from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: FiUserPlus,
    title: "Create Your Profile",
    description:
      "Sign up and build your professional profile. Upload your resume and highlight your key skills to stand out.",
  },
  {
    number: "02",
    icon: FiSearch,
    title: "Browse & Apply",
    description:
      "Explore thousands of listings filtered by role, location, and category. Apply to the best matches in one click.",
  },
  {
    number: "03",
    icon: FiCheckCircle,
    title: "Get Hired",
    description:
      "Connect with top employers, ace your interviews, and land the role that aligns with your ambitions.",
  },
];

const HowItWorks = () => {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          How It <span className="text-[#331D2C]">Works</span>
        </h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Get started in three simple steps and find your dream job today.
        </p>
        <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        {steps.map((step, index) => (
          <div key={step.number} className="flex md:flex-row items-center flex-1 gap-4">
            {/* Card */}
            <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="relative mb-5">
                <div className="w-16 h-16 rounded-2xl bg-[#331D2C] flex items-center justify-center shadow-lg">
                  <step.icon className="text-white text-2xl" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-amber-400 text-amber-900 text-xs font-extrabold flex items-center justify-center shadow">
                  {step.number}
                </span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>

            {/* Arrow between cards (desktop only) */}
            {index < 2 && (
              <div className="hidden md:flex items-center shrink-0">
                <FiArrowRight className="text-amber-400 text-2xl" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
