import Word from "./Word";
import Multiplier from "./Multiplier";
import Score from "./Score";
import React, { useState, useEffect } from "react";
import dictionary from "./../data/dictionary.json";
import ScoreModal from "./ScoreModal";
import Audio from "./Audio";

//Score = (1/time)*multiplier*10)

const WordStack = () => {
  const [words, setWords] = useState([]);
  const [wordMatched, setWordMatched] = useState(false);
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  let initialTime = Date.now();
  let currentWord = "";

  const closeModal = () => {
    setModalOpen(false);
    setScore(0);
    setMultiplier(1);
    getWords();
  };

  const getWords = () => {
    for (let word of dictionary) {
      setWords((words) => [...words, word.toUpperCase()]);
    }
  };

  const playRightSound = () => {
    document.getElementById("right").play();
  };

  const playWrongSound = () => {
    document.getElementById("wrong").play();
  };

  useEffect(() => {
    getWords();
  }, []);

  const getKey = (e) => {
    const location = e.location;
    let selector;
    if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
      selector = ['[data-key="' + e.keyCode + '-R"]'];
    } else {
      const code = e.keyCode || e.which;
      selector = [
        '[data-key="' + code + '"]',
        '[data-char*="' + encodeURIComponent(String.fromCharCode(code)) + '"]',
      ].join(",");
    }
    return document.querySelector(selector);
  };

  document.onkeydown = (e) => {
    const key = getKey(e);
    if (!key) {
      return;
    }
    currentWord += key.innerText;
    if (currentWord === words[0]) {
      words.shift();
      setWordMatched(true);
      const score = Math.round(
        (1 / (Date.now() - initialTime)) * multiplier * 100000
      );
      setScore((currentScore) => currentScore + score);
      setMultiplier((multiplier) => multiplier + 0.1);
      currentWord = "";
      playRightSound();
      if (words.length === 0) {
        setModalOpen(true);
      }
    } else if (key.innerText !== words[0][currentWord.length - 1]) {
      setMultiplier(1);
      playWrongSound();
      currentWord = "";
    }
  };

  useEffect(() => {
    setWordMatched(false);
  }, [wordMatched]);

  return (
    <>
      <div className="score-info">
        <Score score={score} />
        <Multiplier multiplier={multiplier} />
      </div>
      <div className="word-stack">
        {words.length > 0 ? (
          <>
            <Word word={words[0]} />
          </>
        ) : isModalOpen ? (
          <ScoreModal score={score} closeModal={closeModal} />
        ) : null}
      </div>
      <Audio />
    </>
  );
};

export default WordStack;
