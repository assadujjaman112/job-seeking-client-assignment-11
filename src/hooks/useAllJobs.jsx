import { useEffect, useState } from "react";
import { API_BASE_URL } from "../config/api";

const useAllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${API_BASE_URL}/jobs`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setAllJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("[useAllJobs] fetch failed:", err.message, "URL:", `${API_BASE_URL}/jobs`);
        setLoading(false);
      });
  }, []);
  return { allJobs, loading };
};

export default useAllJobs;
