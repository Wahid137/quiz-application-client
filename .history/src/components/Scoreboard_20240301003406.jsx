import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loader from "./Loader";

const retrieveScoreboard = async ({ queryKey }) => {
  const response = await axios.get(
    `https://quiz-application-server-7nw3ym79g-wahid137.vercel.app/dashboard/scoreboard?email=${queryKey[1].email}`
  );
  return response.data;
};

const Scoreboard = () => {
  const { user } = useContext(AuthContext);

  const {
    data: scoreboard,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["marks", user],
    queryFn: retrieveScoreboard,
  });

  if (isLoading) return <Loader />;
  if (error) return <div>An error occurred {error.message}</div>;

  return (
    <div className="mt-10 text-black">
      <div className="overflow-x-auto w-3/4 mx-auto bg-zinc-200">
        <table className="table">
          <thead>
            <tr className="text-black">
              <th>Serial</th>
              <th>Email</th>
              <th>Quiz Number</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {scoreboard &&
              scoreboard.map((item, i) => (
                <tr key={item._id} className="text-black">
                  <th>{i + 1}</th>
                  <td>{item?.email}</td>
                  <td>{item?.category}</td>
                  <td>{item?.marks}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scoreboard;
