import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retrieveQuizzes = async ({ queryKey }) => {
  console.log(queryKey);
  const response = await axios.get(
    `https://quiz-application-server-7nw3ym79g-wahid137.vercel.app/quizzes`
  );
  console.log(response.data);
  return response.data;
};

const useGetQuizzes = async () => {
  const {
    data: quizzes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["quizzes"],
    queryFn: retrieveQuizzes,
  });

  console.log("hooks", quizzes);
  console.log("hooks error", error);
  return [quizzes, isLoading];
};
export default useGetQuizzes;
