import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { GameContext } from "../../context/GameContext";
import "./start.scss";

const StartPage = () => {
  const { activeUser, setActiveUser, setScreen } =
    useContext(GameContext);

  return (
    <>
      <h2 className="header text-uppercase text-center mb-3">
        <span className="text-x">x </span>
        <span className="text-o">o</span>
      </h2>
      <div className="card text-center text-capitalize">
        <h4 className="text-lg">pick a player to start</h4>
        <div className="card__player-picker">
          <span
            className={`${activeUser === "x" ? "player-active" : ""} ${
              activeUser === "x" ? "text-x" : ""
            } `}
            onClick={() => setActiveUser("x")}
          >
            x
          </span>
          <span
            className={`${activeUser === "o" ? "player-active" : ""} ${
              activeUser === "o" ? "text-o" : ""
            } `}
            onClick={() => {
              setActiveUser("o");
            }}
          >
            o
          </span>
        </div>
        <p className="card__text-light">remember x goes first</p>
      </div>
      <Button
        className="bg-skyBlue d-block w-100 my-3"
        onClick={() => {
          setScreen("board");
        }}
      >
        Start new game
      </Button>
    </>
  );
};

export default StartPage;
