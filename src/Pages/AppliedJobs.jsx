import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import AppliedJobCart from "../components/AppliedJobCart";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const jobs = useLoaderData();
  const filteredJobs = jobs?.filter(
    (job) => job.applicantEmail === user?.email
  );
  const [appliedJobs, setAppliedJobs] = useState(filteredJobs);

  const handleFilteredJob = (filter) => {
    if (filter === "All") {
      setAppliedJobs(filteredJobs);
    } else if (filter === "On Site") {
      const onSiteJobs = filteredJobs.filter(
        (job) => job.category === "On Site"
      );
      setAppliedJobs(onSiteJobs);
    } else if (filter === "Remote") {
      const remoteJobs = filteredJobs.filter(
        (job) => job.category === "Remote"
      );
      setAppliedJobs(remoteJobs);
    } else if (filter === "Hybrid") {
      const hybridJobs = filteredJobs.filter(
        (job) => job.category === "Hybrid"
      );
      setAppliedJobs(hybridJobs);
    } else if (filter === "Part Time") {
      const partTimeJobs = filteredJobs.filter(
        (job) => job.category === "Part Time"
      );
      setAppliedJobs(partTimeJobs);
    }
  };
  return (
    <div className="w-full bg-slate-100 py-5 md:py-10 lg:py-16 mb-5 md:mb-10 lg:mb-16">
        <Helmet>
        <title>iApplyNow | Applied Jobs</title>
      </Helmet>
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
        Applied Jobs
      </h1>

      {appliedJobs?.length > 0 && (
        <div className="w-4/5 mx-auto">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn m-1 bg-[#331D2C] text-white hover:text-black"
            >
              Click To Filter Job
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => handleFilteredJob("All")}>
                <a>All Job</a>
              </li>
              <li onClick={() => handleFilteredJob("Remote")}>
                <a>Remote Job</a>
              </li>
              <li onClick={() => handleFilteredJob("On Site")}>
                <a>On site</a>
              </li>
              <li onClick={() => handleFilteredJob("Hybrid")}>
                <a>Hybrid</a>
              </li>
              <li onClick={() => handleFilteredJob("Part Time")}>
                <a>Part Time</a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-4/5 mx-auto my-5 md:my-10 lg:my-16">
        {appliedJobs.map((job) => (
          <AppliedJobCart key={job._id} job={job}></AppliedJobCart>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
