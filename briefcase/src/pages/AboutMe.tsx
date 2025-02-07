import { NavLink } from "react-router-dom";
import photo from "../assets/passport.jpg";
import {
  faLinkedin,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const tiktokUsername = "@wesh_0207";

const AboutMe = () => {
  return (
    <div id="aboutme" className="bg-blue-950 text-white min-h-screen">
      <div className="container mx-auto py-16 px-6 lg:px-20">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section: Profile Photo */}
          <div className="flex justify-center">
            <img
              src={photo}
              alt="Joseph Waweru"
              className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-xl"
            />
          </div>

          {/* Right Section: About Information */}
          <div>
            <h1 className="text-5xl font-bold text-blue-100 mb-6">
              About Me
            </h1>
            <p className="text-lg leading-relaxed text-blue-300 mb-8">
              Hello! I am <span className="font-semibold">Joseph Waweru</span>, a passionate Computer Science graduate from Machakos University. I specialize in modern web development and software engineering, driven by a mission to build solutions that address real-world problems.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-6 mb-8">
              <NavLink
                to="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-sky-500 hover:text-sky-600 text-3xl"
                />
              </NavLink>
              <NavLink
                to="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-rose-600 hover:text-rose-700 text-3xl"
                />
              </NavLink>
              <NavLink
                to={`https://www.tiktok.com/${tiktokUsername}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="text-gray-100 hover:text-gray-300 text-3xl"
                />
              </NavLink>
              <NavLink
                to="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-sky-400 hover:text-sky-500 text-3xl"
                />
              </NavLink>
              <NavLink
                to="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-red-500 hover:text-red-600 text-3xl"
                />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-12 space-y-12">
          {/* Background and Career Objective */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-blue-100 mb-4">
              Background
            </h2>
            <p className="text-lg text-blue-300 leading-relaxed">
              My interest in technology started early, and I’ve since focused on growing my skills in software development, web applications, and solving challenging programming problems.
            </p>
          </div>

          <div className="bg-blue-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-blue-100 mb-4">
              Career Objective
            </h2>
            <p className="text-lg text-blue-300 leading-relaxed">
              I aim to leverage my technical skills to develop innovative, scalable, and impactful software solutions that enhance user experiences and address everyday challenges.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-blue-100 mb-6">
              Skills
            </h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-4 text-lg text-blue-300">
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>RESTful APIs</li>
              <li>Version Control (Git)</li>
              <li>HTML/CSS</li>
              <li>Docker</li>
              <li>Unit Testing (Jest)</li>
              <li>Agile Methodology</li>
              <li>CI/CD</li>
            </ul>
          </div>

          {/* Education */}
          <div className="bg-blue-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-blue-100 mb-6">
              Education
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-blue-200">
                Machakos University
              </h3>
              <p className="text-lg text-blue-300">
                BSc. in Computer Science, 2019 - 2024
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-200">
                Maryland Secondary School
              </h3>
              <p className="text-lg text-blue-300">2016 - 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
