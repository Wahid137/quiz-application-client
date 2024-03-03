import React, { useEffect, useState } from "react";
import Answer from "./Answer";

const AnswerList = ({ answers, choice, onSelectAnswer }) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [lastShuffledIndex, setLastShuffledIndex] = useState(-1);

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
    // Shuffle answers only for the next map item after the last shuffled index
    if (lastShuffledIndex < answers.length - 1) {
      const newShuffledAnswers = answers.slice();
      newShuffledAnswers[lastShuffledIndex + 1] =
        shuffleArray(answers)[lastShuffledIndex + 1];
      setShuffledAnswers(newShuffledAnswers);
    }
  }, [answers, lastShuffledIndex]);

  const handleSelectAnswer = (selectedAnswer) => {
    // Pass the selected answer to the parent component
    onSelectAnswer(selectedAnswer);
    // Update the last shuffled index to shuffle the next map item
    setLastShuffledIndex(lastShuffledIndex + 1);
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
