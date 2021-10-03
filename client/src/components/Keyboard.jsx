import {} from "./../utility/domEvents";
import Key from "./Key";

const Keyboard = () => {
  return (
    <div className="keyboard">
      <div className="keyboard__row">
        <Key char="Q" />
        <Key char="W" />
        <Key char="E" />
        <Key char="R" />
        <Key char="T" />
        <Key char="Y" />
        <Key char="U" />
        <Key char="I" />
        <Key char="O" />
        <Key char="P" />
      </div>
      <br />
      <div className="keyboard__row">
        <Key char="A" />
        <Key char="S" />
        <Key char="D" />
        <Key char="F" />
        <Key char="G" />
        <Key char="H" />
        <Key char="J" />
        <Key char="K" />
        <Key char="L" />
      </div>
      <br />
      <div className="keyboard__row">
        <Key char="Z" />
        <Key char="X" />
        <Key char="C" />
        <Key char="V" />
        <Key char="B" />
        <Key char="N" />
        <Key char="M" />
      </div>
    </div>
  );
};

export default Keyboard;
