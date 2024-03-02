import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const QuizSingle = ({ quiz, i }) => {
  const { correctAnswer, incorrectAnswers, question, _id } = quiz;
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) =>
      axios.delete(
        `https://quiz-application-server-7nw3ym79g-wahid137.vercel.app/dashboard/deletequiz/${id}`
      ),
    onSuccess: () => {
      queryClient.invalidateQueries(["/quizzes"]);
    },
  });

  // Convert incorrectAnswers to an array if it's not already
  const incorrectAnswersArray = Array.isArray(incorrectAnswers)
    ? incorrectAnswers
    : [incorrectAnswers];

  // Combine correct and incorrect answers into a single array
  const options = [correctAnswer, ...incorrectAnswersArray];

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        mutation.mutate(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <div className="w-full text-white p-5 m-5 bg-[#1d2844] max-w-lg mx-auto pt-8 px-8 my-5 rounded-lg shadow-md ">
        <div>
          <p className="text-md leading-tight">
            {i + 1} . {question}
          </p>

          <div className="my-4 w-full ">
            {options?.map((option, i) => (
              <div key={i}>
                <label className="p-2 px-5 block rounded border border-white mb-3">
                  <span className="text-md">{option}</span>
                </label>
              </div>
            ))}
          </div>

          <div className="flex justify-end mt-5">
            <div className="hover:bg-black w-10 h-10 flex justify-center items-center rounded me-2">
              <FaRegEdit className="w-5 h-5" />
            </div>
            <div
              onClick={() => handleDelete(_id)}
              className="hover:bg-black w-10 h-10 flex justify-center items-center rounded"
            >
              <MdDelete className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSingle;
