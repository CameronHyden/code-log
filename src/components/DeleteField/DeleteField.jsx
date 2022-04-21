import React from "react";

const DeleteField = ({ handleIdText, deleteById }) => {
  return (
    <div>
      <label htmlFor="idInput">enter an ID please </label>
      <input type="text" name="idInput" onChange={handleIdText} />
      <button onClick={deleteById}>DELETE</button>
    </div>
  );
};
export default DeleteField;
