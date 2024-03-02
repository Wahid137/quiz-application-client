import { useEffect, useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import AnswerList from "./AnswerList";
import Button from "./Button";
import Loader from "./Loader";
import Question from "./Question";
import ResultPage from "./ResultPage";

const api_url =
  "https://quiz-application-server-7nw3ym79g-wahid137.vercel.app/quizzes";

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [quizNo, setQuizNo] = useState(0);
  const [choice, setChoice] = useState("");
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (e) {
      throw new Error(e);
    }
  };

  const handleSelectAnswer = (answer) => setChoice(answer);

  const handleClickNext = () => {
    checkAnswer();
    setQuizNo(quizNo + 1);
  };

  useEffect(() => {
    fetchData(api_url).then((data) => {
      setQuizzes(data);
      setIsLoading(false);
    });
  }, []);

  const currentQuiz = quizzes.length > 0 && quizzes[quizNo];
  const correctAnswer = currentQuiz?.correctAnswer;
  const incorrectAnswers = currentQuiz?.incorrectAnswers;
  const answers = correctAnswer &&
    incorrectAnswers && [correctAnswer, ...incorrectAnswers];

  const isCorrect = correctAnswer === choice;

  const checkAnswer = () => isCorrect && setScore(score + 1);

  const quizTitleStyle =
    " w-full text-slate-800 dark:text-slate-100 fixed p-5 tracking-widest flex items-center justify-between";

  const appStyle =
    "h-screen bg-primary text-slate-800 dark:bg-accent dark:text-slate-100 flex flex-col items-center justify-center p-3";

  return (
    <div className={appStyle}>
      <div className=" w-full md:max-w-lg ">
        <Link to="/">
          <h1 className={quizTitleStyle}>Quizzes</h1>
        </Link>

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

            <Button onClickButton={handleClickNext}>
              Next
              <RiArrowRightLine />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
