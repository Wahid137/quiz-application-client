import { useEffect, useState } from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import useGetQuizzes from "../hooks/useGetQuizzes";
import AnswerList from "./AnswerList.jsx";
import Button from "./Button.jsx";
import Loader from "./Loader";
import Question from "./Question.jsx";
import ResultPage from "./ResultPage.jsx";

const Quiz = () => {
  const [quizzes, isLoading] = useGetQuizzes();
  const [quizNo, setQuizNo] = useState(0);
  const [choice, setChoice] = useState("");
  const [score, setScore] = useState(0);
  const [correctlyAnswered, setCorrectlyAnswered] = useState([]);

  useEffect(() => {
    if (quizzes?.length > 0 && quizNo < quizzes.length) {
      const currentQuiz = quizzes[quizNo];
      const correctAnswer = currentQuiz.correctAnswer;

      // Check if the current quiz has already been answered correctly
      const alreadyCorrect = correctlyAnswered.includes(quizNo);

      // Update score if the current quiz hasn't been answered correctly before
      if (choice === correctAnswer && !alreadyCorrect) {
        setScore(score + 1);
        setCorrectlyAnswered([...correctlyAnswered, quizNo]);
      }
    }
  }, [choice, quizNo, quizzes, correctlyAnswered, score]);

  const handleSelectAnswer = (answer) => setChoice(answer);

  const handleClickNext = () => {
    setQuizNo(quizNo + 1);
    setChoice(""); // Reset choice when moving to the next question
  };

  const handleClickPrevious = () => {
    setQuizNo(quizNo - 1);
    setChoice(""); // Reset choice when moving to the previous question
  };

  const currentQuiz = quizzes?.[quizNo];

  return (
    <div className="h-screen text-slate-800 dark:bg-accent dark:text-slate-100 flex flex-col items-center justify-center p-3">
      <div className="w-full md:max-w-lg">
        {isLoading ? (
          <Loader />
        ) : quizNo === quizzes?.length ? (
          <ResultPage score={score} quizzes={quizzes} />
        ) : (
          <div>
            <div className="flex justify-between mb-3">
              <span>{currentQuiz?.category}</span>
              <span>
                {quizNo + 1}/{quizzes?.length}
              </span>
            </div>

            <Question currentQuiz={currentQuiz} />

            <AnswerList
              answers={currentQuiz?.answers || []} // Ensure there are answers to display
              choice={choice}
              onSelectAnswer={handleSelectAnswer}
            />

            <div className="flex justify-between">
              {quizNo === 0 ? (
                <div></div>
              ) : (
                <Button onClickButton={handleClickPrevious}>
                  <RiArrowLeftLine />
                  Previous
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
