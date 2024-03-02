import useGetQuizzes from "../hooks/useGetQuizzes";
import Loader from "./Loader";
import QuizSingle from "./QuizSingle";

const QuizCustomize = () => {
  const [quizzes, isLoading] = useGetQuizzes();

  if (isLoading) return <Loader />;
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <h1>{quizzes[0].category}</h1>
      {quizzes?.map((quiz) => (
        <QuizSingle key={quiz?._id} quiz={quiz} />
      ))}
    </div>
  );
};

export default QuizCustomize;
