import useGetQuizzes from "../hooks/useGetQuizzes";
import Loader from "./Loader";
import QuizSingle from "./QuizSingle";

const QuizCustomize = () => {
  const [quizzes, isLoading] = useGetQuizzes();
  console.log(quizzes);
  if (isLoading) return <Loader />;
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      {quizzes?.map((quiz) => {
        <QuizSingle key={quiz?.id} quiz={quiz} />;
      })}
    </div>
  );
};

export default QuizCustomize;
