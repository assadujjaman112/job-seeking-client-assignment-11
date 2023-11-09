import { useLoaderData } from "react-router-dom";


const SingleJob = () => {
    const job = useLoaderData();
    console.log(job)
    return (
        <div>
            
        </div>
    );
};

export default SingleJob;