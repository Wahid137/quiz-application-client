import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

import { useEffect } from "react";

const retrieveQuiz = async ({ queryKey }) => {
  const response = await axios.get(
    `http://localhost:5000/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

const EditQuiz = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();

  const [category, setCategory] = useState("");
  const [correct, setCorrect] = useState("");
  const [incorrectOne, setIncorrectOne] = useState("");
  const [incorrectTwo, setIncorrectTwo] = useState("");
  const [incorrectThree, setIncorrectThree] = useState("");
  const [question, setQuestion] = useState("");
  const [quiz, setQuiz] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const mutation = useMutation({
    mutationKey: ["dashboard/editquiz", id],
    mutationFn: async ({ newQuiz, id }) =>
      await axios.put(
        `https://quiz-application-server.vercel.app/dashboard/editquiz/${id}`,
        newQuiz
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["/quizzes"]);
      toast.success("Quiz Updated successfully!");
      navigate("/dashboard/quizcustomize");
    },
    onError: (error) => {
      toast.error("Failed to update quiz!");
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await retrieveQuiz({ queryKey: ["quizzes", id] });
        setQuiz(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    if (quiz) {
      setCategory(parseInt(quiz[0]?.category?.split(" ")?.[1]) || "");
      setCorrect(quiz[0]?.correctAnswer || "");
      setIncorrectOne(quiz[0]?.incorrectAnswers[0] || "");
      setIncorrectTwo(quiz[0]?.incorrectAnswers[1] || "");
      setIncorrectThree(quiz[0]?.incorrectAnswers[2] || "");
      setQuestion(quiz[0]?.question || "");
    }
  }, [quiz]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newQuiz = {
      category: `Quiz ${category}`,
      correctAnswer: correct,
      incorrectAnswers: [incorrectOne, incorrectTwo, incorrectThree],
      question: question,
    };

    mutation.mutate({ newQuiz, id });
  };

  if (isLoading) return <Loader />;
  if (error) return <p>An error occurred</p>;
  if (!quiz) return null; // or any other condition you prefer

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
    </div>
  );
};

export default EditQuiz;
