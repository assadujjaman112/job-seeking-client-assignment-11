import { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";

const Review = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mt-5 md:mt-10 lg:mt-16">
      <h1 className="text-center font-bold text-3xl md:5xl lg:7xl my-5">
        Client Reviews
      </h1>
      <div className="flex items-center justify-center">
        <p className="text-center text-2xl mr-5"> 4.7/5</p>
        <AiOutlineStar className="text-3xl text-yellow-600"></AiOutlineStar>
        <AiOutlineStar className="text-3xl text-yellow-600"></AiOutlineStar>
        <AiOutlineStar className="text-3xl text-yellow-600"></AiOutlineStar>
        <AiOutlineStar className="text-3xl text-yellow-600"></AiOutlineStar>
        <AiOutlineStar className="text-3xl text-yellow-600"></AiOutlineStar>
      </div>
      <p className="text-lg text-center">Based on 10,000 Reviews</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {reviews?.map((review) => (
          <div
            key={review.id}
            className="text-center bg-stone-200 px-5 py-8 rounded-lg space-y-5"
          >
            <div className="flex justify-center">
              <img className="rounded-full w-28 h-28" src={review.img} alt="" />
            </div>
            <h1 className="text-xl font-bold">{review.name}</h1>
            <p className="font-bold">{review.role}</p>
            <p>{review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
