import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const retrieveQuiz = async ({ queryKey }) => {
  const response = await axios.get(
    `https://quiz-application-server-7nw3ym79g-wahid137.vercel.app/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

const EditQuiz = () => {
  /*   const queryClient = useQueryClient();
  const navigate = useNavigate(); */
  const { id } = useParams();

  const {
    data: quiz,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["quizzes", id],
    queryFn: retrieveQuiz,
  });

  const [category, setCategory] = useState(
    parseInt(quiz[0]?.category?.split(" ")?.[1]) || ""
  );
  const [correct, setCorrect] = useState(quiz[0]?.correctAnswer);
  const [incorrectOne, setIncorrectOne] = useState(
    quiz[0]?.incorrectAnswers[0]
  );
  const [incorrectTwo, setIncorrectTwo] = useState(
    quiz[0]?.incorrectAnswers[1]
  );
  const [incorrectThree, setIncorrectThree] = useState(
    quiz[0]?.incorrectAnswers[2]
  );
  const [question, setQuestion] = useState(quiz[0]?.question);

  /*   const mutation = useMutation({
    mutationKey: ["dashboard/editquiz", id],
    mutationFn: async ({ newQuiz, id }) =>
      await axios.put(
        `https://quiz-application-server-7nw3ym79g-wahid137.vercel.app/dashboard/editquiz/${id}`,
        newQuiz
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["/quizzes"]);
      toast.success("Quiz Updated successfully!");
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error("Failed to add quiz!");
    },
  }); */

  if (isLoading) return <Loader />;
  if (error) return <p>An error occurred</p>;

  /*   const handleSubmit = (event) => {
    event.preventDefault();
    const newQuiz = {
      category: `Quiz ${category}`,
      correctAnswer: correct,
      incorrectAnswers: [incorrectOne, incorrectTwo, incorrectThree],
      question: question,
    };
    console.log(newQuiz);

    // mutation.mutate(newQuiz);
  };
 */
  return (
    <h1>Edit</h1>
    /*  <div className="min-h-screen mt-5 w-1/2 mx-auto">
      <div className="flex-col">
        <div className="card shadow-2xl bg-primary">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Quiz Number</span>
              </label>
              <input
                type="number"
                name="number"
                placeholder="Enter Quiz Number"
                className="input input-bordered"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Question</span>
              </label>
              <input
                type="text"
                name="question"
                placeholder="Enter Question"
                className="input input-bordered"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">
                  Incorrect Option 1
                </span>
              </label>
              <input
                type="text"
                name="incorrectOne"
                placeholder="Enter Incorrect option 2"
                className="input input-bordered"
                value={incorrectOne}
                onChange={(e) => setIncorrectOne(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">
                  Incorrect Option 2
                </span>
              </label>
              <input
                type="text"
                name="incorrectTwo"
                placeholder="Enter Incorrect option 1"
                className="input input-bordered"
                value={incorrectTwo}
                onChange={(e) => setIncorrectTwo(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">
                  Incorrect Option 3
                </span>
              </label>
              <input
                type="text"
                name="incorrectThree"
                placeholder="Enter Incorrect option 3"
                className="input input-bordered"
                value={incorrectThree}
                onChange={(e) => setIncorrectThree(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Correct Option</span>
              </label>
              <input
                type="text"
                name="correct"
                placeholder="Enter correct option"
                className="input input-bordered"
                value={correct}
                onChange={(e) => setCorrect(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6 w-1/2 mx-auto">
              <button
                type="submit"
                className="bg-accent hover:bg-default text-slate-100 dark:bg-primary dark:text-accent px-10 py-2 rounded-full float-right flex items-center gap-2 justify-center"
              >
                Update Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div> */
  );
};

export default EditQuiz;
