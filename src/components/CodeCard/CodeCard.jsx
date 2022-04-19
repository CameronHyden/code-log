import React from "react";

const CodeCard = ({
  key,
  title,
  problemImage,
  summary,
  solutionPic,
  solutionSummary,
}) => {
  return (
    <div>
      <h1>{key}</h1>
      <h2>{title}</h2>
      <img src={problemImage} alt="" />
      <p>{summary}</p>
      <img src={solutionPic} alt="" />
      <p>{solutionSummary}</p>
    </div>
  );
};

export default CodeCard;
