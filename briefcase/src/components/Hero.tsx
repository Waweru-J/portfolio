import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faTiktok,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Card from "./Card";
import { NavLink } from "react-router-dom";
import photo from "../assets/photo.jpeg";

const tiktokUsername = "@wesh_0207";

const Hero = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          {/* On small screens, display the card with the photo first */}
          <div className="order-2 md:order-1">
            <Card>
              <h2 className="text-3xl font-bold mb-4">Hi, I'm</h2>
              <p className="text-gray-700 mb-4 text-3xl">
                <span className="text-indigo-700 font-bold">Joseph</span>
                <span className="text-green-600"> Waweru</span>
              </p>
              <p className="mb-4 font-light tracking-wider leading-loose text-start text-lg italic text-slate-900">
                A professional web developer specializing in full-stack
                development with a focus on React, Node.js, and Express. With a
                passion for crafting seamless digital experiences, I bring
                expertise in both frontend and backend technologies to deliver
                robust and scalable web solutions.
              </p>
              <ul className="flex gap-4">
                <li>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-linkedin text-xl"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-instagram text-xl"
                  />
                </li>
                <li>
                  <NavLink
                    to={`https://www.tiktok.com/${tiktokUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTiktok}
                      className="text-tiktok text-xl"
                    />
                  </NavLink>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-twitter text-xl"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="text-youtube text-xl"
                  />
                </li>
              </ul>

              <div className="flex items-center justify-start space-x-10 mt-6">
                <NavLink
                  to=""
                  className="p-3 px-6 pt-2 text-white bg-indigo-600 rounded baseline hover:bg-indigo-700"
                >
                  Download Cv
                </NavLink>
                <NavLink
                  to=""
                  className="p-3 px-6 pt-2 text-white bg-indigo-600 rounded baseline hover:bg-indigo-700"
                >
                  Hire Me Now
                </NavLink>
              </div>
            </Card>
          </div>
          <div className="order-1 md:order-2 grayscale-50">
            <img
              src={photo}
              alt="Joseph Waweru"
              className="rounded-full w-80 h-80 mx-auto "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
