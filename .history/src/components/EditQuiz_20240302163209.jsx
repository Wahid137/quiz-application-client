import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

const retrieveQuiz = async ({ queryKey }) => {
  const response = await axios.get(
    `https://quiz-application-server-7nw3ym79g-wahid137.vercel.app/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

const EditQuiz = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();

  const [category, setCategory] = useState(0);
  const [correct, setCorrect] = useState("");
  const [incorrectOne, setIncorrectOne] = useState("");
  const [incorrectTwo, setIncorrectTwo] = useState("");
  const [incorrectThree, setIncorrectThree] = useState("");
  const [question, setQuestion] = useState("");

  const mutation = useMutation({
    mutationKey: ["dashboard/editquiz", id],
    mutationFn: async ({ newQuiz, id }) =>
      await axios.post(
        `https://quiz-application-server-7nw3ym79g-wahid137.vercel.app/dashboard/editquiz/${id}`,
        newQuiz
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["/quizzes"]);
      toast.success("Quiz Updated successfully!");
    },
    onError: (error) => {
      toast.error("Failed to add quiz!");
    },
  });

  const {
    data: quiz,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["quizzes", id],
    queryFn: retrieveQuiz,
  });

  if (isLoading) return <Loader />;
  if (error) return <p>An error occurred</p>;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const newQuiz = {
      category: `Quiz ${category}`,
      correctAnswer: correct,
      incorrectAnswers: [incorrectOne, incorrectTwo, incorrectThree],
      question: question,
    };

    console.log(newQuiz);
    mutation.mutate({ newQuiz, id });
    navigate("/dashboard/quizcustomize");
  };

  return (
    <div className="min-h-screen mt-5 w-1/2 mx-auto">
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
                defaultValue={
                  parseInt(quiz[0]?.category?.split(" ")?.[1]) || ""
                }
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
                defaultValue={quiz[0]?.question}
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
                defaultValue={quiz[0]?.incorrectAnswers[0]}
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
                defaultValue={quiz[0]?.incorrectAnswers[1]}
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
                defaultValue={quiz[0]?.incorrectAnswers[2]}
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
                defaultValue={quiz[0].correctAnswer}
                onChange={(e) => setCorrect(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6 w-1/2 mx-auto">
              <button
                type="submit"
                className="bg-accent text-slate-100 dark:bg-primary dark:text-accent px-10 py-2 rounded-full float-right flex items-center gap-2 justify-center"
              >
                Update Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditQuiz;
