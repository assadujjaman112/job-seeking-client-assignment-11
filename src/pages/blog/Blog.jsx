import { Helmet } from "react-helmet-async";

const questions = [
  {
    id: 1,
    question:
      "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
    answer: (
      <>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-[#331D2C]">Access Token:</span>{" "}
          An access token is a credential which authorizes accessing specific
          data for a specific user.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          <span className="font-semibold text-[#331D2C]">Refresh Token:</span>{" "}
          A refresh token is a credential which is used to obtain a new access
          token when the old access token has expired.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          <span className="font-semibold text-[#331D2C]">
            How they work:
          </span>{" "}
          The application receives an access token after a user successfully
          authenticates and authorizes access, then passes the access token as a
          credential when it calls the target API. A refresh token enables a
          client to retrieve new access tokens without requiring the user to
          perform a complete login again.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          <span className="font-semibold text-[#331D2C]">
            Storage:
          </span>{" "}
          Access and refresh tokens can be stored in local storage or cookies.
          The most secure option is to store them in{" "}
          <span className="font-semibold">HttpOnly cookies</span> to protect
          against XSS attacks.
        </p>
      </>
    ),
  },
  {
    id: 2,
    question: "What is Express.js? What is Nest.js?",
    answer: (
      <>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold text-[#331D2C]">Express.js:</span>{" "}
          Express.js is a minimal and flexible web application framework for
          Node.js, a server-side JavaScript runtime. It provides a robust set of
          features for building web and mobile applications and is commonly
          referred to as Express.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          <span className="font-semibold text-[#331D2C]">Nest.js:</span>{" "}
          Nest.js is a framework for building scalable and maintainable
          server-side applications using TypeScript and JavaScript. It uses
          progressive JavaScript, is built with and fully supports TypeScript,
          and combines elements of OOP, FP, and FRP.
        </p>
      </>
    ),
  },
  {
    id: 3,
    question: "Code Explanation",
    answer: (
      <p className="text-gray-700 leading-relaxed">
        The website is about searching for jobs. Different pages were created
        with different content, each having its own functionality. During
        development, various components were built — each serving a distinct
        purpose. HTML tags provide the website structure, Tailwind CSS handles
        the styling, and React with JavaScript powers the interactivity and
        dynamic functionality.
      </p>
    ),
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>iApplyNow | Blog</title>
      </Helmet>

      {/* Hero banner */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #331D2C 0%, #4e2a42 55%, #1a0e18 100%)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #f59e0b, transparent)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #a78bfa, transparent)",
            transform: "translate(-30%, 30%)",
          }}
        />
        <div className="relative w-11/12 md:w-4/5 mx-auto py-14 lg:py-20 text-center">
          <span className="inline-block bg-amber-400 text-amber-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Knowledge Base
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Our <span className="text-amber-400">Blog</span>
          </h1>
          <p className="text-gray-300 mt-4 text-base md:text-lg max-w-xl mx-auto">
            Answers to common technical questions and project insights.
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-6 rounded-full" />
        </div>
      </div>

      {/* Q&A Cards */}
      <div className="w-11/12 md:w-4/5 mx-auto py-14 md:py-20 space-y-8">
        {questions.map(({ id, question, answer }) => (
          <div
            key={id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            {/* Card header */}
            <div className="flex items-start gap-4 px-7 py-5 border-b border-gray-100">
              <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#331D2C]/10 flex items-center justify-center text-[#331D2C] font-extrabold text-sm">
                Q{id}
              </span>
              <h2 className="text-lg md:text-xl font-bold text-gray-900 leading-snug pt-1">
                {question}
              </h2>
            </div>

            {/* Card body */}
            <div className="px-7 py-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-700 font-extrabold text-sm">
                  A
                </span>
                <div className="flex-1 pt-1">{answer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
