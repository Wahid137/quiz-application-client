import Answer from "./Answer";

const AnswerList = ({ answers, choice, onSelectAnswer }) => (
  <div className="my-8">
    {answers &&
      answers.map((ans) => (
        <Answer
          key={ans.id}
          choice={choice}
          text={ans}
          onSelectAnswer={onSelectAnswer}
        />
      ))}
  </div>
);

export default AnswerList;
