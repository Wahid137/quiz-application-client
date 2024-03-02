import React from "react";

const EditQuizModal = ({ isOpen, setIsOpen, quizData }) => {
  if (!isOpen) return null;

  // Use quizData to display the appropriate data in the modal

  return (
    <div>
      <div>{/* Modal content here */}</div>
    </div>
  );
};

export default EditQuizModal;
