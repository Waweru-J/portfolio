import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    // Extract target ID from pathname
    const targetId = location.pathname.substring(1); // Remove leading '/'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Scroll smoothly to the element if it exists
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      // Default behavior: Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="bg-blue-950 min-h-screen">
      <Navbar />
      <div className="mt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
