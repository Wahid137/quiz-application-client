import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

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

  return (
    <div>
      <h1>EDit Quiz: {id}</h1>
    </div>
  );
};

export default EditQuiz;
