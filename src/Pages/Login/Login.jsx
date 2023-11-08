import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const {signIn} = useContext(AuthContext);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.error(error);
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
          <div className="form-control mt-6">
            <input
              className="btn bg-[#331D2C] text-white hover:text-black"
              type="submit"
              value="Login"
            />
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
