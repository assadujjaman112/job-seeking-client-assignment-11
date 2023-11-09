import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const {signIn , googleSignIn} = useContext(AuthContext);
  const[loginErr,setLoginErr] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setLoginErr("");

    signIn(email, password)
    .then(result => {
      console.log(result.user);
      navigate(location?.state? location?.state : "/");
    })
    .catch(error => {
      console.error(error);
      setLoginErr(error.message);
    })
  }
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      console.log(result.user);
      navigate(location?.state? location?.state : "/");
    })
    .catch(error => {
      console.error(error);
      setLoginErr(error.message);
    })
  }


  return (
    <div className="hero min-h-screen bg-base-200 mb-10">
      <div className="card flex-shrink-0 w-11/12 md:w-3/5 lg:w-1/2 mx-auto my-10 md:my-16 lg:my-0 shadow-2xl bg-base-100">
        <h1 className="text-center text-3xl font-bold mt-5">Login Now!</h1>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {
            loginErr && <p className="text-red-600 font-bold">{loginErr}</p>
          }
          <div className="form-control mt-6">
            <input
              className="btn bg-[#331D2C] text-white hover:text-black"
              type="submit"
              value="Login"
            />
          </div>
          <div onClick={handleGoogleSignIn} className="flex justify-center my-5">
          <button className="btn bg-white hover:bg-white"><FcGoogle className="text-4xl"></FcGoogle></button>
          </div>
        </form>
        <p className="text-center mb-5">
          Do not have an account?{" "}
          <Link className="text-[#A78295] font-extrabold" to="/signUp">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
