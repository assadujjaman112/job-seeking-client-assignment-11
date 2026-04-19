import { useContext, useState } from "react";
import { API_BASE_URL } from "../config/api";
import { AuthContext } from "../providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineCurrencyDollar,
  HiOutlineDocumentText,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";

const CATEGORIES = ["On-Site", "Remote", "Hybrid", "Part-Time"];

const inputCls =
  "w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/60 transition-all";

const Field = ({ label, required, children }) => (
  <div className="flex flex-col gap-2">
    <label className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
      {label}
      {required && <span className="text-red-400 ml-1">*</span>}
    </label>
    {children}
  </div>
);

const Divider = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 my-7">
    <div className="h-px flex-1 bg-white/10" />
    <div className="flex items-center gap-2 text-white/40 text-xs font-semibold uppercase tracking-widest">
      <Icon className="text-amber-400 text-sm" />
      {title}
    </div>
    <div className="h-px flex-1 bg-white/10" />
  </div>
);

const AddAJob = () => {
  const { user } = useContext(AuthContext);
  const [deadline, setDeadline] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddJob = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.target;
    const newJob = {
      poster: form.name.value,
      email: user.email,
      title: form.title.value,
      category: form.category.value,
      salary: form.salary.value,
      description: form.description.value,
      date: form.date.value,
      deadline,
      number: form.number.value,
      photo: form.photo.value,
      logo: form.logo.value,
    };

    fetch(`${API_BASE_URL}/jobs`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Job Posted!",
            text: "Your job listing is now live.",
            icon: "success",
            confirmButtonColor: "#331D2C",
          });
          form.reset();
          setDeadline(new Date());
        }
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(160deg, #331D2C 0%, #4e2a42 40%, #1a0e18 100%)",
      }}
    >
      <Helmet>
        <title>iApplyNow | Post a Job</title>
      </Helmet>

      {/* Decorative glows */}
      <div className="fixed top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent)", transform: "translate(30%, -30%)" }}
      />
      <div className="fixed bottom-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #a78bfa, transparent)", transform: "translate(-30%, 30%)" }}
      />

      <div className="relative max-w-2xl mx-auto px-4 py-14">

        {/* Page header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-amber-400 text-amber-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Post a New Listing
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
            Hire Your Next{" "}
            <span className="text-amber-400">Great Talent</span>
          </h1>
          <p className="text-white/50 text-sm">
            Fill in the details below to publish your job listing.
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-5 rounded-full" />
        </div>

        {/* Form card */}
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl">

          {/* Poster strip */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-white/10 bg-white/5">
            {user.photoURL ? (
              <img src={user.photoURL} alt={user.displayName}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-amber-400/40" />
            ) : (
              <div className="w-9 h-9 rounded-full bg-amber-400 flex items-center justify-center text-amber-900 font-bold text-sm">
                {user.displayName?.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-white leading-none">
                {user.displayName}
              </p>
              <p className="text-xs text-white/40 mt-0.5">{user.email}</p>
            </div>
            <span className="ml-auto text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
              Posting as you
            </span>
          </div>

          <form onSubmit={handleAddJob} className="p-6 md:p-8">

            {/* ── Job Information ── */}
            <Divider icon={HiOutlineBriefcase} title="Job Information" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Job Title" required>
                <input type="text" name="title"
                  placeholder="e.g. Senior Frontend Engineer"
                  className={inputCls} required />
              </Field>
              <Field label="Poster Name" required>
                <input type="text" name="name"
                  defaultValue={user.displayName}
                  placeholder="Your name"
                  className={inputCls} required />
              </Field>
              <Field label="Category" required>
                <select name="category" className={`${inputCls} cursor-pointer`} required
                  defaultValue="">
                  <option value="" disabled className="bg-[#331D2C]">
                    Select a category
                  </option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat} value={cat} className="bg-[#331D2C]">
                      {cat}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Salary Range" required>
                <div className="relative">
                  <HiOutlineCurrencyDollar className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 text-base pointer-events-none" />
                  <input type="text" name="salary"
                    placeholder="e.g. $80k – $100k"
                    className={`${inputCls} pl-9`} required />
                </div>
              </Field>
            </div>

            {/* ── Description ── */}
            <Divider icon={HiOutlineDocumentText} title="Job Description" />
            <div className="space-y-4">
              <Field label="Description" required>
                <textarea name="description" rows={5}
                  placeholder="Describe the role, responsibilities, and requirements…"
                  className={`${inputCls} resize-none`} required />
              </Field>
              <Field label="Number of Applicants">
                <div className="relative">
                  <HiOutlineUserGroup className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/30 text-base pointer-events-none" />
                  <input type="number" name="number" defaultValue={0} min={0}
                    className={`${inputCls} pl-9`} />
                </div>
              </Field>
            </div>

            {/* ── Dates ── */}
            <Divider icon={HiOutlineCalendar} title="Dates" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Job Posting Date" required>
                <input type="date" name="date" className={inputCls} required />
              </Field>
              <Field label="Application Deadline" required>
                <DatePicker
                  selected={deadline}
                  onChange={(date) => setDeadline(date)}
                  minDate={new Date()}
                  dateFormat="MMMM d, yyyy"
                  className={inputCls}
                  wrapperClassName="w-full"
                />
              </Field>
            </div>

            {/* ── Media ── */}
            <Divider icon={HiOutlinePhotograph} title="Media" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Job Photo URL" required>
                <input type="url" name="photo"
                  placeholder="https://example.com/image.jpg"
                  className={inputCls} required />
              </Field>
              <Field label="Company Logo URL" required>
                <input type="url" name="logo"
                  placeholder="https://example.com/logo.png"
                  className={inputCls} required />
              </Field>
            </div>

            {/* ── Submit ── */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-8 w-full py-3.5 rounded-xl font-bold text-amber-900 text-sm bg-amber-400 hover:bg-amber-300 transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-400/20"
            >
              {isSubmitting ? "Publishing…" : "Publish Job Listing"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAJob;
