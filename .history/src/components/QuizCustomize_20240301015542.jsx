const QuizCustomize = () => {
  const answerStyle = {
    label: ` p-3 px-5 block cursor-pointer rounded-full border border-black  border-opacity-20  dark:border-primary dark:border-opacity-[0.5] mb-3`,
    text: "",
  };
  return (
    <div className="bg-white text-slate-800 w-[500px]">
      <div>
        <div>
          <p className="text-md leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, quasi.?
          </p>

          <div className="my-4">
            <div>
              <label className={answerStyle.label}>
                <input type="text" name="answer" className=" accent-primary" />
                <span className="ps-3 text-lg font-normal">Lorem, ipsum.</span>
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
