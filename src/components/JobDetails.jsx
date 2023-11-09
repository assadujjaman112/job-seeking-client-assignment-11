import { Link } from "react-router-dom";

const JobDetails = ({ job }) => {
  const {_id, poster, title, date, deadline, salary, number, category } = job;
  return (
    <div className="card card-compact  bg-slate-100 shadow-xl p-8">
      <div className="card-body">
        <p className="card-title">Job Poster : <span className="font-extrabold">{poster}</span></p>
        <p className="text-lg">Job Title : <span className="font-bold text-lg">{title}</span></p>
        <p className="text-lg">Job Type : <span className="font-bold text-lg">{category}</span></p>
        <p className="text-lg">Job Posted On  : <span className="font-bold text-lg">{date}</span></p>
        <p className="text-lg">Application Deadline : <span className="font-bold text-lg">{deadline}</span></p>
        <p className="text-lg">Salary Range : <span className="font-bold text-lg">{salary}</span></p>
        <p className="text-lg">Applicants Number : <span className="font-bold text-lg">{number}</span></p>
        <div className="card-actions">
          <Link to={`/singleJob/${_id}`}><button className="btn bg-[#331D2C] text-white hover:text-black">View details</button></Link>
        </div>
      </div>
    </div>

  );
};

export default JobDetails;
