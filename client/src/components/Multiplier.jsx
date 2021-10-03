import PropTypes from "prop-types";

const Multiplier = ({ multiplier }) => {
  return (
    <div className="multiplier">
      <div className="big">{multiplier.toFixed(1)}X</div>
    </div>
  );
};

Multiplier.propTypes = {
  multiplier: PropTypes.number.isRequired,
};

Multiplier.defaultProps = {
  multiplier: "",
};

export default Multiplier;
