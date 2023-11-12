import moment from "moment";
import { Link } from "react-router-dom";

const JobDetails = ({ job }) => {
  const { _id, poster, title, date, deadline, salary, number, category } = job;
  return (
    <div className="card card-compact  bg-zinc-100 shadow-md p-8">
      <div className="card-body">
        <p className="card-title">
          <span className="font-extrabold">Job Poster : </span>
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
          {moment(date).format( " Do MMMM YYYY ")}
        </p>
        <p className="text-lg">
          <span className="font-bold text-lg">Application Deadline : </span>
          {moment(deadline).format( " Do MMMM YYYY ")}
        </p>
        <p className="text-lg">
          <span className="font-bold text-lg">Salary Range : $</span>
          {salary}
        </p>
        <p className="text-lg">
          <span className="font-bold text-lg">Applicants Number : </span>
          {number}
        </p>
        <div className="card-actions">
          <Link to={`/singleJob/${_id}`}>
            <button className="btn bg-[#331D2C] text-white hover:text-black">
              View details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
