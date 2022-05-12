import React from "react";
import { Xbutton } from "../Xbutton/Xbutton";
import "./LogInput.scss";

const LogInput = ({
  handleInput,
  saveButton,
  state,
  handleAddSectionState,
  // onImageChange,
}) => {
  return (
    <div className="logInput-container">
      <div className="logInput">
        <Xbutton buttonFunction={handleAddSectionState} />
        <label className="input-label" htmlFor="title">
          Title
        </label>
        <input
          className="logInput__input"
          type="text"
          name="title"
          onChange={handleInput}
          value={state.title}
        />
        <label className="input-label" htmlFor="problemImage">
          Paste in your code snippet (problem)
        </label>
        <input
          className="logInput__input logInput__input--larger"
          type="text"
          // accept="image/png, image/jpeg"
          name="problemImage"
          onChange={handleInput}
          value={state.problemImage}
        />
        <label className="input-label" htmlFor="summary">
          Summary
        </label>
        <input
          className="logInput__input logInput__input--larger"
          type="text"
          name="summary"
          onChange={handleInput}
          value={state.summary}
        />
        <label className="input-label" htmlFor="solutionImage">
          Paste in your code snippet (solution)
        </label>
        <input
          className="logInput__input logInput__input--larger"
          type="text"
          name="solutionImage"
          onChange={handleInput}
          value={state.solutionImage}
        />
        <label className="input-label" htmlFor="solutionSummary">
          SolutionSummary
        </label>
        <input
          className="logInput__input logInput__input--larger"
          type="text"
          name="solutionSummary"
          onChange={handleInput}
          value={state.solutionSummary}
        />
        <button className="logInput__button" onClick={saveButton}>
          SAVE
        </button>
      </div>
    </div>
  );
};

export default LogInput;
