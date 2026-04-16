import { FiCheckCircle } from "react-icons/fi";

const aboutStats = [
  { count: "10K+", label: "Job Seekers" },
  { count: "500+", label: "Partner Companies" },
  { count: "2K+", label: "Jobs Filled Monthly" },
];

const AboutUs = () => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left - Dark brand panel */}
        <div
          className="p-10 md:p-14"
          style={{ background: "linear-gradient(135deg, #331D2C 0%, #4e2a42 100%)" }}
        >
          <span className="text-amber-400 text-sm font-bold uppercase tracking-widest">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-5 leading-tight">
            Connecting Talent with Opportunity
          </h2>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            iApplyNow is not just a job platform — it is a dynamic community
            where your career aspirations meet endless possibilities. Founded on
            the principle that every individual deserves a fulfilling and
            rewarding career.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="text-center bg-white/10 rounded-xl py-4">
                <p className="text-2xl font-extrabold text-amber-400">{stat.count}</p>
                <p className="text-gray-300 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Mission content */}
        <div className="p-10 md:p-14">
          <span className="text-[#331D2C] text-sm font-bold uppercase tracking-widest">
            Our Mission
          </span>
          <h3 className="text-2xl font-extrabold text-gray-900 mt-3 mb-4">
            Empowering Your Career Journey
          </h3>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Our mission is to connect you with opportunities that match not only
            your skills but also your aspirations. Finding the right job is about
            discovering a role that aligns with your passion and values.
          </p>
          <ul className="space-y-4">
            {[
              "Personalized job recommendations tailored to your profile",
              "Advanced search filters for precise job matching",
              "Direct connections with top hiring companies",
              "Career growth resources and professional development tools",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-gray-700 text-sm">
                <FiCheckCircle className="text-emerald-500 text-lg shrink-0 mt-0.5" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
