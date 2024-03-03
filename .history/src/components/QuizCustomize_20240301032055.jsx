import QuizSingle from "./QuizSingle";

const retrieveScoreboard = async ({ queryKey }) => {
  const response = await axios.get(
    `https://quiz-application-server-4w7191bal-wahid137.vercel.app/dashboard/scoreboard?email=${queryKey[1].email}`
  );
  return response.data;
};

const QuizCustomize = () => {
  const {
    data: scoreboard,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["quizzes"],
    queryFn: retrieveScoreboard,
  });

  if (isLoading) return <Loader />;
  if (error) return <div>An error occurred {error.message}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      <QuizSingle />
      <QuizSingle />
      <QuizSingle />
      <QuizSingle />
      <QuizSingle />
      <QuizSingle />
      <QuizSingle />
      <QuizSingle />
    </div>
  );
};

export default QuizCustomize;
