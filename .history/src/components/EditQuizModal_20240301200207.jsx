const EditQuizModal = ({ quiz }) => {
  const { category, correctAnswer, incorrectAnswers, question } = quiz;
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="w-full text-white p-5 m-5 bg-[#1d2844] max-w-lg mx-auto pt-8 px-8 my-5 rounded-lg shadow-md ">
            <div>
              <p className="text-md leading-tight">
                {i + 1} . {question}
              </p>

              <div className="my-4 w-full ">
                {options?.map((option, i) => (
                  <div key={i}>
                    <label className="p-2 px-5 block rounded border border-white mb-3">
                      <span className="text-md">{option}</span>
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex justify-end mt-5">
                <div
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="hover:bg-black w-10 h-10 flex justify-center items-center rounded me-2"
                >
                  <FaRegEdit className="w-5 h-5" />
                </div>
                <div className="hover:bg-black w-10 h-10 flex justify-center items-center rounded">
                  <MdDelete className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EditQuizModal;