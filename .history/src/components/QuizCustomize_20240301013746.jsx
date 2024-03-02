const appStyle =
  "h-screen bg-primary text-slate-800 dark:bg-accent dark:text-slate-100 flex flex-col items-center justify-center p-3";

const questionStyle = "font-medium text-2xl leading-tight";
const QuizCustomize = () => {
  return (
    <div className={appStyle}>
      <div className=" w-full md:max-w-lg ">
        <div>
          <div className=" flex justify-between mb-3">
            <span>Quiz 1</span>
            <span>1/10</span>
          </div>

          <p className={questionStyle}>{currentQuiz?.question}</p>

          <AnswerList
            answers={answers}
            choice={choice}
            onSelectAnswer={handleSelectAnswer}
          />

          <div className="flex justify-between">
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
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default QuizCustomize;
