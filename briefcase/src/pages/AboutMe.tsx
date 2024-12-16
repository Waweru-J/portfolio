import Card from "../components/Card";
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
    <div className="bg-teal-950 text-white min-h-screen">
      <div className="container mx-auto py-16 px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Section: Photo */}
          <div className="flex justify-center md:justify-start">
            <img
              src={photo}
              alt="Joseph Waweru"
              className="w-64 h-64 rounded-full object-cover border-4 border-teal-500"
            />
          </div>

          {/* Right Section: About */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold text-teal-100 mb-6 text-center md:text-left">
              About Me
            </h1>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-6 mb-8">
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
                  className="text-black hover:text-black text-3xl"
                />
              </NavLink>
              <NavLink
                to="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-sky-500 hover:text-sky-600 text-3xl"
                />
              </NavLink>
              <NavLink
                to="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-red-600 hover:text-red-700 text-3xl"
                />
              </NavLink>
            </div>

            <Card className="bg-teal-800 p-6 rounded-lg shadow-lg mb-8">
              {/* Background */}
              <div>
                <h2 className="text-2xl font-semibold text-teal-100 mb-4">
                  Background
                </h2>
                <p className="text-lg leading-relaxed text-teal-300">
                  Hello! I am Joseph Waweru, a Computer Science graduate from
                  Machakos University. My passion for technology began at a
                  young age, and I have since cultivated a strong foundation in
                  programming, problem-solving, and software development.
                </p>
              </div>

              {/* Career Objective */}
              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-teal-100 mb-4">
                  Career Objective
                </h2>
                <p className="text-lg leading-relaxed text-teal-300">
                  I aspire to leverage my skills and experience as a software
                  engineer to build innovative, scalable, and impactful
                  solutions. My goal is to contribute to the development of
                  technology that addresses real-world challenges while
                  continuously expanding my knowledge and expertise in the field.
                </p>
              </div>
            </Card>

            {/* Skills Section */}
            <Card className="bg-teal-800 p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-semibold text-teal-100 mb-4">
                Skills
              </h2>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg text-teal-300">
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
            </Card>

            {/* Education Section */}
            <Card className="bg-teal-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-teal-100 mb-4">
                Education
              </h2>
              <div>
                <h3 className="text-lg font-semibold text-teal-200">
                  Machakos University
                </h3>
                <p className="text-lg text-teal-300">
                  BSc. in Computer Science, 2019 - 2024
                </p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-teal-200">
                  High School (Maryland Secondary School)
                </h3>
                <p className="text-lg text-teal-300">2016 - 2019</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
