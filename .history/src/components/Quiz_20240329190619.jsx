import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import useGetQuizzes from "../hooks/useGetQuizzes";
import { AuthContext } from "../providers/AuthProvider.jsx";
import AnswerList from "./AnswerList.jsx";
import Button from "./Button.jsx";
import Loader from "./Loader";
import Question from "./Question.jsx";
import ResultPage from "./ResultPage.jsx";

const Quiz = () => {
  const { user } = useContext(AuthContext);
  const [quizzes, isLoading] = useGetQuizzes();
  const [quizNo, setQuizNo] = useState(0);
  const [choice, setChoice] = useState("");
  const [score, setScore] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [timer, setTimer] = useState(600); // 10 minutes in seconds
  const navigate = useNavigate();

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

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Clear interval and submit when timer reaches 0
    if (timer === 0) {
      clearInterval(interval);
      handleSubmit(); // Call the submission logic
    }

    return () => clearInterval(interval);
  }, [timer]);

  const handleSelectAnswer = (answer) => setChoice(answer);

  const handleClickNext = () => {
    checkAnswer();
    setQuizNo(quizNo + 1);
  };

  const handleClickPrevious = () => {
    if (score > 0) {
      setScore(score - 1);
    }
    setQuizNo(quizNo - 1);
    setChoice(""); // Reset choice when moving to the previous question
  };

  const marks = {
    email: user?.email,
    marks: score || 0,
    category: quizzes && quizzes[0]?.category,
  };

  const handleSubmit = () => {
    fetch("https://quiz-application-server.vercel.app/marks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(marks),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to save user");
        }
        return res.json();
      })
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Submitted Successfully!");
          navigate("/dashboard");
        } else {
          toast.error(data.message);
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error("An error occurred while submitting the quiz.");
      })
      .finally(() => {});
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

  return (
    <div className="h-screen text-slate-800 dark:bg-accent dark:text-slate-100 flex flex-col items-center justify-center p-3">
      <div className="text-xl font-bold text-red-700">
        {quizzes.length && (
          <p>
            Time Left: {Math.floor(timer / 60)}:{timer % 60}
          </p>
        )}
      </div>
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
