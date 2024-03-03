import React, { useEffect, useState } from "react";
import Answer from "./Answer";

const AnswerList = ({ answers, choice, onSelectAnswer }) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  // Function to shuffle the answers array
  const shuffleArray = (array) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  useEffect(() => {
    // Shuffle answers only if no choice has been made
    if (choice === "") {
      setShuffledAnswers(shuffleArray(answers));
    } else {
      // Otherwise, maintain the order of the options
      setShuffledAnswers(answers);
    }
  }, [answers, choice]);

  const handleSelectAnswer = (selectedAnswer) => {
    onSelectAnswer(selectedAnswer);
  };

  return (
    <div className="my-8">
      {shuffledAnswers.map((ans, i) => (
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
