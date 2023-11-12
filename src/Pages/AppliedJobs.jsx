import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import AppliedJobCart from "../components/AppliedJobCart";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const jobs = useLoaderData();
  const filteredJobs = jobs?.filter(
    (job) => job.applicantEmail === user?.email
  );
  console.log(jobs);
  return (
    <div className="w-full bg-slate-100 py-5 md:py-10 lg:py-16 mb-5 md:mb-10 lg:mb-16">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
        Applied Jobs
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-4/5 mx-auto my-5 md:my-10 lg:my-16">
        {filteredJobs.map((job) => (
          <AppliedJobCart key={job._id} job={job}></AppliedJobCart>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
