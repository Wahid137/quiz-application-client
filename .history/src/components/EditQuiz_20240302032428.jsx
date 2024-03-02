import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const EditQuiz = () => {
  const { id } = useParams();

  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["quiz", id],
    queryFn: retrieveQuiz,
  });

  if (isLoading) return <Loader />;
  if (error) return <p>An error occurred</p>;

  return (
    <div>
      <h1>EDit Quiz: {id}</h1>
    </div>
  );
};

export default EditQuiz;
