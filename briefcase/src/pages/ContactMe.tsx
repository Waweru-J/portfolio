import { useState } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ContactByEmail from "../components/forms/ContactByEmail";
import ContactBySocialmedia from "../components/forms/ContactBySocialmedia";

const ContactMe = () => {
  const [activeForm, setActiveForm] = useState("form1");

  return (
    <div id="contactme" className="bg-blue-950 min-h-screen flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-8 md:p-10 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-blue-800 mb-6">
            Contact Joseph Waweru
          </h1>
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => setActiveForm("form1")}
                className={`${
                  activeForm === "form1" ? "text-blue-700 border-b-2 border-blue-500" : "text-gray-500 hover:text-blue-700"
                }`}
              >
                By Email
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveForm("form2")}
                className={`${
                  activeForm === "form2" ? "text-blue-700 border-b-2 border-blue-500" : "text-gray-500 hover:text-blue-700"
                }`}
              >
                By Social Media
              </button>
            </li>
          </ul>
          <p className="text-gray-600 text-sm">
            Feel free to reach out through email or social media for inquiries, collaborations, or just to say hello!
          </p>
        </div>
        <div className="w-full md:w-1/2">
          {activeForm === "form1" ? <ContactByEmail /> : <ContactBySocialmedia />}
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default ContactMe;
