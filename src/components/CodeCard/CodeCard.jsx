import React from "react";

const CodeCard = ({
  id,
  title,
  problemImage,
  summary,
  solutionPic,
  solutionSummary,
}) => {
  return (
    <div>
      <h1>{id}</h1>
      <h2>{title}</h2>
      {/* <img src={problemImage} alt="" /> */}
      <h3>{problemImage}</h3>
      <p>{summary}</p>
      <h3>{solutionPic} </h3>
      {/* <img src={solutionPic} alt="" /> */}
      <p>{solutionSummary}</p>
    </div>
  );
};

export default CodeCard;
