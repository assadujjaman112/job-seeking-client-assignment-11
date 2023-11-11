import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const AddAJob = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());

  const handleAddJob = (event) => {
    event.preventDefault();

    const form = event.target;

    const poster = form.name.value;
    const email = user.email;
    const title = form.title.value;
    const category = form.category.value;
    const salary = form.salary.value;
    const description = form.description.value;
    const date = form.date.value;
    const deadline = startDate;
    const number = form.number.value;
    const photo = form.photo.value;

    const newJob = {
      poster,
      email,
      title,
      category,
      salary,
      description,
      date,
      deadline,
      number,
      photo,
    };
    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Successfully added a job!!!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 mb-10 py-5 md:py-10 lg:py-16">
      <div className="card flex-shrink-0 w-11/12 lg:w-3/5  mx-auto my-10 md:my-16 lg:my-0 shadow-2xl bg-base-100">
        <h1 className="text-center text-3xl font-bold mt-5">Add A Product</h1>
        <form onSubmit={handleAddJob} className="card-body">
          {/* Row - 1 */}
          <div className="flex gap-5">
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Job Title</span>
              </label>
              <input
                type="text"
                name="title"
                placeholder="Job Title"
                className="input input-bordered w-full text-xs"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user.displayName}
                placeholder="User Name"
                className="input input-bordered w-full text-xs"
                required
              />
            </div>
          </div>
          {/* Row - 2 */}
          <div className="flex gap-5">
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Job Category"
                className="input input-bordered w-full text-xs"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Salary Range</span>
              </label>
              <input
                type="text"
                name="salary"
                placeholder="Salary Range"
                className="input input-bordered w-full text-xs"
                required
              />
            </div>
          </div>
          {/* Row - 3 */}
          <div className="flex gap-5">
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Job Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered w-full text-xs"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Job Posting Date</span>
              </label>
              <input
                type="date"
                name="date"
                placeholder="Job Posting Date"
                className="input input-bordered w-full text-xs"
                required
              />
            </div>
          </div>
          {/* Row - 4 */}
          <div className="flex gap-5">
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Application Deadline</span>
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div className="w-1/2">
              <label className="label">
                <span className="label-text">Job Applicants Number</span>
              </label>
              <input
                type="text"
                name="number"
                defaultValue={0}
                placeholder="Job Applicants Number"
                className="input input-bordered w-full text-xs"
                required
              />
            </div>
          </div>
          {/* Row - 5 */}
          <div className="w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full text-xs"
              required
            />
          </div>
          <div className="w-full">
            <input
              className="btn bg-[#331D2C] text-white hover:text-black btn-block my-8"
              type="submit"
              value="Add  A Job"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAJob;
