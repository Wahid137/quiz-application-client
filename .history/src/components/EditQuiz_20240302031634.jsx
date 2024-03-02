import { useParams } from "react-router-dom";

const EditQuiz = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>EDit Quiz</h1>
    </div>
  );
};

export default EditQuiz;
