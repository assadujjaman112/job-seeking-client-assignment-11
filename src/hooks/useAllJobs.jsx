import { useEffect, useState } from "react";

const useAllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/jobs`)
      .then((res) => res.json())
      .then((data) => {
        setAllJobs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  return { allJobs, loading };
};

export default useAllJobs;
