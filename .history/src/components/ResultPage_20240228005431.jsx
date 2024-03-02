import { Link } from "react-router-dom";
import Button from "./Button";

const ResultPage = ({ score, quizzes }) => (
  <div className="h-screen flex flex-col justify-center items-center gap-3 pb-8">
    <img src="/yaah.gif" className=" w-48  mt-auto md:mt-0 ms-11 " alt="" />

    <span className=" text-3xl">Congrats</span>

    <h2 className=" font-bold text-5xl">{score "out of" quizzes.length * 2} Score</h2>

    <span className="block text-lg font-light">
      Quiz completed successfully.
    </span>

    <Link to="/">
      <Button customStyle=" w-full md:w-fit bg-accent text-white dark:bg-primary px-8 py-2 rounded-full mt-auto md:mt-14 ">
        Back To Home
      </Button>
    </Link>
  </div>
);

export default ResultPage;
