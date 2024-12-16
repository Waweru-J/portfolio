import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faTiktok, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const tiktokUsername = "@wesh_0207";

const ContactBySocialmedia = () => {
  return (
    <form className="mt-4 p-6 bg-gray-50 rounded-lg shadow-md">
      <div className="pt-2 text-xl text-center">
        <h1 className="text-2xl font-bold text-gray-800 mt-6">Connect via Social Media</h1>

        <div className="mt-6">
          <ul className="flex justify-center gap-8">
            <li>
              <NavLink to="https://www.linkedin.com/in/josephwaweru" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="text-sky-500 text-4xl hover:text-sky-700" />
              </NavLink>
            </li>
            <li>
              <NavLink to="https://www.instagram.com/josephwaweru" target="_blank">
                <FontAwesomeIcon icon={faInstagram} className="text-rose-600 text-4xl hover:text-rose-800" />
              </NavLink>
            </li>
            <li>
              <NavLink to={`https://www.tiktok.com/${tiktokUsername}`} target="_blank">
                <FontAwesomeIcon icon={faTiktok} className="text-black text-4xl hover:text-gray-800" />
              </NavLink>
            </li>
            <li>
              <NavLink to="https://twitter.com/josephwaweru" target="_blank">
                <FontAwesomeIcon icon={faTwitter} className="text-sky-500 text-4xl hover:text-sky-700" />
              </NavLink>
            </li>
            <li>
              <NavLink to="https://youtube.com/c/josephwaweru" target="_blank">
                <FontAwesomeIcon icon={faYoutube} className="text-red-600 text-4xl hover:text-red-800" />
              </NavLink>
            </li>
          </ul>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white uppercase p-3 rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
        >
          Schedule Meeting
        </button>
      </div>
    </form>
  );
};

export default ContactBySocialmedia;
