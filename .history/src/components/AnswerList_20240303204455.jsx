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
    // Shuffle answers initially
    setShuffledAnswers(shuffleArray(answers));
  }, [answers]);

  const handleSelectAnswer = (selectedAnswer) => {
    // Pass the selected answer to the parent component
    onSelectAnswer(selectedAnswer);
    // Do not shuffle answers anymore
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
