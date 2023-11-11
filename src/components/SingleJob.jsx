import { useLoaderData } from "react-router-dom";


const SingleJob = () => {
    const job = useLoaderData();
    console.log(job)
    return (
        <div>
            <h1>this is single job page</h1>
        </div>
    );
};

export default SingleJob;