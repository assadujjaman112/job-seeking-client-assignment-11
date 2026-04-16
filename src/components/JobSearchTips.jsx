import { FiFileText, FiLinkedin, FiMessageSquare } from "react-icons/fi";

const tips = [
  {
    icon: FiFileText,
    title: "Crafting an Impressive Resume",
    overlay: "from-[#331D2C] to-[#4e2a42]",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
    items: [
      "Ensure your resume is well-organized, highlighting your skills and experiences.",
      "Tailor your resume for each job application by emphasizing relevant achievements.",
      "Use action verbs to describe your accomplishments and responsibilities.",
      "Include a professional summary that showcases your career goals and strengths.",
    ],
  },
  {
    icon: FiLinkedin,
    title: "Building an Effective LinkedIn Profile",
    overlay: "from-amber-600 to-amber-800",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
    items: [
      "Create a comprehensive LinkedIn profile with a professional photo.",
      "Highlight your key skills, experiences, and accomplishments in the summary.",
      "Connect with professionals in your industry to expand your network.",
      "Join relevant groups and participate in discussions to demonstrate expertise.",
    ],
  },
  {
    icon: FiMessageSquare,
    title: "Preparing for Interviews",
    overlay: "from-[#1a0e18] to-[#331D2C]",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80",
    items: [
      "Research the company thoroughly before the interview.",
      "Practice common interview questions to build confidence.",
      "Prepare specific examples that showcase your skills and achievements.",
      "Follow up with a thank-you email expressing your gratitude.",
    ],
  },
];

const JobSearchTips = () => {
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Job Search <span className="text-[#331D2C]">Tips</span>
        </h2>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto">
          Expert guidance to help you stand out in a competitive market.
        </p>
        <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tips.map(({ icon: Icon, title, image, overlay, items }) => (
          <div
            key={title}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-56 overflow-hidden rounded-t-2xl">
              <img src={image} alt={title} className="w-full h-full object-cover object-top" />
              <div className={`absolute inset-0 bg-gradient-to-br ${overlay} opacity-80`} />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <Icon className="text-3xl mb-2 drop-shadow" />
                <h3 className="text-lg font-bold leading-snug drop-shadow">{title}</h3>
              </div>
            </div>
            <ol className="p-6 space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-gray-600">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-500 font-bold text-xs flex items-center justify-center">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSearchTips;
