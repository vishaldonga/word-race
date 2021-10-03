import { useState } from "react";
import GamePage from "./GamePage";
import Leaderboard from "./Leaderboard";
import * as LABEL from "./../constants/label";

const HomePage = () => {
  const [isLeaderboardVisible, setLeaderboardVisible] = useState(false);
  const [isGamePageVisible, setGamePageVisible] = useState(false);
  const showLeaderboard = () => {
    setLeaderboardVisible(true);
  };
  const startGame = () => {
    setGamePageVisible(true);
  };
  const closeLeaderboard = () => {
    setLeaderboardVisible(false);
  };
  return (
    <div>
      {!isLeaderboardVisible && !isGamePageVisible ? (
        <div className="home">
          <button onClick={showLeaderboard}>{LABEL.LEADERBOARD}</button>
          <button onClick={startGame}>{LABEL.START_GAME}</button>
        </div>
      ) : null}
      {isLeaderboardVisible ? (
        <Leaderboard closeLeaderboard={closeLeaderboard} />
      ) : null}
      {isGamePageVisible ? <GamePage /> : null}
    </div>
  );
};

export default HomePage;
