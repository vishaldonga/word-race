import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as LABEL from "./../constants/label";

const Leaderboard = ({ closeLeaderboard }) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let result = await fetch(`${process.env.REACT_APP_API_URL}/api/scores`);
    result = await result.json();
    const sortingFunction = (a, b) => (parseInt(b.score) > parseInt(a.score) ? 1 : -1);
    setData(result.sort(sortingFunction));
  };
  useEffect(() => {
    getData();
  }, []);

  const calculateAverage = (array) => {
    let sum = 0;
    for (let { score } of array) {
      sum = sum + parseInt(score);
    }
    return (sum / array.length).toFixed(2);
  };

  return (
    <div className="modal">
      <div className="leaderboard-modal-content">
        <div className="tar">
          <div className="close-button" onClick={closeLeaderboard}>
            {LABEL.CLOSE}
          </div>
        </div>
        <h1>{LABEL.LEADERBOARD}</h1>
        <div>
          <h3>
            {LABEL.TOTAL_NO_GAME}: {data.length}
          </h3>
          <h3>
            {LABEL.AVG_SCORE}: {data.length > 0 ? calculateAverage(data) : 0}
          </h3>
        </div>
        <div className="leaderboard-list">
          <ul>
            {data.slice(0,10).map(({ score }, index) => (
              <div className="flex-center" key={index}>
                <p>{index + 1}.</p>&nbsp;
                <li>{score}</li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

Leaderboard.propTypes = {
  closeLeaderboard: PropTypes.func.isRequired,
};

Leaderboard.defaultProps = {
  closeLeaderboard: () => {},
};

export default Leaderboard;
