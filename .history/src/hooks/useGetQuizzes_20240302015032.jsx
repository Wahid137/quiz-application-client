import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retrieveQuizzes = async ({ queryKey }) => {
  console.log(queryKey);
  const response = await axios.get(
    `https://quiz-application-server-4w7191bal-wahid137.vercel.app/${queryKey}`
  );
  console.log(response.data);
  return response.data;
};

const useGetQuizzes = async () => {
  const { data: quizzes, isLoading } = useQuery({
    queryKey: ["quizzes"],
    queryFn: retrieveQuizzes,
  });

  console.log("hooks", quizzes);
  return [quizzes, isLoading];
};
export default useGetQuizzes;
