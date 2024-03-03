import Answer from "./Answer";

const AnswerList = ({ answers, choice, onSelectAnswer }) => {
  return (
    <div className="my-8">
      {answers?.map((ans, i) => (
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
