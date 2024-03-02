import { hash } from "object-hash";

const QuizSingle = ({ quiz }) => {
  console.log(quiz);
  const { category, correctAnswer, incorrectAnswer, question } = quiz;

  // Ensure incorrectAnswer is defined and contains an array before mapping
  const incorrectAnswerCopy = Array.isArray(incorrectAnswer)
    ? [...incorrectAnswer.map((answer) => ({ ...answer }))]
    : [];

  const options = [correctAnswer, ...incorrectAnswerCopy];

  return (
    <div className=" text-white p-5 m-5 bg-[#1d2844] max-w-lg mx-auto md:p-12 my-5 rounded-lg shadow-md ">
      <div>
        <p className="text-md leading-tight">{question}</p>

        <div className="my-4 w-full ">
          {options?.map((option) => (
            <div key={hash(option)}>
              <label className="p-2 px-5 block rounded border border-white mb-3">
                <span className="text-md">{option}</span>
              </label>
            </div>
          ))}
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
