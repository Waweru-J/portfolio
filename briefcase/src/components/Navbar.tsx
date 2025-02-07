import { useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Fragment>
      <header className="bg-blue-950 shadow-md sticky top-0 z-50">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Brand Logo */}
          <NavLink to="/" className="flex items-center space-x-2 text-white text-2xl font-semibold">
            <FontAwesomeIcon icon={faLinkedin} className="text-rose-500" />
            <span>My Brand</span>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 text-white">
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `hover:text-rose-500 transition-colors ${isActive ? "text-rose-500" : "text-white"}`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-rose-500 transition-colors ${isActive ? "text-rose-500" : "text-white"}`
                }
              >
                About Me
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-rose-500 transition-colors ${isActive ? "text-rose-500" : "text-white"}`
                }
              >
                Contact Me
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-blue-950 text-white py-6 px-4">
            <ul className="flex flex-col space-y-6 items-start">
              <li>
                <NavLink
                  to="/projects"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-rose-500 transition-colors"
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-rose-500 transition-colors"
                >
                  About Me
                </NavLink>
              </li>
             
              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-rose-500 transition-colors"
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </header>
    </Fragment>
  );
};

export default Navbar;
