import { useEffect, useState } from "react";
import { RiArrowRightLine } from "react-icons/ri";
import AnswerList from "./AnswerList";
import Button from "./Button";
import Loader from "./Loader";
import Question from "./Question";
import ResultPage from "./ResultPage";

const api_url = "https://the-trivia-api.com/api/questions";

/* const objStructure = {
  category: "Sport & Leisure",
  correctAnswer: "Tennis",
  difficulty: "medium",
  id: "622a1c357cc59eab6f950020",
  incorrectAnswers: (3)[("Soccer", "Badminton", "Volleyball")],
  isNiche: false,
  question: "Within Which Sport Might You Encounter The Cyclops System?",
  regions: [],
  tags: (2)[("technology", "sport")],
  type: "Multiple Choice",
}; */

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
    setQuizNo(quizNo - 1);
  };

  const handleClickBefore = () => {
    checkAnswer();
    setQuizNo(quizNo - 1);
  };

  const handleClickTry = () => {
    setIsLoading(true);
    setScore(0);
    setChoice("");
    setQuizNo(0);
    fetchData(api_url).then((data) => {
      setQuizzes(data);
      setIsLoading(false);
    });
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
    " w-full text-slate-800 dark:text-slate-100 fixed top-0 left-0 p-5 tracking-widest flex items-center justify-between";

  const appStyle =
    "h-screen bg-primary text-slate-800 dark:bg-accent dark:text-slate-100 flex flex-col items-center justify-center p-3";

  return (
    <div className={appStyle}>
      <div className=" w-full md:max-w-lg ">
        <h1 className={quizTitleStyle}>Quizzes</h1>

        {quizzes.length === 0 || isLoading ? (
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
