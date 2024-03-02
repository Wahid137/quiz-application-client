import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      className="lg:w-9/12 md:w-[90%] w-[95%] mx-auto text-center"
      id="rulesContainer"
    >
      <h1 className="text-center my-8 text-2xl">Welcome to Quiz Examination</h1>
      <div className="lg:w-[80%] md:w-[90%] w-[90%] mx-auto text-left">
        <h1 className="text-lg text-gray-800 text-center">Quiz Rules:</h1>
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
            clicking Start button, you will see a Quiz Page!
          </li>
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 3:</span> You will
            see the questions with 4 options for each!
          </li>
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 4:</span> You have
            to select the correct answer!
          </li>
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 5:</span> You can
            not skip question without giving answer!
          </li>
        </ul>
      </div>
      <Link to="/quiz">
        <button
          className="bg-accent px-20 py-2 text-white rounded"
          id="startQuiz"
        >
          Start Quiz
        </button>
      </Link>
    </section>
  );
};

export default Home;
