import { useEffect, useState } from "react";

const useAllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    fetch("https://job-seeking-server-pi.vercel.app/jobs")
      .then((res) => res.json())
      .then((data) => setAllJobs(data));
  }, []);
  return allJobs;
};

export default useAllJobs;
