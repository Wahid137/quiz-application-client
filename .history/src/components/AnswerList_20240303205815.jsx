import React, { useState } from "react";
import Answer from "./Answer";

const AnswerList = ({ answers, choice, onSelectAnswer, shuffleAnswers }) => {
  // Use local state to manage shuffled answers
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

  // Shuffle answers if shuffleAnswers is true
  React.useEffect(() => {
    if (shuffleAnswers) {
      setShuffledAnswers(shuffleArray(answers));
    } else {
      // If shuffleAnswers is false (i.e., answer has been selected), set answers directly
      setShuffledAnswers(answers);
    }
  }, [answers, shuffleAnswers]);

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
