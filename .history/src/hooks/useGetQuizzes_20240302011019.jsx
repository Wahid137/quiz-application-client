import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const api_url =
  "https://quiz-application-server-4w7191bal-wahid137.vercel.app/quizzes";

const retrieveQuizzes = async ({ queryKey }) => {
  const response = await axios.get(
    `https://quiz-application-server-4w7191bal-wahid137.vercel.app/${queryKey}`
  );
  return response.data;
};

const useGetQuizzes = () => {
  const { data: quizzes, isLoading } = useQuery({
    queryKey: ["quizzes"],
    queryFn: retrieveQuizzes,
  });

  /*   const [quizzes, setQuizzes] = useState([]);
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
  }, []); */

  return [quizzes, isLoading];
};
export default useGetQuizzes;
