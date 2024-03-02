const QuizCustomize = () => {
  const answerStyle = {
    label: ``,
  };
  return (
    <div className="bg-white text-slate-800 w-1/2 p-5">
      <div>
        <div>
          <p className="text-md leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, quasi.?
          </p>

          <div className="my-4 w-3/4 mx-auto ">
            <div>
              <label className="p-2 px-5 block rounded border border-black mb-3">
                <input type="text" name="answer" className="accent-primary" />
                <span className="text-start text-md">Lorem, ipsum.</span>
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
    </div>
  );
};

export default QuizCustomize;
