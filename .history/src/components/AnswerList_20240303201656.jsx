import React, { useEffect, useState } from "react";
import Answer from "./Answer";

const AnswerList = ({ answers, choice, onSelectAnswer }) => {
  // State to hold shuffled answers
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  // Function to shuffle the answers array
  const shuffleArray = (array) => {
    // Create a copy of the array to avoid mutating the original array
    const shuffledArray = array.slice();

    // Fisher-Yates (aka Knuth) Shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  };

  // Shuffle the answers whenever answers change
  useEffect(() => {
    setShuffledAnswers(shuffleArray(answers));
  }, [answers]);

  // Function to handle answer selection
  const handleSelectAnswer = (selectedAnswer) => {
    // Pass the selected answer to the parent component
    onSelectAnswer(selectedAnswer);
    // Shuffle the answers again
    setShuffledAnswers(shuffleArray(answers));
  };

  return (
    <div className="my-8">
      {shuffledAnswers &&
        shuffledAnswers.map((ans, i) => (
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
