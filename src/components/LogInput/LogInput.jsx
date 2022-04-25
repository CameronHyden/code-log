import React from "react";
import "./LogInput.scss";

const LogInput = ({
  handleInput,
  saveButton,
  state,
  handleAddSectionState,
}) => {
  return (
    <div className="logInput-container">
      <div className="logInput">
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          onChange={handleInput}
          value={state.title}
        />
        <label htmlFor="problemImage">ProblemImage</label>
        <input
          type="text"
          name="problemImage"
          onChange={handleInput}
          value={state.problemImage}
        />
        <label htmlFor="summary">summary</label>
        <input
          type="text"
          name="summary"
          onChange={handleInput}
          value={state.summary}
        />
        <label htmlFor="solutionImage">solutionImage</label>
        <input
          type="text"
          name="solutionImage"
          onChange={handleInput}
          value={state.solutionImage}
        />
        <label htmlFor="solutionSummary">solutionSummary</label>
        <input
          type="text"
          name="solutionSummary"
          onChange={handleInput}
          value={state.solutionSummary}
        />
        <button onClick={saveButton}>SAVE</button>
        <button onClick={handleAddSectionState}>BACK</button>
      </div>
    </div>
  );
};

export default LogInput;
