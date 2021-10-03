import PropTypes from "prop-types";
import { SCORE } from "./../constants/label";

const Score = ({ score }) => {
  return (
    <div className="score">
      <div className="big">{score}</div>
      <div className="small">{SCORE}</div>
    </div>
  );
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

Score.defaultProps = {
  score: "",
};

export default Score;
