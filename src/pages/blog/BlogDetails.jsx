import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  FiCalendar,
  FiClock,
  FiArrowLeft,
  FiArrowRight,
  FiBookmark,
  FiShare2,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";
import blogPosts from "../../data/blogPosts";

const categoryStyle = {
  Tech: "bg-amber-400 text-amber-900",
  Career: "bg-violet-500 text-white",
};

const categoryGlow = {
  Tech: "from-amber-400/20 to-transparent",
  Career: "from-violet-500/20 to-transparent",
};

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  const currentIndex = blogPosts.findIndex((p) => p.id === Number(id));
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const headings = post?.content
    .filter((b) => b.type === "heading")
    .map((b) => b.text);

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

      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #331D2C 0%, #4e2a42 55%, #1a0e18 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #f59e0b, transparent)",
            transform: "translate(35%, -35%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-15 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #a78bfa, transparent)",
            transform: "translate(-35%, 35%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #f59e0b, transparent)",
          }}
        />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative w-11/12 md:w-4/5 mx-auto py-16 lg:py-24">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm mb-8 transition-colors group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full ${categoryStyle[post.category]}`}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-gray-400 text-xs">
              <FiClock /> {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-gray-400 text-xs">
              <FiCalendar /> {post.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl">
            {post.title}
          </h1>

          <p className="text-gray-300 text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 mt-8">
            <div className="w-11 h-11 rounded-full bg-amber-400 flex items-center justify-center text-amber-900 font-extrabold text-base flex-shrink-0 ring-2 ring-amber-400/40">
              {post.avatar}
            </div>
            <div>
              <p className="text-white font-bold text-sm">{post.author}</p>
              <p className="text-gray-400 text-xs mt-0.5">
                Full-stack Developer & Career Coach
              </p>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-amber-400 transition-colors">
                <FiBookmark className="text-sm" />
              </button>
              <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-amber-400 transition-colors">
                <FiShare2 className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Featured image ── */}
      <div className="w-11/12 md:w-4/5 mx-auto -mt-10 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl h-64 md:h-[420px] ring-4 ring-white">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
        </div>
      </div>

      {/* ── Body: article + sidebar ── */}
      <div className="w-11/12 md:w-4/5 mx-auto py-14 md:py-20">
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* ── Article ── */}
          <article className="flex-1 min-w-0">
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
                  <div key={i} className="mt-12 mb-5 flex items-start gap-3">
                    <span className="mt-1 w-1 h-7 rounded-full bg-amber-400 flex-shrink-0" />
                    <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-snug">
                      {block.text}
                    </h2>
                  </div>
                );
              }

              if (block.type === "list") {
                return (
                  <div
                    key={i}
                    className="mb-8 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                  >
                    <div className="h-1.5 bg-gradient-to-r from-amber-400 via-amber-300 to-transparent" />
                    <ul className="p-6 space-y-4">
                      {block.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="mt-2 w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 ring-2 ring-amber-400/25" />
                          <span className="text-gray-600 text-base leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              return null;
            })}

            {/* ── Key Takeaway banner ── */}
            <div
              className="my-12 rounded-2xl p-7 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #331D2C 0%, #4e2a42 80%, #1a0e18 100%)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, #f59e0b, transparent)",
                  transform: "translate(30%, -30%)",
                }}
              />
              <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">
                Key Takeaway
              </p>
              <p className="text-white text-lg font-semibold leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* ── Author card ── */}
            <div className="mt-10 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div
                className="h-2"
                style={{
                  background:
                    "linear-gradient(90deg, #331D2C, #4e2a42, #f59e0b)",
                }}
              />
              <div className="bg-white p-6 flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-[#331D2C] flex items-center justify-center text-white text-2xl font-extrabold flex-shrink-0 ring-4 ring-[#331D2C]/15">
                  {post.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-[10px] text-amber-500 uppercase tracking-widest font-bold mb-0.5">
                    Written by
                  </p>
                  <p className="text-gray-900 font-extrabold text-lg">
                    {post.author}
                  </p>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                    Full-stack developer and career growth enthusiast sharing
                    practical insights for modern developers.
                  </p>
                </div>
                <div className="hidden sm:flex flex-col gap-2">
                  <a
                    href="#"
                    className="p-2 rounded-full bg-sky-50 hover:bg-sky-100 text-sky-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <FiTwitter />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin />
                  </a>
                </div>
              </div>
            </div>

            {/* ── Prev / Next ── */}
            {(prevPost || nextPost) && (
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {prevPost ? (
                  <Link
                    to={`/blog/${prevPost.id}`}
                    className="group relative flex flex-col gap-2 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-amber-200 transition-all overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400 rounded-l-2xl" />
                    <span className="flex items-center gap-1 text-xs text-gray-400 font-bold uppercase tracking-widest pl-2">
                      <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                      Previous
                    </span>
                    <p className="text-gray-900 font-bold text-sm leading-snug group-hover:text-[#331D2C] transition-colors pl-2">
                      {prevPost.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}

                {nextPost ? (
                  <Link
                    to={`/blog/${nextPost.id}`}
                    className="group relative flex flex-col gap-2 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-amber-200 transition-all overflow-hidden sm:items-end sm:text-right"
                  >
                    <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#331D2C] rounded-r-2xl" />
                    <span className="flex items-center gap-1 text-xs text-gray-400 font-bold uppercase tracking-widest pr-2">
                      Next
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <p className="text-gray-900 font-bold text-sm leading-snug group-hover:text-[#331D2C] transition-colors pr-2">
                      {nextPost.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            )}
          </article>

          {/* ── Sidebar ── */}
          <aside className="lg:w-72 xl:w-80 flex-shrink-0 space-y-6 lg:sticky lg:top-24">

            {/* Table of contents */}
            {headings && headings.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-amber-400 flex-shrink-0" />
                  <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wide">
                    In This Article
                  </h3>
                </div>
                <nav className="p-4 space-y-1">
                  {headings.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 group cursor-pointer"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-sm text-gray-500 group-hover:text-[#331D2C] font-medium transition-colors leading-snug">
                        {h}
                      </span>
                    </div>
                  ))}
                </nav>
              </div>
            )}

            {/* Tags */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-5 rounded-full bg-violet-400 flex-shrink-0" />
                <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wide">
                  Tags
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  post.category,
                  "Developer",
                  "Career",
                  "Tips",
                  "2025",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-600 hover:bg-[#331D2C] hover:text-white transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-1 h-5 rounded-full bg-amber-400 flex-shrink-0" />
                <h3 className="text-sm font-extrabold text-gray-900 uppercase tracking-wide">
                  Share
                </h3>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-500 text-sm font-semibold transition-colors">
                  <FiTwitter /> Twitter
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 text-sm font-semibold transition-colors">
                  <FiLinkedin /> LinkedIn
                </button>
              </div>
            </div>

            {/* CTA newsletter */}
            <div
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, #331D2C 0%, #4e2a42 80%, #1a0e18 100%)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-20 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, #f59e0b, transparent)",
                  transform: "translate(30%, -30%)",
                }}
              />
              <p className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
                Stay Updated
              </p>
              <p className="text-white font-bold text-base mb-1">
                Get articles like this in your inbox
              </p>
              <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                No spam, just practical insights for developers and job seekers.
              </p>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 text-white placeholder-gray-400 text-sm outline-none border border-white/10 focus:border-amber-400 transition-colors mb-3"
              />
              <button className="w-full py-2.5 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold text-sm rounded-xl transition-colors">
                Subscribe Free
              </button>
            </div>
          </aside>
        </div>

        {/* ── More Articles ── */}
        <div className="mt-20">
          {/* Section header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">
                More <span className="text-[#331D2C]">Articles</span>
              </h3>
              <div className="w-10 h-1 bg-amber-400 mt-2 rounded-full" />
            </div>
            <Link
              to="/blog"
              className="flex items-center gap-1.5 px-4 py-2 bg-[#331D2C] hover:bg-[#4e2a42] text-white text-sm font-semibold rounded-xl transition-colors"
            >
              View all <FiArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 4)
              .map((related, i) => (
                <Link
                  key={related.id}
                  to={`/blog/${related.id}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span
                      className={`absolute top-2.5 left-2.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${categoryStyle[related.category]}`}
                    >
                      {related.category}
                    </span>
                    {i === 0 && (
                      <span className="absolute top-2.5 right-2.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-amber-400 text-amber-900">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <p className="text-gray-900 font-bold text-sm leading-snug group-hover:text-[#331D2C] transition-colors line-clamp-2 flex-1">
                      {related.title}
                    </p>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <FiClock className="text-[10px]" />
                        {related.readTime}
                      </span>
                      <span className="text-xs text-[#331D2C] font-semibold flex items-center gap-0.5 group-hover:gap-1.5 transition-all">
                        Read <FiArrowRight className="text-[10px]" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* ── Newsletter CTA banner ── */}
        <div
          className="mt-20 rounded-2xl p-10 relative overflow-hidden text-center"
          style={{
            background:
              "linear-gradient(135deg, #331D2C 0%, #4e2a42 55%, #1a0e18 100%)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-15 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #f59e0b, transparent)",
              transform: "translate(30%, -30%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-52 h-52 rounded-full opacity-15 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #a78bfa, transparent)",
              transform: "translate(-30%, 30%)",
            }}
          />
          <div className="relative">
            <span className="inline-block bg-amber-400 text-amber-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              iApplyNow Blog
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Enjoyed This Article?
            </h2>
            <p className="text-gray-300 max-w-md mx-auto mb-8 text-sm leading-relaxed">
              Explore more tech deep-dives and career guides written to help you
              land the job you deserve.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold rounded-xl transition-colors text-sm"
            >
              Browse All Articles <FiArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
