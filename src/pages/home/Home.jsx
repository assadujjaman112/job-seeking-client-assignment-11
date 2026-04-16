import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobDetails from "../../components/JobDetails";
import Review from "../../components/Review";
import { Helmet } from "react-helmet-async";
import AboutUs from "../../components/AboutUs";
import JobSearchTips from "../../components/JobSearchTips";
import Internship from "../../components/Internship";
import TopCompanies from "../../components/TopCompanies";
import { useEffect, useState } from "react";
import useAllJobs from "../../hooks/useAllJobs";
import { FiSearch, FiBriefcase, FiUsers, FiAward, FiTrendingUp } from "react-icons/fi";

const heroStats = [
  { icon: FiBriefcase, count: "500+", label: "Active Jobs" },
  { icon: FiUsers, count: "200+", label: "Companies" },
  { icon: FiAward, count: "10K+", label: "Applicants" },
  { icon: FiTrendingUp, count: "95%", label: "Success Rate" },
];

const Home = () => {
  const allJobs = useAllJobs();

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(allJobs);
  }, [allJobs]);

  const handleAllJobs = () => {
    setJobs(allJobs);
  };

  const handleOnSite = () => {
    const onSiteJobs = allJobs?.filter((job) => job.category === "On Site");
    setJobs(onSiteJobs);
  };
  const handleRemoteJobs = () => {
    const remoteJobs = allJobs?.filter((job) => job.category === "Remote");
    setJobs(remoteJobs);
  };

  const handleHybridJobs = () => {
    const hybridJobs = allJobs?.filter((job) => job.category === "Hybrid");
    setJobs(hybridJobs);
  };
  const handlePartTimeJobs = () => {
    const partTimeJobs = allJobs?.filter((job) => job.category === "Part Time");
    setJobs(partTimeJobs);
  };

  const jobGrid = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {jobs?.map((job) => (
        <JobDetails key={job._id} job={job} />
      ))}
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>iApplyNow | Home</title>
      </Helmet>

      {/* Hero Section */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #331D2C 0%, #4e2a42 55%, #1a0e18 100%)" }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #f59e0b, transparent)", transform: "translate(30%, -30%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent)", transform: "translate(-30%, 30%)" }}
        />
        <div className="relative w-11/12 md:w-4/5 mx-auto py-20 md:py-28 text-center">
          <span className="inline-block bg-amber-400 text-amber-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            #1 Job Platform in Bangladesh
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5">
            Find Your <span className="text-amber-400">Dream Job</span>
            <br className="hidden md:block" /> Today
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-10">
            Your path to professional success begins here. Connect with top
            companies, explore thousands of opportunities, and land the role
            that matches your ambitions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center max-w-xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                className="w-full pl-11 pr-4 py-4 text-gray-800 text-base outline-none bg-white"
                placeholder="Job title, keyword..."
                type="text"
              />
            </div>
            <button className="py-4 px-8 bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold text-base transition-colors">
              Search Jobs
            </button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["Remote", "Full-Time", "Internship", "Hybrid", "Part-Time"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 bg-white/10 hover:bg-white/20 text-white text-sm rounded-full cursor-pointer transition-colors border border-white/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative bg-white/10 border-t border-white/10">
          <div className="w-11/12 md:w-4/5 mx-auto py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {heroStats.map(({ icon: Icon, count, label }) => (
              <div key={label} className="flex items-center gap-3 justify-center">
                <div className="text-amber-400 text-2xl">
                  <Icon />
                </div>
                <div>
                  <p className="text-white font-bold text-xl">{count}</p>
                  <p className="text-gray-300 text-xs">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="w-11/12 md:w-4/5 mx-auto py-14 md:py-20 space-y-20">

        {/* Jobs Tabs */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Browse <span className="text-[#331D2C]">Job Listings</span>
            </h2>
            <p className="text-gray-500 mt-2">Explore opportunities across all categories</p>
            <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          </div>
          <Tabs>
            <TabList>
              <Tab><button onClick={handleAllJobs}>All Jobs</button></Tab>
              <Tab><button onClick={handleOnSite}>On Site</button></Tab>
              <Tab><button onClick={handleRemoteJobs}>Remote</button></Tab>
              <Tab><button onClick={handleHybridJobs}>Hybrid</button></Tab>
              <Tab><button onClick={handlePartTimeJobs}>Part Time</button></Tab>
            </TabList>
            <TabPanel>{jobGrid}</TabPanel>
            <TabPanel>{jobGrid}</TabPanel>
            <TabPanel>{jobGrid}</TabPanel>
            <TabPanel>{jobGrid}</TabPanel>
            <TabPanel>{jobGrid}</TabPanel>
          </Tabs>
        </section>

        <section><JobSearchTips /></section>
        <section><Internship /></section>
        <section><TopCompanies /></section>
        <section><AboutUs /></section>
        <section><Review /></section>
      </div>
    </div>
  );
};

export default Home;
