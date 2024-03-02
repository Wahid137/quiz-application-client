import Answer from "./Answer";

const AnswerList = ({ answers, choice, onSelectAnswer }) => {
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

  // Shuffle the answers array
  const shuffledAnswers = shuffleArray(answers);

  return (
    <div className="my-8">
      {shuffledAnswers &&
        shuffledAnswers.map((ans, i) => (
          <Answer
            key={i}
            choice={choice}
            text={ans}
            onSelectAnswer={onSelectAnswer}
          />
        ))}
    </div>
  );
};

export default AnswerList;
