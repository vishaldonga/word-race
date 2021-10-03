import PropTypes from "prop-types";

const Key = ({ char }) => {
  return (
    <div className="key--letter" data-char={char}>
      {char}
    </div>
  );
};

Key.propTypes = {
  char: PropTypes.string.isRequired,
};

Key.defaultProps = {
  char: "",
};
export default Key;
