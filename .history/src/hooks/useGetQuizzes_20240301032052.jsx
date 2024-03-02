import { useEffect, useState } from "react";

const api_url =
  "https://quiz-application-server-7nw3ym79g-wahid137.vercel.app/quizzes";

const useGetQuizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (e) {
      throw new Error(e);
    }
  };

  useEffect(() => {
    fetchData(api_url).then((data) => {
      setQuizzes(data);
      setIsLoading(false);
    });
  }, []);

  return [quizzes, isLoading];
};
export default useGetQuizzes;
