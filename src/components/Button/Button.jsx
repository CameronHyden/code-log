const Button = ({ handleAddSectionState, buttonText }) => {
  return (
    <div>
      <button onClick={handleAddSectionState}>{buttonText}</button>
    </div>
  );
};

export default Button;
