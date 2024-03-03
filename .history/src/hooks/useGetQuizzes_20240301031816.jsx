import { useEffect, useState } from "react";

const api_url =
  "https://quiz-application-server-4w7191bal-wahid137.vercel.app/quizzes";

const useGetQuizzes = () => {
  const [quizData, setQuizzesData] = useState([]);
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
      setQuizzesData(data);
      setIsLoading(false);
    });
  }, []);
  return [isAdmin];
};
export default useGetQuizzes;
