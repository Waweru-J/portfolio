import { NavLink } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";
import photo from "../assets/passport.jpg";

const Hero = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-800 to-teal-900 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 lg:px-16">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl sm:text-5xl font-semibold leading-tight mb-4">
            Joseph Waweru M.
          </h2>
          <p className="text-lg sm:text-xl mb-4 opacity-80">
            Full Stack Software Engineer
          </p>
          <p className="text-md sm:text-lg text-neutral-200 mb-8">
            Passionate about building modern, scalable web applications and providing solutions that enhance user experiences.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            <NavLink
              to="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white text-gray-800 transition-transform hover:scale-110 hover:bg-teal-600 hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} className="text-3xl" />
            </NavLink>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center md:justify-start gap-6">
            <NavLink
              to="/project"
              className="inline-block rounded-lg bg-teal-700 text-neutral-50 px-8 py-3 text-sm font-medium uppercase tracking-wide transition duration-300 ease-in-out transform hover:bg-teal-600 hover:scale-105"
            >
              See My Projects
            </NavLink>
            <NavLink
              to="/contact"
              className="inline-block rounded-lg bg-transparent border-2 border-teal-700 text-teal-700 px-8 py-3 text-sm font-medium uppercase tracking-wide transition duration-300 ease-in-out transform hover:bg-teal-700 hover:text-neutral-50 hover:scale-105"
            >
              Contact Me
            </NavLink>
          </div>
        </div>

        {/* Right Section: Add Profile Picture and Key Skills */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="bg-neutral-800 p-6 rounded-lg shadow-lg w-full md:w-full lg:w-full">
            <div className="text-center mb-6">
              {/* Profile Image */}
              <img
                src={photo}// Replace with your profile image URL
                alt="Joseph Waweru"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl text-teal-500 font-semibold">Key Skills</h3>
            </div>
            
            {/* Key Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div className="text-center bg-teal-600 text-white py-2 rounded-md">
                React
              </div>
              <div className="text-center bg-teal-600 text-white py-2 rounded-md">
                Node.js
              </div>
              <div className="text-center bg-teal-600 text-white py-2 rounded-md">
                Express.js
              </div>
              <div className="text-center bg-teal-600 text-white py-2 rounded-md">
                MongoDB
              </div>
              <div className="text-center bg-teal-600 text-white py-2 rounded-md">
                JavaScript
              </div>
              <div className="text-center bg-teal-600 text-white py-2 rounded-md">
                TypeScript
              </div>
            </div>

            {/* Card Section for Short Description */}
            <Card className="mt-4">
              <p className="text-lg sm:text-xl text-neutral-300 italic  mb-6">
                A professional web developer specializing in full-stack development with a focus on React, Node.js, and Express. With a passion for crafting seamless digital experiences, I bring expertise in both frontend and backend technologies to deliver robust and scalable web solutions.
              </p>
            </Card>

            {/* Call to Action for Hiring */}
            <div className="flex justify-center md:justify-start gap-6 mt-8">
              <NavLink
                to="/contact"
                className="inline-block rounded-lg bg-teal-700 text-neutral-50 px-8 py-3 text-sm font-medium uppercase tracking-wide transition duration-300 ease-in-out transform hover:bg-teal-600 hover:scale-105"
              >
                Hire Me Now
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
