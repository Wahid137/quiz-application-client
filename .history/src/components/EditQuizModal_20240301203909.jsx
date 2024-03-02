const EditQuizModal = ({ isOpen, setIsOpen, quizData }) => {
  if (!isOpen) return null;

  // Use quizData to display the appropriate data in the modal

  return (
    <div>
      <div>
        <h1>{quizData.question}</h1>
      </div>
    </div>
  );
};

export default EditQuizModal;
