import { INSTRUCTION } from "./../constants/label";

const Instuction = () => {
  return (
    <div className="instruction">
      <h2>{INSTRUCTION}</h2>
      <ul>
        <li>Game consists of total 20 words.</li>
        <li>The faster you type, higher the score.</li>
        <li>Multiplier will increase on when you type word correctly.</li>
        <li>Multiplier will reset to 1 on wrong typing.</li>
        <li>
          On any mistype, whole word will reset and you have to type word again
          from start.
        </li>
        <li>Use of Backspace is not allowed.</li>
      </ul>
    </div>
  );
};

export default Instuction;
