import { Link, useLoaderData } from "react-router-dom";

const AllJobs = () => {
  const allJobs = useLoaderData();
  return (
    <div>
      <div className="overflow-x-auto py-5 md:py-10 lg:py-16 bg-base-200  mb-5 md:mb-10 lg:mb-16">
        <table className="table md:w-4/5 mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="font-bold text-base text-black">Job Poster </th>
              <th className="font-bold text-base text-black">Title </th>
              <th className="font-bold text-base text-black">Job Posted</th>
              <th className="font-bold text-base text-black">Application Deadline </th>
              <th className="font-bold text-base text-black">Salary Range</th>
              <th className="font-bold text-base text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allJobs?.map((job, index) => (
              <tr className="border-y-black border-x-black" key={job._id}>
                <th>{index + 1}</th>
                <td>{job.poster}</td>
                <td>{job.title}</td>
                <td>{job.date}</td>
                <td>{job.deadline}</td>
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
