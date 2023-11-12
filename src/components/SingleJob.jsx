import { useContext} from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import moment from "moment";

const SingleJob = () => {
  const { user } = useContext(AuthContext);
  const job = useLoaderData();
  console.log(job);
  const {
    poster,
    email,
    category,
    date,
    deadline,
    description,
    logo,
    photo,
    salary,
    number,
    title,
  } = job;

  const handleApply = (event) => {
    event.preventDefault();
    const form = event.target;

    const resume = form.resume.value;
    const applicantEmail = form.email.value;
    const applicant = form.name.value;
    const posterEmail = email


    const jobWithoutId = {
      poster,
      posterEmail,
      category,
      date,
      deadline,
      description,
      applicantEmail,
      logo,
      number,
      photo,
      applicant,
      salary,
      title,
      resume,
    };

    console.log("clicked", resume);
    if (
      job.email === user.email ||
      moment(deadline).isBefore(moment(new Date()))
    ) {
      Swal.fire({
        title: "Error!",
        text: "you can't apply for this job!!!",
        icon: "error",
      });
      return;
    }
    fetch("http://localhost:5000/appliedJobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobWithoutId),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Successfully added a job!!!",
            icon: "success",
          });
          job.number = parseInt(job.number) + 1;
        }
      });
  };

  return (
    <div className="w-full bg-base-200 py-5 md:py-10 lg:py-16 mb-5 md:mb-10 lg:mb-16">
      <div className="card w-11/12 md:w-4/5 lg:w-3/5 mx-auto  bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={job.photo} />
        </figure>
        <div className="card-body px-10 py-5">
          <img src={job.logo} className="w-20 h-20 rounded-full" alt="" />
          <p className="text-lg">
            <span className="font-extrabold">Job Poster : </span>
            {job.poster}
          </p>
          <p className="text-lg">
            <span className="font-extrabold">Job Title : </span>
            {job.title}
          </p>
          <p className="text-lg">
            <span className="font-extrabold">Job Description : </span>
            {job.description}
          </p>
          <p className="text-lg">
            <span className="font-extrabold">Salary Range : $</span>
            {job.salary}
          </p>
          <p className="text-lg">
            <span className="font-extrabold">Application Deadline : </span>
            {moment(job.deadline).format("Do MMMM YYYY")}
          </p>
          <p className="text-lg">
            <span className="font-extrabold">Number of Applicants : </span>
            {job.number}
          </p>

          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn bg-[#331D2C] text-white hover:text-black my-5"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Apply
          </button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <form onSubmit={handleApply} action="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    defaultValue={user.displayName}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    defaultValue={user.email}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Resume Link</span>
                  </label>
                  <input
                    type="text"
                    name="resume"
                    placeholder="Resume Link"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="modal-action flex justify-center">
                  <input
                    type="submit"
                    value="Submit Application"
                    className="btn w-1/3 bg-[#331D2C] text-white hover:text-black mb-5"
                  />
                  <form method="dialog" className="w-1/3">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn w-full bg-[#331D2C] text-white hover:text-black mb-5">
                      Close
                    </button>
                  </form>
                </div>
              </form>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default SingleJob;
