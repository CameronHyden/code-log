import "./CodeCard.scss";

const CodeCard = ({
  id,
  title,
  problemImage,
  summary,
  solutionPic,
  solutionSummary,
}) => {
  return (
    <div className="codeCard">
      <div className="pin"></div>
      <h3 className="codeCard__id">{id}</h3>
      <h2 className="codeCard__heading">{title}</h2>
      {/* <img src={problemImage} alt="" /> */}
      <h3> {problemImage} </h3>
      <p className="codeCard__summary">{summary}</p>
      <h3>{solutionPic} </h3>
      {/* <img
        src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
    9TXL0Y4OHwAAAABJRU5ErkJggg=="
        alt=""
      /> */}
      <p className="codeCard__summary">{solutionSummary}</p>
    </div>
  );
};

export default CodeCard;
