import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Button from "./Button";

const ResultPage = ({ score, quizzes }) => {
  const { user } = useContext(AuthContext);
  const category = quizzes[0].category;
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const marks = {
    email: user?.email,
    marks: score,
    category,
  };

  const handleSubmission = () => {
    setIsSubmitting(true);
    fetch("https://quiz-application-server.vercel.app/marks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(marks),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to save user");
        }
        return res.json();
      })
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Submitted Successfully!");
          navigate("/dashboard");
        } else {
          toast.error(data.message);
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error("An error occurred while submitting the quiz.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="mt-0 flex flex-col justify-center items-center gap-3 pb-8">
      <img src="/yaah.gif" className=" w-48  mt-auto md:mt-0 ms-11 " alt="" />

      <span className=" text-3xl">Congratulations!</span>

      <h2 className=" font-bold text-4xl">Quiz Completed</h2>

      <span className="block text-lg font-light">
        You have successfully completed the quiz.
      </span>

      <Button
        onClickButton={handleSubmission}
        disabled={isSubmitting}
        customStyle={`w-full md:w-fit bg-accent text-white dark:bg-primary px-8 py-2 rounded-full mt-auto md:mt-10 ${
          isSubmitting && "opacity-50 cursor-not-allowed"
        }`}
      >
        {isSubmitting ? "Submitting..." : "Submit Quiz"}
      </Button>
    </div>
  );
};

export default ResultPage;
