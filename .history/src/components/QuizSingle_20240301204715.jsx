import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const QuizSingle = ({ quiz, i }) => {
  const { category, correctAnswer, incorrectAnswers, question } = quiz;

  // Convert incorrectAnswers to an array if it's not already
  const incorrectAnswersArray = Array.isArray(incorrectAnswers)
    ? incorrectAnswers
    : [incorrectAnswers];

  // Combine correct and incorrect answers into a single array
  const options = [correctAnswer, ...incorrectAnswersArray];

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
            <div className="hover:bg-black w-10 h-10 flex justify-center items-center rounded">
              <MdDelete className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizSingle;
