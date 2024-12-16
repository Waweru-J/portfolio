import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Fragment } from "react/jsx-runtime";
import AboutMe from "../pages/AboutMe";
import Projects from "../pages/Projects"
import ContactMe from "../pages/ContactMe"

const MainLayout = () => {
  return (
    <Fragment>
      <div className="bg-teal-950 ">
      <Navbar />
      <div className="mt-20">
      <Outlet />
      </div>
     
      </div>
      <AboutMe />
      <Projects />
      <ContactMe />
    </Fragment>
  );
};
export default MainLayout;
