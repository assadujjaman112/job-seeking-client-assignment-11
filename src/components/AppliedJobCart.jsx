import moment from "moment";

const AppliedJobCart = ({ job }) => {
  const { poster, title, date, deadline, salary, number, category, photo } =
    job;
  return (
    <div className="card card-compact bg-white shadow-md">
      <div className="w-full rounded-t-lg">
        <img src={photo} alt="" className="w-full rounded-t-lg" />
      </div>
      <div className="card-body pl-10">
        <p className="card-title">
          <span className="font-extrabold">Job Poster : </span>
          {poster}
        </p>
        <p className="text-base">
          <span className="font-bold text-lg">Job Title : </span>
          {title}
        </p>
        <p className="text-base">
          <span className="font-bold text-lg">Job Type : </span>
          {category}
        </p>
        <p className="text-bse">
          <span className="font-bold text-lg">Job Posted On : </span>
          {moment(date).format(" Do MMMM YYYY ")}
        </p>
        <p className="text-base">
          <span className="font-bold text-lg">Application Deadline : </span>
          {moment(deadline).format(" Do MMMM YYYY ")}
        </p>
        <p className="text-base">
          <span className="font-bold text-lg">Salary Range : </span>
          $ {salary}
        </p>
        <p className="text-base">
          <span className="font-bold text-lg">Applicants Number : </span>
          {number}
        </p>
      </div>
    </div>
  );
};

export default AppliedJobCart;
