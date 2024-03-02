import Button from "./Button";

const AddQuiz = () => {
  return (
    <div className="min-h-screen mt-10">
      <div className="flex-col">
        <div className="card w-1/2 mx-auto shadow-2xl bg-[#1d2844]">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
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
