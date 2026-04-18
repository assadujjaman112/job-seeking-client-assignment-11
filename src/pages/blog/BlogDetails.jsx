import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiCalendar, FiClock, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import blogPosts from "../../data/blogPosts";

const categoryStyle = {
  Tech: "bg-amber-400 text-amber-900",
  Career: "bg-[#331D2C]/10 text-[#331D2C]",
};

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  const currentIndex = blogPosts.findIndex((p) => p.id === Number(id));
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 gap-4">
        <p className="text-2xl font-bold text-gray-700">Article not found.</p>
        <Link
          to="/blog"
          className="flex items-center gap-2 text-[#331D2C] font-semibold hover:underline"
        >
          <FiArrowLeft /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>iApplyNow | {post.title}</title>
      </Helmet>

      {/* Hero */}
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
        <div className="relative w-11/12 md:w-4/5 mx-auto py-14 lg:py-20">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm mb-8 transition-colors"
          >
            <FiArrowLeft /> Back to Blog
          </Link>

          <span
            className={`inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5 ${categoryStyle[post.category]}`}
          >
            {post.category}
          </span>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mt-7">
            <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-amber-900 font-extrabold text-sm flex-shrink-0">
              {post.avatar}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{post.author}</p>
              <div className="flex items-center gap-3 text-gray-400 text-xs mt-0.5">
                <span className="flex items-center gap-1">
                  <FiCalendar />
                  {post.date}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <FiClock />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured image */}
      <div className="w-11/12 md:w-4/5 mx-auto -mt-8 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-xl h-64 md:h-96">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article body */}
      <div className="w-11/12 md:w-4/5 mx-auto py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <article className="prose-custom">
            {post.content.map((block, i) => {
              if (block.type === "paragraph") {
                return (
                  <p
                    key={i}
                    className="text-gray-600 leading-relaxed text-base md:text-lg mb-6"
                  >
                    {block.text}
                  </p>
                );
              }
              if (block.type === "heading") {
                return (
                  <h2
                    key={i}
                    className="text-xl md:text-2xl font-extrabold text-gray-900 mt-10 mb-4 leading-snug"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "list") {
                return (
                  <ul key={i} className="mb-6 space-y-3">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                        <span className="text-gray-600 text-base md:text-lg leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </article>

          {/* Author card */}
          <div className="mt-14 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-[#331D2C] flex items-center justify-center text-white text-xl font-extrabold flex-shrink-0">
              {post.avatar}
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-0.5">
                Written by
              </p>
              <p className="text-gray-900 font-bold text-lg">{post.author}</p>
              <p className="text-gray-500 text-sm mt-1">
                Full-stack developer and career growth enthusiast sharing
                practical insights for modern developers.
              </p>
            </div>
          </div>

          {/* Prev / Next navigation */}
          {(prevPost || nextPost) && (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  to={`/blog/${prevPost.id}`}
                  className="group flex flex-col gap-1 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="flex items-center gap-1 text-xs text-gray-400 font-semibold uppercase tracking-widest">
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Previous
                  </span>
                  <p className="text-gray-900 font-bold text-sm leading-snug group-hover:text-[#331D2C] transition-colors">
                    {prevPost.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}

              {nextPost ? (
                <Link
                  to={`/blog/${nextPost.id}`}
                  className="group flex flex-col gap-1 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow sm:items-end sm:text-right"
                >
                  <span className="flex items-center gap-1 text-xs text-gray-400 font-semibold uppercase tracking-widest">
                    Next
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <p className="text-gray-900 font-bold text-sm leading-snug group-hover:text-[#331D2C] transition-colors">
                    {nextPost.title}
                  </p>
                </Link>
              ) : (
                <div />
              )}
            </div>
          )}

          {/* More articles */}
          <div className="mt-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-gray-900">
                  More <span className="text-[#331D2C]">Articles</span>
                </h3>
                <div className="w-10 h-1 bg-amber-400 mt-2 rounded-full" />
              </div>
              <Link
                to="/blog"
                className="text-sm text-[#331D2C] font-semibold hover:underline flex items-center gap-1"
              >
                View all <FiArrowRight />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 4)
                .map((related) => (
                  <Link
                    key={related.id}
                    to={`/blog/${related.id}`}
                    className="group flex gap-4 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="py-3 pr-4 flex flex-col justify-center">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full self-start mb-2 ${categoryStyle[related.category]}`}
                      >
                        {related.category}
                      </span>
                      <p className="text-gray-900 font-semibold text-sm leading-snug group-hover:text-[#331D2C] transition-colors line-clamp-2">
                        {related.title}
                      </p>
                      <span className="text-xs text-gray-400 mt-1.5 flex items-center gap-1">
                        <FiClock className="text-[10px]" />
                        {related.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
