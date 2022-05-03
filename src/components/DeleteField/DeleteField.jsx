import "./DeleteField.scss";

const DeleteField = ({ handleIdText, deleteById }) => {
  return (
    <div className="deleteField">
      <label htmlFor="idInput">Enter an ID please </label>
      <input
        className="deleteField__input"
        type="text"
        name="idInput"
        onChange={handleIdText}
      />
      <button className="deleteField__button" onClick={deleteById}>
        DELETE
      </button>
    </div>
  );
};
export default DeleteField;
