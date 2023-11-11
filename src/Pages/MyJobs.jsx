import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const MyJobs = () => {
  const allJobs = useLoaderData();
  const { user } = useContext(AuthContext);
  const myJobs = allJobs.filter((job) => job.email === user.email);
  return (
    <div>
      <div className="overflow-x-auto py-5 md:py-10 lg:py-16 bg-base-200  mb-5 md:mb-10 lg:mb-16">
        <table className="table md:w-4/5 mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="font-bold text-base text-black">Title </th>
              <th className="font-bold text-base text-black">Job Type </th>
              <th className="font-bold text-base text-black">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myJobs?.map((job, index) => (
              <tr className="border-y-black border-x-black" key={job._id}>
                <th>{index + 1}</th>
                <td>{job.title}</td>
                <td>{job.category}</td>
                <td>
                  <button className="mr-5 btn mb-5 bg-[#331D2C] text-white hover:text-black">Update</button>
                  <button className="btn bg-[#331D2C] text-white hover:text-black">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyJobs;
