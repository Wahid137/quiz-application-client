const AddQuiz = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  /*  {
        "category": "Quiz 1",
        "id": "622a1c387cc59eab6f950807",
        "correctAnswer": "Asia",
        "incorrectAnswers": ["South America", "Oceania", "Europe"],
        "question": "The country of Turkmenistan is on which continent?"
      }, */
  return (
    <div className="min-h-screen mt-5 w-1/2 mx-auto">
      <div className="flex-col">
        <div className="card shadow-2xl bg-[#1d2844]">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Quiz Number</span>
              </label>
              <input
                type="number"
                placeholder="Enter Quiz Number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Question</span>
              </label>
              <input
                type="text"
                placeholder="Enter Question"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">
                  Incorrect Option 1
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Incorrect option 2"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">
                  Incorrect Option 2
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Incorrect option 1"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">
                  Incorrect Option 3
                </span>
              </label>
              <input
                type="text"
                placeholder="Enter Incorrect option 3"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Correct Option</span>
              </label>
              <input
                type="text"
                placeholder="Enter correct option"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6 w-1/2 mx-auto">
              <button
                type="submit"
                className="bg-accent text-slate-100 dark:bg-primary dark:text-accent px-10 py-2 rounded-full float-right flex items-center gap-2 justify-center"
              >
                Add Question
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuiz;
