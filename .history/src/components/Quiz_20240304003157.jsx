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
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    if (quizzes?.length > 0 && quizNo < quizzes.length) {
      const currentQuiz = quizzes[quizNo];
      const correctAnswer = currentQuiz.correctAnswer;
      const incorrectAnswers = currentQuiz.incorrectAnswers;

      // Combine correct and incorrect answers
      const allAnswers = [correctAnswer, ...incorrectAnswers];

      // Shuffle all answers
      const shuffled = shuffleArray(allAnswers);

      setShuffledAnswers(shuffled);
    }
  }, [quizzes, quizNo]);

  const handleSelectAnswer = (answer) => setChoice(answer);

  const handleClickNext = () => {
    checkAnswer();
    setQuizNo(quizNo + 1);
  };

  const handleClickPrevious = () => {
    setQuizNo(quizNo - 1);
    setChoice(""); // Reset choice when moving to the previous question
  };

  const checkAnswer = () => {
    if (choice === quizzes[quizNo].correctAnswer) {
      setScore(score + 1);
    }
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const currentQuiz = quizzes?.[quizNo];

  console.log(score);
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
              answers={shuffledAnswers}
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
