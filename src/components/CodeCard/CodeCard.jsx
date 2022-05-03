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
      <h1>{id}</h1>
      <h2>{title}</h2>
      {/* <img src={problemImage} alt="" /> */}
      <h3> {problemImage} </h3>

      <p>{summary}</p>
      <h3>{solutionPic} </h3>
      {/* <img
        src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA
AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
    9TXL0Y4OHwAAAABJRU5ErkJggg=="
        alt=""
      /> */}
      <p>{solutionSummary}</p>
    </div>
  );
};

export default CodeCard;
