import { RiArrowRightLine } from "react-icons/ri";
import Button from "./Button";

const Quiz = () => {
  return (
    <div className=" w-full md:max-w-lg ">
      <h1 className={quizTitleStyle}>Quizzes</h1>

      {quizzes.length === 0 || isloading ? (
        <Loader />
      ) : quizNo === quizzes.length ? (
        <ResultPage
          score={score}
          quizzes={quizzes}
          onClickTry={handleClickTry}
        />
      ) : (
        <div>
          <div className=" flex justify-between mb-3">
            <span>{currentQuiz?.category}</span>
            <span>
              {quizNo + 1}/{quizzes.length}
            </span>
          </div>

          <Question currentQuiz={currentQuiz} />

          <AnswerList
            answers={answers}
            choice={choice}
            onSelectAnswer={handleSelectAnswer}
          />

          <Button 
            Next
            <RiArrowRightLine />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
