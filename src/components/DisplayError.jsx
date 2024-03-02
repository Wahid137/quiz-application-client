import { Link } from "react-router-dom";
import NotFoundImg from "../../public/bg-notFound.png";
import Button from "./Button";

const DisplayError = () => {
  return (
    <div className="text-center w-full bg-secondary mx-auto py-32 px-10">
      <p className="text-red-500">Something went wrong!!</p>
      <img className="w-1/3 mx-auto" src={NotFoundImg} alt="Not Found" />
      <Link to="/">
        <Button>Go Home</Button>
      </Link>
    </div>
  );
};

export default DisplayError;
