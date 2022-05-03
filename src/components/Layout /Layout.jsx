import React from "react";
// import Navbar from "../NavBar/NavBar";
// import Footer from "../Footer/Footer";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <main className="layout__content">{children}</main>
    </div>
  );
};
export default Layout;
