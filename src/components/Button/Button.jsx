import "./Button.scss";

const Button = ({
  handleAddSectionState,
  buttonText,
  buttonName,
  labelName,
  labelText,
}) => {
  return (
    <div>
      <label htmlFor={labelName}>{labelText}</label>
      <button
        className="button"
        onClick={handleAddSectionState}
        name={buttonName}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
