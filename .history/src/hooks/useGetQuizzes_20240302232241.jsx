import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetQuizzes = () => {
  const { data: quizzes, isLoading } = useQuery({
    queryKey: ["quizzes"],
    queryFn: async () => {
      try {
        const response = await axios.get(
          "https://quiz-application-server-4w7191bal-wahid137.vercel.app/quizzes"
        );
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch quizzes");
      }
    },
  });

  return [quizzes, isLoading];
};

export default useGetQuizzes;
