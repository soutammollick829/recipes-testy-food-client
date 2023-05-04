import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [error , setError] = useState('');

  const handelRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.url.value;
    const email = form.email.value;
    const password = form.password.value;
    if(/"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"/.test(password)){
      setError(`Minimum eight characters, at least one uppercase letter, one lowercase letter and one number`)
      return;
    }
    else if(password.length < 6){
      setError('password must be 6 characters')
    }

    if((name,email,password)){
      createUser(email,password)
      .then(result => {
        const user = result.user;
        console.log(user)

      })
      .catch(error => {
        console.error(error.message)
      })
    }
  }
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
          <form onSubmit={handelRegister} className="card-body">
          <p className='text-error flex'>{error}</p>
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
              <button className="btn bg-amber-400 border-0 hover:bg-amber-500">Register</button>
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