import PropTypes from "prop-types";

const Word = ({ word }) => {
  return <div className="word">{word}</div>;
};

Word.propTypes = {
  word: PropTypes.string.isRequired,
};

Word.defaultProps = {
  word: "",
};

export default Word;
