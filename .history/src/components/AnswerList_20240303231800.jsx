import React from "react";
import Answer from "./Answer";

const AnswerList = ({ answers, choice, onSelectAnswer }) => {
  return (
    <div className="my-8">
      {answers.map((ans, i) => (
        <Answer
          key={i}
          choice={choice}
          text={ans}
          onSelectAnswer={() => handleSelectAnswer(ans)}
        />
      ))}
    </div>
  );
};

export default AnswerList;
