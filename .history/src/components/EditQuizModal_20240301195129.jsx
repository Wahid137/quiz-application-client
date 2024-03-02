const EditQuizModal = ({ onClose }) => {
  return (
    <dialog id="my_modal_1" className="modal bg-black">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={onClose} className="btn">
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default EditQuizModal;
