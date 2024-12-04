import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="font-sans">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li >
                <NavLink to={'/'}><a>Home</a></NavLink>
              </li>
              
              <li>
               <NavLink to={'/listedBooks'}> <a>Listed Books</a></NavLink>
              </li>
              <li>
                <NavLink to={'/pagesToRead'}><a>Pages to Read</a></NavLink>
              </li>
            </ul>
          </div>
          <Link><a className="btn btn-ghost text-2xl font-bold">Book Vibe</a></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[#23BE0A] ">
          <li>
                <NavLink to={'/'}><a>Home</a></NavLink>
              </li>
              
              <li>
               <NavLink to={'/listedBooks'}> <a>Listed Books</a></NavLink>
              </li>
              <li>
                <NavLink to={'/pagesToRead'}><a>Pages to Read</a></NavLink>
              </li>
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn bg-[#23BE0A] text-white border-none font-bold">Sign In</a>
          <a className="btn bg-[#59C6D2] border-none text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
