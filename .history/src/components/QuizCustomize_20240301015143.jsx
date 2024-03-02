const QuizCustomize = () => {
  const questionStyle = "font-sm text-2xl leading-tight";

  const answerStyle = {
    label: ` p-3 px-5 block cursor-pointer rounded-full border border-black  border-opacity-20  dark:border-primary dark:border-opacity-[0.5] mb-3`,
    text: "ps-3 text-lg font-normal",
  };
  return (
    <div className="bg-white text-slate-800 w-[500px]">
      <div>
        <div>
          <p className={questionStyle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, quasi.?
          </p>

          <div className="my-8">
            <div>
              <label className={answerStyle.label}>
                <input
                  type="radio"
                  name="answer"
                  // className=" absolute opacity-0"
                  className=" accent-primary"
                />
                <span className={answerStyle.text}>Lorem, ipsum.</span>
              </label>
            </div>
            <div>
              <label className={answerStyle.label}>
                <input
                  type="radio"
                  name="answer"
                  // className=" absolute opacity-0"
                  className=" accent-primary"
                />
                <span className={answerStyle.text}>Lorem, ipsum.</span>
              </label>
            </div>
            <div>
              <label className={answerStyle.label}>
                <input
                  type="radio"
                  name="answer"
                  // className=" absolute opacity-0"
                  className=" accent-primary"
                />
                <span className={answerStyle.text}>Lorem, ipsum.</span>
              </label>
            </div>
            <div>
              <label className={answerStyle.label}>
                <input
                  type="radio"
                  name="answer"
                  // className=" absolute opacity-0"
                  className=" accent-primary"
                />
                <span className={answerStyle.text}>Lorem, ipsum.</span>
              </label>
            </div>
            <div>
              <label className={answerStyle.label}>
                <input
                  type="radio"
                  name="answer"
                  // className=" absolute opacity-0"
                  className=" accent-primary"
                />
                <span className={answerStyle.text}>Lorem, ipsum.</span>
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
