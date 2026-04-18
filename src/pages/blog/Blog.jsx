import { useState } from "react";
import { Helmet } from "react-helmet-async";
import BlogCard from "../../components/BlogCard";
import blogPosts from "../../data/blogPosts";

const posts = blogPosts;

const FILTERS = ["All", "Tech", "Career"];

const Blog = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

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
            iApplyNow Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Insights for Your{" "}
            <span className="text-amber-400">Career Journey</span>
          </h1>
          <p className="text-gray-300 mt-4 text-base md:text-lg max-w-xl mx-auto">
            Tech deep-dives and career advice to help you land the job you
            deserve.
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-6 rounded-full" />
        </div>
      </div>

      {/* Content */}
      <div className="w-11/12 md:w-4/5 mx-auto py-14 md:py-20">
        {/* Section heading + filter bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Latest <span className="text-[#331D2C]">Articles</span>
            </h2>
            <div className="w-12 h-1 bg-amber-400 mt-2 rounded-full" />
          </div>

          <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-full px-2 py-1.5 shadow-sm self-start sm:self-auto">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                  active === f
                    ? "bg-[#331D2C] text-white"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No articles found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
