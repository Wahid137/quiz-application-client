import React, { useEffect, useState } from "react";
import Answer from "./Answer";

const AnswerList = ({ answers, choice, onSelectAnswer }) => {
  // State to hold shuffled answers
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  // State to track if an answer has been selected
  const [answerSelected, setAnswerSelected] = useState(false);

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
    if (!answerSelected) {
      setShuffledAnswers(shuffleArray(answers));
    }
  }, [answers, answerSelected]);

  // Function to handle answer selection
  const handleSelectAnswer = (selectedAnswer) => {
    // Pass the selected answer to the parent component
    onSelectAnswer(selectedAnswer);
    // Set answerSelected to true to prevent shuffling again
    setAnswerSelected(true);
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
