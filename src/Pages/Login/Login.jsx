/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle} from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  
  const {loginUser} = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'

  const handelLogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if(email,password){
      loginUser(email,password)
      .then(result => {
        const user = result.user;
        console.log(user)
        navigate(from, {replace:true})
      })
      .catch(error => {
        console.log(error)
      } )
    }
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <div className="text-center font-bold space-x-5">
                <h4 className="mb-5">Login with</h4>
                <button className="btn btn-outline btn-warning"><FaGoogle className="text-xl"/></button>
                <button className="btn btn-outline btn-warning"><FaGithub className="text-xl"/></button>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-amber-400 border-0 hover:bg-amber-500">Login</button>
            </div>
            <p>New to here? <Link to='/register'><span className="text-amber-500 font-bold">Please Register!</span></Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
