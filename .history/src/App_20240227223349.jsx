import Header from "./components/Header";

function App() {
  return (
    <body className="bg-white font-common">
      <Header/>

    <!-- Landing page content start -->
    <section
      className="lg:w-9/12 md:w-[90%] w-[95%] mx-auto text-center"
      id="rulesContainer"
    >
      <h1 className="text-center my-8 text-xl">Welcome to Quiz Hero</h1>
      <div className="lg:w-[80%] md:w-[90%] w-[90%] mx-auto text-left">
        <h1 className="text-md text-gray-800 text-center">Quiz Rules:</h1>
        <p className="text-xs italic mt-1 mb-4 text-orange-800 text-center">
          Please read all the rules and steps before start.
        </p>
        <!-- Quiz rules start -->
        <ul className="text-sm my-10">
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 1:</span> Click on the
            <span className="bg-green-600 text-white px-2 rounded">Start Quiz</span>
            button below.
          </li>
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 2:</span> After
            clicking Start button, you will see a page with 3s count down, wait
            until the count is over!
          </li>
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 3:</span> You will see
            the questions with 4 options for each, and counter will start and
            which will count your exam time.
          </li>
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 4:</span> You have to
            select the correct answer, and you have 60 seconds to answer 6
            questions.
          </li>
          <li className="my-4">
            <span className="bg-orange-200 px-2 rounded">Step 5:</span> Click on the
            submit quiz button, when you are done with all the answers.
          </li>
        </ul>
        <!-- Quiz rules end -->
      </div>
      <button className="bg-green-600 px-20 py-2 text-white rounded" id="startQuiz">
        Start Quiz
      </button>
    </section>
    <!-- Landing page content start -->

    <!-- Top bar of question page start -->
    <section
      className="shadow-sm my-5 py-2 sticky top-0 bg-white z-10 hidden"
      id="alertContainer"
    >
      <div
        className="w-9/12 mx-auto flex md:flex-row flex-col justify-between items-center"
      >
        <div className="text-xs font-normal">
          <span className="text-red-700">Attention!</span> You have 60 seconds to
          answer 6 questions.
          <br />
          Please keep an eye on the timer and make sure to answer all questions
          before time runs out.
        </div>
        <!-- Timer part Start -->
        <div className="flex items-center">
          <p className="mr-2 text-xl text-gray-700">
            <i className="fa-solid fa-clock-rotate-left"></i>
          </p>
          <div className="text-left">
            <h1 className="text-green-700 text-xl" id="count">
              00:00<sub className="text-xs ml-1">sec</sub>
            </h1>
            <p className="text-xs -mt-1 text-gray-700">Time Consumed</p>
          </div>
        </div>
        <!-- Timer part end -->
      </div>
    </section>
    <!-- Top bar of question page end -->

    <!-- Quiz section start -->
    <section
      className="md:w-9/12 w-[90%] md:flex-row flex-col mx-auto hidden"
      id="submitContainer"
    >
      <!-- Question section start -->
      <div className="md:w-[70%] w-full">
        <div className="duration-500" className="quizContainer"></div>
      </div>
      <!-- Question section end -->
      <!-- Answer section start -->
      <div className="md:w-[30%] w-full shadow-sm">
        <div className="mx-2 text-center sticky top-20" id="displayResult">
          <div className="mb-8">
            <p>Chosen Answers</p>
            <div id="answersContainer">
              <h1 className="text-xl my-4 text-red-600">No Answers</h1>
            </div>
          </div>
          <h1 className="mt-5 mb-2 text-lg capitalize font-medium text-gray-700">
            All Done! Ready to submit your quiz?
          </h1>
          <button
            className="bg-green-600 text-white w-full py-2 rounded"
            id="submit"
          >
            Submit Quiz
          </button>
        </div>
      </div>
      <!-- Answer section end -->
    </section>
    <!-- Quiz section end -->

    <!-- Countdown section start -->
    <div
      className="fixed top-0 left-0 bg-zinc-900 bg-opacity-90 w-full h-full justify-center items-center z-20 hidden"
      id="countDownContainer"
    >
      <div className="text-center">
        <h1 className="text-gray-200 text-3xl mb-5">
          <span id="counter">3</span>s
        </h1>
        <h1 className="text-gray-200 text-xl animate-pulse">
          Stay Seated, Stay Sharp. Starting Quiz In a moment!
        </h1>
      </div>
    </div>
    <!-- Countdown section end -->

    <!-- Footer section start -->
    <footer className="py-10 text-center text-sm">
      Copyright © 2023 Quiz Hero All Rights Reserved.
    </footer>
    <!-- Footer section end -->
  </body>
  );
}

export default App;
