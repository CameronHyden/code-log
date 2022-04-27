import React from "react";
import SignIn from "../../assets/Images/sign-in.png";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>MY STACKOVERFLOW</h1>
      <img src={SignIn} alt="" />
    </div>
  );
};

export default NavBar;
