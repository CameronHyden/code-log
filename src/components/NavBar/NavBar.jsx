import React from "react";
// import SignIn from "../../assets/Images/sign-in.png";
import "./NavBar.scss";
import Button from "../Button/Button";
import DeleteField from "../DeleteField/DeleteField";
import Clock from "../Clock/Clock";

const NavBar = ({
  handleDeleteById,
  handleIdText,
  setAddSection,
  secondHand,
  minuteHand,
  hourHand,
}) => {
  const renderAddSection = () => {
    setAddSection(true);
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <h1>MY STACKOVERFLOW</h1>
        {/* <img src={SignIn} alt="" /> */}
        <Button
          handleAddSectionState={renderAddSection}
          buttonText="ADD"
          buttonName="button"
          labelName="button"
          labelText="Log your code"
        />
        <DeleteField
          handleIdText={handleIdText}
          deleteById={handleDeleteById}
        />
      </div>
      <div className="navbar__right">
        <Clock
          // hourRatio={hourRatio}
          // secondRatio={secondRatio}
          // minuteRatio={minuteRatio}
          secondHand={secondHand}
          minuteHand={minuteHand}
          hourHand={hourHand}
        />
      </div>
    </div>
  );
};

export default NavBar;
