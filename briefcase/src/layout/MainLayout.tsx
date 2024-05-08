import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Fragment } from "react/jsx-runtime";
const MainLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  );
};
export default MainLayout;
