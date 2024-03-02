import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetQuizzes = async () => {
  const {
    data: quizzes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["quizzes"],
    queryFn: async() => {
      const res = await axios.get(`https://quiz-application-server-7nw3ym79g-wahid137.vercel.app/quizzes`),
      return res.data;
    }
  });

  console.log("hooks", quizzes);
  console.log("hooks error", error);
  return [quizzes, isLoading];
};
export default useGetQuizzes;
