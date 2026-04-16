import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { BsQuote } from "react-icons/bs";

const Review = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          What Our <span className="text-[#331D2C]">Users Say</span>
        </h2>
        <div className="flex items-center justify-center gap-1 mt-3">
          {[...Array(5)].map((_, i) => (
            <AiFillStar key={i} className="text-amber-400 text-xl" />
          ))}
          <span className="ml-2 text-gray-700 font-semibold">4.7/5</span>
          <span className="text-gray-400 text-sm ml-1">· 10,000 Reviews</span>
        </div>
        <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews?.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
          >
            <BsQuote className="text-4xl text-[#331D2C]/20 mb-3" />
            <p className="text-gray-600 text-sm leading-relaxed flex-1">
              {review.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <img
                className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-400 ring-offset-2"
                src={review.img}
                alt=""
              />
              <div>
                <h4 className="font-bold text-gray-900 text-sm">{review.name}</h4>
                <p className="text-xs text-gray-500">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
