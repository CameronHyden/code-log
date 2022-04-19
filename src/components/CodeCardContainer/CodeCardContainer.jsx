import React from "react";

const CodeCardContainer = ({ codeCard }) => {
  return (
    <div>
      {codeCard.map((code) => {
        return (
          <codeCard
            key={code.id}
            title={code.title}
            problemImage={code.problemImage}
            summary={code.summary}
            solutionPic={code.solutionPic}
            solutionSummary={code.solutionSummary}
          />
        );
      })}
    </div>
  );
};

export default CodeCardContainer;
