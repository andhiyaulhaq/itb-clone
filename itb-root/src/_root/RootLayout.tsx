import Nav from "../components/shared/Nav";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default RootLayout;
