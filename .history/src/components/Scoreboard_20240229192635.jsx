const Scoreboard = () => {
  return (
    <div>
      <div className="overflow-x-auto w-3/4 mx-auto bg-zinc-200">
        <table className="table">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Email</th>
              <th>Quiz Number</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover">
              <th>1</th>
              <td>motin@gmail</td>
              <td>Quiz 1</td>
              <td>10</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Scoreboard;
