import { Link } from "react-router-dom";
import { FiClock, FiCalendar, FiArrowRight } from "react-icons/fi";

const categoryStyle = {
  Tech: "bg-amber-400 text-amber-900",
  Career: "bg-[#331D2C]/10 text-[#331D2C]",
};

const BlogCard = ({ post }) => (
  <Link
    to={`/blog/${post.id}`}
    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-shadow duration-300"
  >
    {/* Thumbnail */}
    <div className="relative overflow-hidden h-48">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <span
        className={`absolute top-3 left-3 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${categoryStyle[post.category]}`}
      >
        {post.category}
      </span>
    </div>

    {/* Body */}
    <div className="flex flex-col flex-1 p-6">
      <h3 className="text-gray-900 font-bold text-lg leading-snug mb-3 group-hover:text-[#331D2C] transition-colors">
        {post.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-1">
        {post.excerpt}
      </p>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#331D2C] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {post.avatar}
          </div>
          <div>
            <p className="text-gray-800 text-xs font-semibold">{post.author}</p>
            <div className="flex items-center gap-2 text-gray-400 text-xs mt-0.5">
              <span className="flex items-center gap-1">
                <FiCalendar className="text-[10px]" />
                {post.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <FiClock className="text-[10px]" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
        <span className="flex items-center gap-1 text-[#331D2C] font-semibold text-xs group-hover:gap-2 transition-all">
          Read <FiArrowRight />
        </span>
      </div>
    </div>
  </Link>
);

export default BlogCard;
