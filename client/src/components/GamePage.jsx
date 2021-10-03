import Instuction from "./Instruction";
import Keyboard from "./Keyboard";
import WordStack from "./WordStack";

const GamePage = () => {
  return (
    <div className="flex-col-center">
      <Instuction />
      <WordStack />
      <Keyboard />
    </div>
  );
};

export default GamePage;
