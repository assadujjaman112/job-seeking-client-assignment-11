import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "Is iApplyNow free to use?",
    answer:
      "Yes, creating an account and browsing job listings is completely free for job seekers. You can apply to any job on the platform at no cost.",
  },
  {
    question: "How do I apply for a job?",
    answer:
      "Simply browse the listings, click 'View Details' on any job that interests you, and hit the Apply button. You'll need a free account to submit your application.",
  },
  {
    question: "How do I post a job as an employer?",
    answer:
      "Sign in and navigate to 'Add A Job' from the menu. Fill in the job details — title, salary, category, and deadline — and your listing will go live immediately.",
  },
  {
    question: "Can I apply for multiple jobs at once?",
    answer:
      "Absolutely. There is no limit on the number of jobs you can apply to. You can track all your applications from the 'Applied Jobs' section in your dashboard.",
  },
  {
    question: "What job categories are available?",
    answer:
      "We cover a wide range of categories including Engineering & IT, Marketing, Finance, Design, Healthcare, Education, Sales, and Customer Support — with new listings added daily.",
  },
  {
    question: "Are internships also listed on the platform?",
    answer:
      "Yes. iApplyNow lists both full-time positions and internship opportunities across all major industries and cities in Bangladesh.",
  },
  {
    question: "How do I edit or delete a job I posted?",
    answer:
      "Go to 'My Jobs' from the navigation menu. From there you can edit the details or remove any listing you have posted.",
  },
];

const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div
    className={`rounded-2xl border transition-all duration-300 ${
      isOpen ? "border-[#331D2C]/30 bg-white shadow-md" : "border-gray-100 bg-white hover:border-[#331D2C]/20"
    }`}
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
    >
      <span className={`font-semibold text-sm md:text-base leading-snug ${isOpen ? "text-[#331D2C]" : "text-gray-800"}`}>
        {question}
      </span>
      <span
        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          isOpen ? "bg-[#331D2C] text-white" : "bg-gray-100 text-gray-500"
        }`}
      >
        {isOpen ? <FiMinus className="text-sm" /> : <FiPlus className="text-sm" />}
      </span>
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 pb-5" : "max-h-0"}`}
    >
      <p className="px-6 text-sm text-gray-500 leading-relaxed">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
      {/* Left - heading */}
      <div className="lg:sticky lg:top-24">
        <span className="inline-block bg-amber-400 text-amber-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
          FAQ
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
          Frequently Asked <span className="text-[#331D2C]">Questions</span>
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">
          Everything you need to know about using iApplyNow. Can&apos;t find your answer?
        </p>
        <a
          href="mailto:support@iapplynow.com"
          className="inline-flex items-center gap-2 bg-[#331D2C] text-white text-sm font-semibold px-5 py-3 rounded-xl hover:bg-[#4e2a42] transition-colors"
        >
          Contact Support
        </a>
        <div className="w-16 h-1 bg-amber-400 mt-8 rounded-full"></div>
      </div>

      {/* Right - accordion */}
      <div className="lg:col-span-2 space-y-3">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
