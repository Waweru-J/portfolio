import { Fragment } from "react";
import Hero from "../components/Hero";
// import AboutMe from "./AboutMe";  // If you're adding the AboutMe section later

const HomePage = () => {
  return (
    <Fragment>
      <div className="min-h-screen">
        <Hero />
        {/* Additional Sections can be added here */}
      </div>
      {/* <AboutMe /> */}
    </Fragment>
  );
};

export default HomePage;
