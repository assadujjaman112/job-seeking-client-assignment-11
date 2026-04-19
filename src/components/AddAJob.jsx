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
  HiOutlineTag,
  HiOutlineUser,
  HiOutlineUserGroup,
} from "react-icons/hi";

const CATEGORIES = ["On-Site", "Remote", "Hybrid", "Part-Time"];

const FormSection = ({ icon: Icon, title, children }) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 mb-4">
      <div className="w-7 h-7 rounded-lg bg-amber-400/20 flex items-center justify-center flex-shrink-0">
        <Icon className="text-amber-600 text-sm" />
      </div>
      <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
        {title}
      </h3>
    </div>
    <div className="space-y-4">{children}</div>
  </div>
);

const FieldGroup = ({ children }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
);

const Field = ({ label, required, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-medium text-gray-600">
      {label}
      {required && <span className="text-red-400 ml-0.5">*</span>}
    </label>
    {children}
  </div>
);

const inputCls =
  "w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-800 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400 transition-all";

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
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>iApplyNow | Post a Job</title>
      </Helmet>

      {/* ── Hero banner ── */}
      <section
        className="relative overflow-hidden py-14 px-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, #331D2C 0%, #4e2a42 55%, #1a0e18 100%)",
        }}
      >
        {/* Decorative glows — matches Home page */}
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #f59e0b, transparent)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #a78bfa, transparent)",
            transform: "translate(-30%, 30%)",
          }}
        />

        <div className="relative">
          <span className="inline-block bg-amber-400 text-amber-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
            Post a New Listing
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
            Hire Your Next <span className="text-amber-400">Great Talent</span>
          </h1>
          <p className="text-gray-300 text-base max-w-md mx-auto">
            Fill in the details below to publish your job listing and start
            receiving applications.
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-5 rounded-full" />
        </div>
      </section>

      {/* ── Form card ── */}
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          {/* Poster identity strip */}
          <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 border-b border-gray-100">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName}
                className="w-9 h-9 rounded-full object-cover"
              />
            ) : (
              <div className="w-9 h-9 rounded-full bg-[#331D2C] flex items-center justify-center text-white font-bold text-sm">
                {user.displayName?.charAt(0).toUpperCase()}
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-gray-800 leading-none">
                {user.displayName}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{user.email}</p>
            </div>
            <span className="ml-auto text-xs font-semibold text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
              Posting as you
            </span>
          </div>

          <form onSubmit={handleAddJob} className="p-6 md:p-8">

            {/* ── Section 1: Job Info ── */}
            <FormSection icon={HiOutlineBriefcase} title="Job Information">
              <FieldGroup>
                <Field label="Job Title" required>
                  <input
                    type="text"
                    name="title"
                    placeholder="e.g. Senior Frontend Engineer"
                    className={inputCls}
                    required
                  />
                </Field>
                <Field label="Poster Name" required>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user.displayName}
                    placeholder="Your name"
                    className={inputCls}
                    required
                  />
                </Field>
              </FieldGroup>
              <FieldGroup>
                <Field label="Category" required>
                  <select name="category" className={inputCls} required>
                    <option value="" disabled>
                      Select a category
                    </option>
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Salary Range" required>
                  <div className="relative">
                    <HiOutlineCurrencyDollar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none" />
                    <input
                      type="text"
                      name="salary"
                      placeholder="e.g. $80k – $100k"
                      className={`${inputCls} pl-9`}
                      required
                    />
                  </div>
                </Field>
              </FieldGroup>
            </FormSection>

            <div className="border-t border-gray-100 mb-8" />

            {/* ── Section 2: Description ── */}
            <FormSection icon={HiOutlineDocumentText} title="Job Description">
              <Field label="Description" required>
                <textarea
                  name="description"
                  rows={5}
                  placeholder="Describe the role, responsibilities, and requirements…"
                  className={`${inputCls} resize-none`}
                  required
                />
              </Field>
              <Field label="Number of Applicants">
                <div className="relative">
                  <HiOutlineUserGroup className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none" />
                  <input
                    type="number"
                    name="number"
                    defaultValue={0}
                    min={0}
                    className={`${inputCls} pl-9`}
                  />
                </div>
              </Field>
            </FormSection>

            <div className="border-t border-gray-100 mb-8" />

            {/* ── Section 3: Dates ── */}
            <FormSection icon={HiOutlineCalendar} title="Dates">
              <FieldGroup>
                <Field label="Job Posting Date" required>
                  <input
                    type="date"
                    name="date"
                    className={inputCls}
                    required
                  />
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
              </FieldGroup>
            </FormSection>

            <div className="border-t border-gray-100 mb-8" />

            {/* ── Section 4: Media ── */}
            <FormSection icon={HiOutlinePhotograph} title="Media">
              <FieldGroup>
                <Field label="Job Photo URL" required>
                  <input
                    type="url"
                    name="photo"
                    placeholder="https://example.com/image.jpg"
                    className={inputCls}
                    required
                  />
                </Field>
                <Field label="Company Logo URL" required>
                  <input
                    type="url"
                    name="logo"
                    placeholder="https://example.com/logo.png"
                    className={inputCls}
                    required
                  />
                </Field>
              </FieldGroup>
            </FormSection>

            {/* ── Submit ── */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-xl font-bold text-amber-900 text-sm transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed bg-amber-400 hover:bg-amber-500"
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
