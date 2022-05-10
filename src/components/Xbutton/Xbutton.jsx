import "./Xbutton.scss";

export const Xbutton = ({ buttonFunction }) => {
  return (
    <button className="xbutton" onClick={buttonFunction}>
      <div className="xbutton__leftX"></div>
      <div className="xbutton__rightX"></div>
    </button>
  );
};
