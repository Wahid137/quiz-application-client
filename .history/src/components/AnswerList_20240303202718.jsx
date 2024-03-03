import React, { useState } from "react";
import Answer from "./Answer";

const AnswerList = ({ answers, choice, onSelectAnswer }) => {
  const [shuffled, setShuffled] = useState(true);

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

  // Shuffle the answers only if shuffled state is true
  const shuffledAnswers = shuffled ? shuffleArray(answers) : answers;

  // Function to handle answer selection
  const handleSelectAnswer = (selectedAnswer) => {
    // Pass the selected answer to the parent component
    onSelectAnswer(selectedAnswer);
    // Set shuffled to false to prevent further shuffling
    setShuffled(false);
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
