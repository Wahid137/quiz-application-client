const appStyle =
  "h-screen bg-primary text-slate-800 dark:bg-accent dark:text-slate-100 flex flex-col items-center justify-center p-3";

const questionStyle = "font-medium text-2xl leading-tight";

const answerStyle = {
  label: ` p-3 px-5 block cursor-pointer rounded-full border border-black  border-opacity-20  dark:border-primary dark:border-opacity-[0.5] mb-3  ${
    choice === text &&
    "bg-accent dark:bg-primary text-slate-100 border-transparent"
  } hover:bg-accent dark:hover:bg-primary dark:hover:text-accent hover:text-slate-100`,
  text: "ps-3 text-lg font-normal",
};

const QuizCustomize = () => {
  return (
    <div className={appStyle}>
      <div className=" w-full md:max-w-lg ">
        <div>
          <div className=" flex justify-between mb-3">
            <span>Quiz 1</span>
            <span>1/10</span>
          </div>

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
                <span className={answerStyle.text}>{text}</span>
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
