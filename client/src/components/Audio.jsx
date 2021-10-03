import right from "./../assets/right.wav";
import wrong from "./../assets/wrong.wav";

const Audio = () => {
  return (
    <div>
      <audio id="right">
        <source src={right} type="audio/wav" />
      </audio>
      <audio id="wrong">
        <source src={wrong} type="audio/wav" />
      </audio>
    </div>
  );
};

export default Audio;
