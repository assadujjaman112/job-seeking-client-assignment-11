import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const MyJobs = () => {
  const allJobs = useLoaderData();
  const { user } = useContext(AuthContext);
  const filteredJobs = allJobs.filter((job) => job.email === user.email);
  const [myJobs, setMyjJobs] = useState(filteredJobs);

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/job/${id}`,{
          method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            const remaining = myJobs?.filter(job => job._id !== id);
            setMyjJobs(remaining) 
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });

          }
        })
        
      }
    });
  }



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
                  <button onClick={()=>handleDelete(job._id)} className="btn bg-[#331D2C] text-white hover:text-black">Delete</button>
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
