const Answer = () => {
  const answerStyle = {
    label: ` p-3 px-5 block cursor-pointer rounded-full border border-black  border-opacity-20  dark:border-primary dark:border-opacity-[0.5] mb-3 `,
    text: "ps-3 text-lg font-normal",
  };

  return (
    <div>
      <label className={answerStyle.label}>
        <input
          type="radio"
          name="answer"
          checked={choice === text}
          onChange={() => {
            onSelectAnswer(text);
          }}
          // className=" absolute opacity-0"
          className=" accent-primary"
        />
        <span className={answerStyle.text}>Lorem ipsum dolor sit.</span>
      </label>
    </div>
  );
};

export default Answer;
