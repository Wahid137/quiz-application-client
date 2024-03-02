const EditQuizModal = ({ isOpen, setIsOpen, quizData }) => {
  if (!isOpen) return null;

  // Use quizData to display the appropriate data in the modal

  return (
    <div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div>
        <div className="modal-box">
          <h3 className="font-bold text-lg">{quizData.question}</h3>
        </div>
      </div>
    </div>
  );
};

export default EditQuizModal;
