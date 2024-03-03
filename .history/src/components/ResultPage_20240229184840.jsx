import Button from "./Button";

const ResultPage = ({ score, quizzes }) => {
  const handleSubmit = () => {
    console.log("submitted");
  };
  /*   const marks = {
    user: user?.email,
    marks: score,
    category: currentQuiz?.category,
  };

  if (quizNo === quizzes.length) {
    fetch("https://quiz-application-server-4w7191bal-wahid137.vercel.app/marks", {
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
          toast.success("Mark Added Successfully!");
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        toast.error("Failed to save user. Please try again later.");
      });
  } */

  return (
    <div className="mt-0 flex flex-col justify-center items-center gap-3 pb-8">
      <img src="/yaah.gif" className=" w-48  mt-auto md:mt-0 ms-11 " alt="" />

      <span className=" text-3xl">Congrats</span>

      <h2 className=" font-bold text-5xl"></h2>

      <span className="block text-lg font-light">
        Quiz completed successfully.
      </span>

      <Button
        onClick={handleSubmit}
        customStyle=" w-full md:w-fit bg-accent text-white dark:bg-primary px-8 py-2 rounded-full mt-auto md:mt-14 "
      >
        Click Here to Submit
      </Button>
    </div>
  );
};

export default ResultPage;
