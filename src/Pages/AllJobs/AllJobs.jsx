import moment from "moment";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllJobs = () => {
  const allJobs = useLoaderData();
  const [displayAllJobs, setDisplayAllJobs] = useState(allJobs);

  const handleSearch = (event) => {
    event.preventDefault();

    const form = event.target;

    const filteredAllJobs = allJobs?.filter((job) =>
      job.title.toLowerCase().includes(form.search.value.toLowerCase())
    );
    setDisplayAllJobs(filteredAllJobs);
  };
  return (
    <div>
      <div className="overflow-x-auto py-5 md:py-10 lg:py-16 bg-base-200  mb-5 md:mb-10 lg:mb-16">
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
          All Jobs
        </h1>

        <form onSubmit={handleSearch} className="flex justify-center mb-5">
          <div className="form-control">
            <input
              type="text"
              name="search"
              placeholder="Search Here"
              className="py-2 pl-5 pr-10 rounded-l-lg"
              required
            />
          </div>
          <div>
            <input
              className="py-2 px-6 rounded-r-lg bg-[#331D2C] text-white hover:text-black"
              type="submit"
              value="Search"
            />
          </div>
        </form>

        <table className="table md:w-4/5 mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="font-bold text-base text-black">Job Poster </th>
              <th className="font-bold text-base text-black">Title </th>
              <th className="font-bold text-base text-black">Job Posted</th>
              <th className="font-bold text-base text-black">
                Application Deadline{" "}
              </th>
              <th className="font-bold text-base text-black">Salary Range</th>
              <th className="font-bold text-base text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {displayAllJobs?.map((job, index) => (
              <tr className="border-y-black border-x-black" key={job._id}>
                <th>{index + 1}</th>
                <td>{job.poster}</td>
                <td>{job.title}</td>
                <td>{moment(job.date).format("Do MMMM YYYY")}</td>
                <td>{moment(job.deadline).format("Do MMMM YYYY")}</td>
                <td>{job.salary}</td>
                <td>
                  <Link to={`/singleJob/${job._id}`}>
                    <button className="mr-5 btn mb-5 bg-[#331D2C] text-white hover:text-black">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllJobs;
