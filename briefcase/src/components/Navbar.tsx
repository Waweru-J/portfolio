import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="relative container  mx-auto p-6">
        <div className="flex items-center justify-between ">
          <div className="pt-2 text-1xl">
            <h1 className="text-2xl">
              Port<span className="text-indigo-600">folio</span>
            </h1>
          </div>
          {/* menu icons */}
          <div className=" hidden md:flex space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Me</NavLink>
            <NavLink to="/projects">Skills</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact Me</NavLink>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
