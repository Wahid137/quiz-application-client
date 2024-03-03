import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RiArrowRightLine } from "react-icons/ri";
import { AuthContext } from "../providers/AuthProvider";
import AnswerList from "./AnswerList";
import Button from "./Button";
import Loader from "./Loader";
import Question from "./Question";
import ResultPage from "./ResultPage";

const api_url =
  "https://quiz-application-server-4w7191bal-wahid137.vercel.app/quizzes";

const Quiz = () => {
  const { user } = useContext(AuthContext);
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

  const appStyle =
    "h-screen bg-primary text-slate-800 dark:bg-accent dark:text-slate-100 flex flex-col items-center justify-center p-3";

  const marks = {
    user: user?.email,
    marks: score,
    category: currentQuiz?.category,
  };

  if (quizNo === quizzes.length) {
    fetch(
      "https://quiz-application-server-4w7191bal-wahid137.vercel.app/marks",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(marks),
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to save user");
        }
        return res.json();
      })
      .then((data) => {
        if (data.acknowledged) {
          toast.success("User Created Successfully!");
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        toast.error("Failed to save user. Please try again later.");
      });
  }

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
