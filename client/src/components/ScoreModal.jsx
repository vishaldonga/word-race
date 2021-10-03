import PropTypes from "prop-types";
import * as LABEL from "./../constants/label";

const ScoreModal = ({ score, closeModal }) => {
  const saveScore = async () => {
    const item = { score };
    let result = await fetch(`${process.env.REACT_APP_API_URL}/api/scores/addScore`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    if (result.status === 400) {
      alert(result.error);
      return;
    }
    closeModal();
  };
  return (
    <div className="modal">
      <div className="score-modal-content">
        <h2>{LABEL.GAME_COMPLETED}</h2>
        <h1>
          {LABEL.YOUR_SCORE}: {score}
        </h1>
        <h4>{LABEL.SAVE_SCORE}</h4>
        <div>
          <button class="button black-button" onClick={saveScore}>
            {LABEL.YES}
          </button>
          <button class="button" onClick={closeModal}>
            {LABEL.NO}
          </button>
        </div>
      </div>
    </div>
  );
};

ScoreModal.propTypes = {
  score: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

ScoreModal.defaultProps = {
  score: "",
  closeModal: () => {},
};

export default ScoreModal;
