const Home = () => {
  return (
    <section
      className="lg:w-9/12 md:w-[90%] w-[95%] mx-auto text-center"
      id="rulesContainer"
    >
      <h1 className="text-center my-8 text-xl">Welcome to Quiz Examination</h1>
      <div className="lg:w-[80%] md:w-[90%] w-[90%] mx-auto text-left">
        <h1 className="text-md text-gray-800 text-center">Quiz Rules:</h1>
        <p className="text-xs italic mt-1 mb-4 text-orange-800 text-center">
          Please read all the rules and steps before start.
        </p>

        <ul className="text-sm my-10">
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 1:</span> Click on
            the
            <span className="bg-green-600 text-white px-2 rounded">
              Start Quiz
            </span>
            button below.
          </li>
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 2:</span> After
            clicking Start button, you will see a page with 3s count down, wait
            until the count is over!
          </li>
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 3:</span> You will
            see the questions with 4 options for each, and counter will start
            and which will count your exam time.
          </li>
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 4:</span> You have
            to select the correct answer, and you have 60 seconds to answer 6
            questions.
          </li>
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 5:</span> Click on
            the submit quiz button, when you are done with all the answers.
          </li>
        </ul>
      </div>
      <button
        className="bg-green-600 px-20 py-2 text-white rounded"
        id="startQuiz"
      >
        Start Quiz
      </button>
    </section>
  );
};

export default Home;
