import React from "react";

const Blog = () => {
  return (
    <>
    <div className="flex">
      <div className="card w-96">
        <div className="card-body">
          <h2 className="card-title ">Tell us the differences between uncontrolled and controlled components.</h2>
          <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.</p>
        </div>
      </div>
      <div className="card w-96">
        <div className="card-body">
          <h2 className="card-title">How to validate React props using PropTypes?</h2>
          <p>1. PropTypes.any : The prop can be of any data type.</p>
          <p>2. PropTypes.bool : The prop should be a Boolean.</p>
          <p>3. PropTypes.number : The prop should be a number.</p>
          <p>4. PropTypes.string : The prop should be a string.</p>
          <p>5. PropTypes.func : The prop should be a function.</p>
        </div>
      </div>
      <div className="card w-96">
        <div className="card-body">
          <h2 className="card-title">Tell us the difference between nodejs and express js.</h2>
          <p>js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
        </div>
      </div>
      <div className="card w-96">
        <div className="card-body">
          <h2 className="card-title">What is a custom hook, and why will you create a custom hook?</h2>
          <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
        </div>
      </div>
    </div>
    <div className="w-96 mx-auto mb-10">
        <h2 className="text-2xl font-bold mb-5">
          Special Offers <span className="text-amber-500">For Subscribers</span>
        </h2>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="enter email"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
