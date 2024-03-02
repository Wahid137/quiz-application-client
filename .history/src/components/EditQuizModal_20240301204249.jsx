const EditQuizModal = ({ isOpen, setIsOpen, quizData }) => {
  if (!isOpen) return null;

  // Use quizData to display the appropriate data in the modal

  return (
    <div>
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{quizData.question}</h3>
          <h3 className="text-lg font-bold">{productName}</h3>
          <form>
            <div className="form-control w-full mb-8 relative">
              <input
                type="text"
                className="border-b-2 relative bg-warning border-gray-300 text-gray-900 focus:outline-none focus:border-teal-600 focus:ring-0 border-0 w-full h-10"
                defaultValue={quizData.correctAnswer}
                readOnly
              />
              {errors.userName && (
                <p className="text-red-600">{errors.userName?.message}</p>
              )}
            </div>

            <div className="mb-5 flex items-center justify-center">
              <button className="btn btn-secondary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditQuizModal;
