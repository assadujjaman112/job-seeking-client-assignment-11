import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Home = () => {
  return (
    <div>
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
              Your Path to Professional Success Begins Here! Welcome to [Your
              Website Name], where career dreams become reality. Explore a world
              of job opportunities, from entry-level positions to executive
              roles. Our platform connects you with top companies and helps you
              secure your ideal job. Start your journey to a brighter future now
              and turn your ambitions into achievements. Join us today and lets
              make your career aspirations a reality!
            </p>
            <div>
              <input
                className="px-6 py-2 rounded-l-lg outline-none"
                placeholder="Search here..."
                type="text"
              />
              <button className="rounded-r-lg bg-[#331D2C] py-2 px-4 text-white font-bold ">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>On Site Job</Tab>
            <Tab>Remote Job</Tab>
            <Tab>Hybrid</Tab>
            <Tab>Part Time</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Home;
