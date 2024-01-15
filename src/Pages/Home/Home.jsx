import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobDetails from "../../components/jobDetails";
import { useLoaderData } from "react-router-dom";
import Review from "../../components/Review";
import { Helmet } from "react-helmet-async";
import AboutUs from "../../components/AboutUs";
import JobSearchTips from "../../components/JobSearchTips";
import Internship from "../../components/Internship";
import TopCompanies from "../../components/TopCompanies";

const Home = () => {
  const allJobs = useLoaderData();
  const [jobs, setJobs] = useState(allJobs);

  // useEffect(() => {
  //   fetch("https://job-seeking-server-pi.vercel.app/jobs")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setJobs(data);
  //     });
  // }, []);

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

  return (
    <div>
      <Helmet>
        <title>iApplyNow | Home</title>
      </Helmet>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/q575yJt/clock-24h-service-success-concept-businessman-touch-word-success-time-management-business-work-plann.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center  text-white">
          <div className="">
            <h1 className="my-5 text-3xl md:text-5xl font-bold">
              Find Your Dream Job
            </h1>
            <p className="mb-5 ">
              Your Path to Professional Success Begins Here! Welcome to
              iApplyNow, where career dreams become reality. Explore a world of
              job opportunities, from entry-level positions to executive roles.
              Our platform connects you with top companies and helps you secure
              your ideal job. Start your journey to a brighter future now and
              turn your ambitions into achievements. Join us today and lets make
              your career aspirations a reality!
            </p>
            <div>
              <input
                className="pr-10 pl-7 py-3 rounded-l-lg text-black outline-none input-bordered"
                placeholder="Search here..."
                type="text"
              />
              <button className="rounded-r-lg bg-[#331D2C] py-3 px-4 text-white font-bold ">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-4/5 mx-auto my-5 md:my-10 lg:my-16">
        <Tabs>
          <TabList>
            <Tab>
              <button onClick={handleAllJobs}>All Job</button>
            </Tab>
            <Tab>
              <button onClick={handleOnSite}>On Site Job</button>
            </Tab>
            <Tab>
              <button onClick={handleRemoteJobs}>Remote Job</button>
            </Tab>
            <Tab>
              <button onClick={handleHybridJobs}>Hybrid</button>
            </Tab>
            <Tab>
              <button onClick={handlePartTimeJobs}>Part Time</button>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
              {jobs?.map((job) => (
                <JobDetails key={job._id} job={job}></JobDetails>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
              {jobs?.map((job) => (
                <JobDetails key={job._id} job={job}></JobDetails>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
              {jobs?.map((job) => (
                <JobDetails key={job._id} job={job}></JobDetails>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
              {jobs?.map((job) => (
                <JobDetails key={job._id} job={job}></JobDetails>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-5">
              {jobs?.map((job) => (
                <JobDetails key={job._id} job={job}></JobDetails>
              ))}
            </div>
          </TabPanel>
        </Tabs>
        <section>
          <JobSearchTips></JobSearchTips>
        </section>
        <section className="mt-5 md:mt-8 lg:mt-12">
          <Internship></Internship>
        </section>
        <section>
          <TopCompanies></TopCompanies>
        </section>
        <div>
          <AboutUs></AboutUs>
        </div>
        <div>
          <Review></Review>
        </div>
      </div>
    </div>
  );
};

export default Home;
