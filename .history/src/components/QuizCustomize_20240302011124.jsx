import useGetQuizzes from "../hooks/useGetQuizzes";
import Loader from "./Loader";
import QuizSingle from "./QuizSingle";

const QuizCustomize = () => {
  const [quizzes, isLoading] = useGetQuizzes();
  console.log(quizzes.length);
  if (isLoading) return <Loader />;
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-white my-5 rounded-sm bg-[#1d2844] w-1/2 mx-auto h-12 flex items-center justify-center">
        {quizzes[0].category}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {quizzes?.map((quiz, i) => (
          <QuizSingle key={quiz?._id} quiz={quiz} i={i} />
        ))}
      </div>
    </>
  );
};

export default QuizCustomize;
