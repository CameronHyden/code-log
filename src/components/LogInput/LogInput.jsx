import React from "react";
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
        <label htmlFor="title">Title</label>
        <input
          className="logInput__input"
          type="text"
          name="title"
          onChange={handleInput}
          value={state.title}
        />
        <label htmlFor="problemImage">Screenshot of the problem</label>
        <input
          className="logInput__input"
          type="text"
          // accept="image/png, image/jpeg"
          name="problemImage"
          onChange={handleInput}
          value={state.problemImage}
        />
        <label htmlFor="summary">Summary</label>
        <input
          className="logInput__summary"
          type="text"
          name="summary"
          onChange={handleInput}
          value={state.summary}
        />
        <label htmlFor="solutionImage">Screenshot of the solution</label>
        <input
          className="logInput__input"
          type="text"
          name="solutionImage"
          onChange={handleInput}
          value={state.solutionImage}
        />
        <label htmlFor="solutionSummary">SolutionSummary</label>
        <input
          className="logInput__summary"
          type="text"
          name="solutionSummary"
          onChange={handleInput}
          value={state.solutionSummary}
        />
        <button className="logInput__button" onClick={saveButton}>
          SAVE
        </button>
        <button className="logInput__button" onClick={handleAddSectionState}>
          BACK
        </button>
      </div>
    </div>
  );
};

export default LogInput;
