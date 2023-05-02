import React from 'react';
import { FaGithub, FaGoogle} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Create an new account!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="url"
                placeholder="photo url"
                className="input input-bordered"
              />
            </div>
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
              <div className="text-center font-bold space-x-5">
                <h4 className="mb-5 mt-5">Login with</h4>
                <button className="btn btn-outline btn-warning"><FaGoogle className="text-xl"/></button>
                <button className="btn btn-outline btn-warning"><FaGithub className="text-xl"/></button>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-amber-500 border-0">Login</button>
            </div>
            <p>Already have an account? <Link to='/login'><span className="text-amber-500 font-bold">Please Login!</span></Link>
            </p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;