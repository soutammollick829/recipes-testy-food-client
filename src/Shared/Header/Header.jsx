import React, { useContext } from "react";
import navLogo from "../../../src/assets/images/logo/images.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {

  const {user,logOut} = useContext(AuthContext);

  const handelLogOut = () =>{
    logOut()
    .then()
    .catch(error =>{
      console.error(error)
    })
  }

  return (
    <div className="navbar bg-base-100 mt-5 px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <img className="w-48" src={navLogo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center px-1 gap-20">
        <NavLink
                to="/"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : '#f5b942',
                  };
                }}
              >
                Home
              </NavLink>
        <NavLink
                to="/food"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "" : "f5b942",
                  };
                }}
              >
                Food
              </NavLink>
        <NavLink
                to='/'
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "" : "f5b942",
                  };
                }}
              >
                Contact us
              </NavLink>
        <NavLink
                to="/blog"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "f5b942",
                  };
                }}
              >
                Blog
              </NavLink>
         
        </ul>
      </div>
      <div className="navbar-end">
        {user && <FaUserCircle className="text-4xl me-5"/>}
        {user?
          <button onClick={handelLogOut} className="btn bg-amber-400 hover:bg-amber-500 border-0">Logout</button>:
        <Link to='/login'>
          <button className="btn bg-amber-400 hover:bg-amber-500 border-0">Login</button>
        </Link>
        }
      </div>
    </div>
  );
};

export default Header;
