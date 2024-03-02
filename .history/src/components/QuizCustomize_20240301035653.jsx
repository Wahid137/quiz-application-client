import useGetQuizzes from "../hooks/useGetQuizzes";
import Loader from "./Loader";
import QuizSingle from "./QuizSingle";

const QuizCustomize = () => {
  const [quizzes, isLoading] = useGetQuizzes();

  if (isLoading) return <Loader />;
  return (
    <>
      <h1 className="text-3xl font-serif font-bold text-center my-5">
        {quizzes[0].category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {quizzes?.map((quiz) => (
          <QuizSingle key={quiz?._id} quiz={quiz} />
        ))}
      </div>
    </>
  );
};

export default QuizCustomize;
