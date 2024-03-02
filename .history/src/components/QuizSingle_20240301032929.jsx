const QuizSingle = ({ quiz }) => {
  console.log(quiz);
  const { category, correctAnswer, incorrectAnswer, question } = quiz;

  const options = [correctAnswer, ...incorrectAnswer];

  return (
    <div className=" text-white p-5 m-5 bg-[#1d2844] max-w-lg mx-auto md:p-12 my-5 rounded-lg shadow-md ">
      <div>
        <p className="text-md leading-tight">{question}</p>

        <div className="my-4 w-full ">
          <div>
            <label className="p-2 px-5 block rounded border border-white mb-3">
              <span className="text-md">1. Lorem, ipsum.</span>
            </label>
          </div>
          <div>
            <label className="p-2 px-5 block rounded border border-white mb-3">
              <span className="text-md">2. Lorem, ipsum.</span>
            </label>
          </div>
          <div>
            <label className="p-2 px-5 block rounded border border-white mb-3">
              <span className="text-md">3. Lorem, ipsum.</span>
            </label>
          </div>
          <div>
            <label className="p-2 px-5 block rounded border border-white mb-3">
              <span className="text-md">4. Lorem, ipsum.</span>
            </label>
          </div>
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
