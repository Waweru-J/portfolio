import ScrollToTopButton from "../components/ScrollToTopButton";
import ContactByEmail from "../components/forms/ContactByEmail";
import ContactBySocialmedia from "../components/forms/ContactBySocialmedia";
import { NavLink } from 'react-router-dom';
import { useState } from "react";

type FormType = "form1" | "form2";

const ContactMe = () => {
  const [activeForm, setActiveForm] = useState('form1');

  const handleNavLinkClick = (form: FormType) => {
    setActiveForm(form);
  };

  return (
    <div className="bg-teal-950 min-h-screen flex flex-col items-center justify-center h-screen">
      <div className="w-1/2 md:w-3/4 lg:w-1/3 bg-white py-6 px-12 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4 mt-2">Contact Joseph Waweru via:</h1>
        <ul className="flex justify-between rounded bg-gray-400">
          <li>
            <NavLink
              to="#"
              onClick={() => handleNavLinkClick('form1')}
              className="inline-block px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50
                transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)]"
            >
              By Email
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              onClick={() => handleNavLinkClick('form2')}
              className="inline-block px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50
                transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)]"
            >
              By Social Media
            </NavLink>
          </li>
        </ul>

        <div>
          {activeForm === "form1" ? (
            <ContactByEmail />
          ) : (
            <ContactBySocialmedia />
          )}
        </div>
      </div>

      <ScrollToTopButton /> {/* Scroll to top button here */}
    </div>
  );
};

export default ContactMe;
