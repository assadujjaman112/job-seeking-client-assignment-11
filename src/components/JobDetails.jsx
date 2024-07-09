import moment from "moment";
import { Link } from "react-router-dom";

const JobDetails = ({ job }) => {
  const {
    _id,
    poster,
    title,
    date,
    deadline,
    salary,
    number,
    photo,
    category,
  } = job;

  return (
    // <div
    //   className=" text-white shadow-md p-8 transition-transform ease-in hover:-translate-y-1 hover:shadow-zinc-500 hover:shadow-xl duration-700 rounded-lg"
    //   style={{
    //     backgroundImage: `url(${photo})`,
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //   }}
    // >
    //   <div className="px-1 space-y-1 py-5">
    //     <p className="text-xl">
    //       <span className="font-bold text-lg">Job Poster : </span>
    //       {poster}
    //     </p>
    //     <p className="text-lg">
    //       <span className="font-bold text-lg">Job Title : </span>
    //       {title}
    //     </p>
    //     <p className="text-lg">
    //       <span className="font-bold text-lg">Job Type : </span>
    //       {category}
    //     </p>
    //     <p className="text-lg">
    //       <span className="font-bold text-lg">Job Posted On : </span>
    //       {moment(date).format(" Do MMMM YYYY ")}
    //     </p>
    //     <p className="text-lg">
    //       <span className="font-bold text-lg">Application Deadline : </span>
    //       {moment(deadline).format(" Do MMMM YYYY ")}
    //     </p>
    //     <p className="text-lg">
    //       <span className="font-bold text-lg">Salary Range : $</span>
    //       {salary}
    //     </p>
    //     <p className="text-lg">
    //       <span className="font-bold text-lg">Applicants Number : </span>
    //       {number}
    //     </p>
    //     <div className="card-actions mt-2">
    //       <Link to={`/singleJob/${_id}`}>
    //         <button className="btn bg-[#331D2C] text-white hover:text-black">
    //           View details
    //         </button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>

    <div
      className="relative text-slate-100 shadow-md p-8 transition-transform ease-in hover:-translate-y-1 hover:shadow-zinc-500 hover:shadow-xl duration-700 rounded-lg"
      style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gray-950 opacity-[80%] rounded-lg"></div>
      <div className="relative px-1 space-y-1 py-5 z-10">
        <p className="text-xl">
          <span className="font-bold text-lg">Job Poster : </span>
          {poster}
        </p>
        <p className="text-lg">
          <span className="font-bold text-lg">Job Title : </span>
          {title}
        </p>
        <p className="text-lg">
          <span className="font-bold text-lg">Job Type : </span>
          {category}
        </p>
        <p className="text-lg">
          <span className="font-bold text-lg">Job Posted On : </span>
          {moment(date).format(" Do MMMM YYYY ")}
        </p>
        <p className="text-lg">
          <span className="font-bold text-lg">Application Deadline : </span>
          {moment(deadline).format(" Do MMMM YYYY ")}
        </p>
        <p className="text-lg">
          <span className="font-bold text-lg">Salary Range : $</span>
          {salary}
        </p>
        <p className="text-lg">
          <span className="font-bold text-lg">Applicants Number : </span>
          {number}
        </p>
        <div className="">
          <Link to={`/singleJob/${_id}`}>
            <button className="btn bg-[#331D2C] text-white hover:text-black mt-5">
              View details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
