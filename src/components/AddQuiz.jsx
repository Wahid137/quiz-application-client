import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const AddQuiz = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newQuiz) =>
      axios.post(
        "https://quiz-application-server-7nw3ym79g-wahid137.vercel.app/dashboard/addquiz",
        newQuiz
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["/quizzes"]);
      toast.success("Quiz added successfully!");
    },
    onError: (error) => {
      toast.error("Failed to add quiz!");
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const number = form.number.value;
    const question = form.question.value;
    const incorrectOne = form.incorrectOne.value;
    const incorrectTwo = form.incorrectTwo.value;
    const incorrectThree = form.incorrectThree.value;
    const correct = form.correct.value;

    const newQuiz = {
      category: `Quiz ${number}`,
      correctAnswer: correct,
      incorrectAnswers: [incorrectOne, incorrectTwo, incorrectThree],
      question: question,
    };

    mutation.mutate(newQuiz);
    form.reset();
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
                required
              />
            </div>
            <div className="form-control mt-6 w-1/2 mx-auto">
              <button
                type="submit"
                className="bg-accent hover:bg-default text-slate-100 dark:bg-primary dark:text-accent px-10 py-2 rounded-full float-right flex items-center gap-2 justify-center"
              >
                Add Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuiz;
