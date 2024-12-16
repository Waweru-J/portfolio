import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fab);

const Navbar = () => {
  return (
    <Fragment>
      <nav className="bg-teal-950 py-6 w-full top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or Brand Section (optional) */}
          <div className="text-white font-bold text-xl">
            <NavLink to="/" className="flex items-center space-x-2">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} className="text-rose-600 text-2xl" />
              <span>My Brand</span>
            </NavLink>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8 text-white">
            <NavLink 
              to="/" 
              className="hover:bg-rose-600 hover:text-white px-3 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              <FontAwesomeIcon
                icon={["fab", "facebook-f"]}
                className="text-rose-600 mr-2"
              />
              Projects
            </NavLink>
            <NavLink 
              to="/about" 
              className="hover:bg-rose-600 hover:text-white px-3 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              <FontAwesomeIcon
                icon={["fab", "facebook-f"]}
                className="text-rose-600 mr-2"
              />
              About Me
            </NavLink>
            <NavLink 
              to="/project" 
              className="hover:bg-rose-600 hover:text-white px-3 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              <FontAwesomeIcon
                icon={["fab", "facebook-f"]}
                className="text-rose-600 mr-2"
              />
              Skills
            </NavLink>
            <NavLink 
              to="/contact" 
              className="hover:bg-rose-600 hover:text-white px-3 py-2 rounded-lg transition duration-300 ease-in-out"
            >
              <FontAwesomeIcon
                icon={["fab", "facebook-f"]}
                className="text-rose-600 mr-2"
              />
              Contact Me
            </NavLink>
          </div>

          {/* Mobile Menu Toggle (for mobile screens) */}
          <div className="md:hidden flex items-center">
            <button className="text-white text-2xl">
              <FontAwesomeIcon icon="bars" />
            </button>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
