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
      <h3 className="codeCard__codeSnippets"> {problemImage} </h3>
      <p className="codeCard__summary">{summary}</p>
      <h3 className="codeCard__codeSnippets">{solutionPic} </h3>
      <p className="codeCard__summary">{solutionSummary}</p>
    </div>
  );
};

export default CodeCard;
