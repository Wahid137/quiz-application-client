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
    <div className="w-full text-white p-5 m-5 bg-[#1d2844] max-w-lg mx-auto md:p-12 my-5 rounded-lg shadow-md ">
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

        <div className="flex justify-end">
          <FaRegEdit className="w-5 h-5" />
          <MdDelete className="w-5 h-5 mx-2" />
        </div>

        {/* <div className="flex justify-between">
            {quizNo === 0 ? (
              <div></div>
            ) : (
              <Button onClickButton={handleClickPrevious}>
                <RiArrowLeftLine />
                previous
              </Button>
            )}
            <Button onClickButton={handleClickNext}>
              Next
              <RiArrowRightLine />
            </Button>
          </div> */}
      </div>
    </div>
  );
};

export default QuizSingle;
