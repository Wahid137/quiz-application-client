import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retrieveQuizzes = async ({ queryKey }) => {
  const response = await axios.get(
    `https://quiz-application-server-4w7191bal-wahid137.vercel.app/${queryKey}`
  );
  console.log(response.data);
  return response.data;
};

const useGetQuizzes = () => {
  const { data: quizzes, isLoading } = useQuery({
    queryKey: ["quizzes"],
    queryFn: retrieveQuizzes,
  });

  return [quizzes, isLoading];
};
export default useGetQuizzes;
