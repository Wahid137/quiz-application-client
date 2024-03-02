import Button from "./Button";

const AddQuiz = () => {
  /*  {
        "category": "Quiz 1",
        "id": "622a1c387cc59eab6f950807",
        "correctAnswer": "Asia",
        "incorrectAnswers": ["South America", "Oceania", "Europe"],
        "question": "The country of Turkmenistan is on which continent?"
      }, */
  return (
    <div className="min-h-screen mt-10">
      <div className="flex-col">
        <div className="card m md:w-1/2 mx-auto shadow-2xl bg-[#1d2844]">
          <form className="card-body">
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
            <div className="form-control mt-6 w-1/2 mx-auto">
              <Button>Add Question</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddQuiz;
