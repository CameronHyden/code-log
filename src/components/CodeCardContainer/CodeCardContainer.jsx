import React from "react";
import CodeCard from "../CodeCard/CodeCard";
import "./CodeCardContainer.scss";

const CodeCardContainer = ({ codeLog }) => {
  return (
    <div className="codeCardContainer">
      {codeLog.map((code) => {
        return (
          <CodeCard
            key={code.id}
            id={code.id}
            title={code.title}
            problemImage={code.problemImage}
            summary={code.summary}
            solutionPic={code.solutionImage}
            solutionSummary={code.solutionSummary}
          />
        );
      })}
    </div>
  );
};

export default CodeCardContainer;
