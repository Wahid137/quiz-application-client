import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const retrieveQuiz = async ({ queryKey }) => {
  const [category, setCategory] = useState(0);

  const response = await axios.get(
    `https://quiz-application-server-7nw3ym79g-wahid137.vercel.app/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

const EditQuiz = () => {
  const { id } = useParams();
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

  const handleSubmit = () => {
    console.log("ok");
  };

  console.log(quiz);
  console.log(quiz[0]?.category?.split(" ")?.[1]);
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
