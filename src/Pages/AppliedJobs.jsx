import { useLoaderData } from "react-router-dom";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    console.log(jobs)
    return (
        <div>
            
        </div>
    );
};

export default AppliedJobs;