import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const[signUpErr, setSignUpErr] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password, photoUrl, location);

    setSignUpErr("");

    if(password.length < 6){
        setSignUpErr("Password must have at least 6 character");
        return;
    }
    else if(!/[A-Z]/.test(password)){
        setSignUpErr("Password must have at least one uppercase character");
        return;
    }


    createUser(email,password)
    .then(result => {
        console.log(result.user.photoURL);
        navigate(location?.state? location?.state : "/");

    })
    .catch(error => {
        console.error(error)
    })

  };

  return (
    <div className="hero min-h-screen bg-base-200 mb-10">
      <div className="card flex-shrink-0 w-11/12 md:w-3/5 lg:w-1/2 mx-auto my-10 md:my-16 lg:my-0 shadow-2xl bg-base-100">
        <h1 className="text-center text-3xl font-bold mt-5">Sign Up Now!</h1>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
            signUpErr&& <p className="text-red-600 font-bold">{signUpErr}</p>
          }

          <div className="form-control mt-6">
            <input
              className="btn bg-[#331D2C] text-white hover:text-black"
              type="submit"
              value="Sign up"
            />
          </div>
        </form>
        <p className="text-center mb-5">
          Already have an account?
          <Link className="text-[#A78295] font-extrabold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
