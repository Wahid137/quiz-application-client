import { RiArrowRightLine } from "react-icons/ri";
import Button from "./Button";

const Quiz = () => {
  return (
    <div className=" w-full md:max-w-lg ">
      <h1>Quizzes</h1>

      <Button>
        Next
        <RiArrowRightLine />
      </Button>
    </div>
  );
};

export default Quiz;
