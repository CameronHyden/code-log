import React from "react";
import "./LogInput.scss";

const LogInput = ({ handleInput }) => {
  return (
    <div className="logInput">
      <label htmlFor="title">title</label>
      <input type="text" name="title" onInput={handleInput} />
      <label htmlFor="Problem">Problem</label>
      <input type="text" name="Problem" onInput={handleInput} />
      <label htmlFor="summary">summary</label>
      <input type="text" name="summary" onInput={handleInput} />
      <label htmlFor="solution">solution</label>
      <input type="text" name="solution" onInput={handleInput} />
      <label htmlFor="solutionSummary">solutionSummary</label>
      <input type="text" name="solutionSummary" onInput={handleInput} />

      <button>SAVE</button>
    </div>
  );
};

export default LogInput;
