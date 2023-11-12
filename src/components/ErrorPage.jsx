import { Link } from "react-router-dom";
import gif from "../../src/assets/images/errorGif.webp";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img src={gif} alt="" />
      </div>
      <div className="flex justify-center">
        <Link to="/" className="btn bg-[#331D2C] text-white hover:text-black ">Back to Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
