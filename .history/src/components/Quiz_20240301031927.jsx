import { useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import useGetQuizzes from "../hooks/useGetQuizzes";
import AnswerList from "./AnswerList";
import Button from "./Button";
import Loader from "./Loader";
import Question from "./Question";
import ResultPage from "./ResultPage";

const Quiz = () => {
  const [quizData, isLoading] = useGetQuizzes();

  const [quizzes, setQuizzes] = useState([]);
  const [quizNo, setQuizNo] = useState(0);
  const [choice, setChoice] = useState("");
  const [score, setScore] = useState(0);

  const handleSelectAnswer = (answer) => setChoice(answer);

  const handleClickNext = () => {
    checkAnswer();
    setQuizNo(quizNo + 1);
  };

  const handleClickPrevious = () => {
    setScore(score - 1);
    setQuizNo(quizNo - 1);
  };

  const currentQuiz = quizzes.length > 0 && quizzes[quizNo];
  const correctAnswer = currentQuiz?.correctAnswer;
  const incorrectAnswers = currentQuiz?.incorrectAnswers;
  const answers = correctAnswer &&
    incorrectAnswers && [correctAnswer, ...incorrectAnswers];

  const isCorrect = correctAnswer === choice;

  const checkAnswer = () => isCorrect && setScore(score + 1);

  const appStyle =
    "h-screen bg-primary text-slate-800 dark:bg-accent dark:text-slate-100 flex flex-col items-center justify-center p-3";

  return (
    <div className={appStyle}>
      <div className=" w-full md:max-w-lg ">
        {quizzes.length === 0 || isLoading ? (
          <Loader />
        ) : quizNo === quizzes.length ? (
          <ResultPage score={score} quizzes={quizzes} />
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

            <div className="flex justify-between">
              {quizNo === 0 ? (
                <div></div>
              ) : (
                <Button onClickButton={handleClickPrevious}>
                  <RiArrowLeftLine />
                  previous
                </Button>
              )}
              <Button onClickButton={handleClickNext}>
                Next
                <RiArrowRightLine />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
