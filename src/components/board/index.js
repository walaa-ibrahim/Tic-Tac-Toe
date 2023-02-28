import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { GameContext } from "../../context/GameContext";
import { ModelContext } from "../../context/ModelContext";
import BoardModel from "../modal/BoardModel";
import "../start/start.scss";
import "./board.scss";
import BoardCell from "./BoardCell";
const BoardPage = () => {
  const {
    bordCells,
    ties,
    ReloadHandeler,
    hideHandeler,
    winner,
    winnerLine,
    activeUser,
  } = useContext(GameContext);
  const { open } = useContext(ModelContext);

  return (
    <>
      <div className="navbar d-flex justify-content-between my-2">
        <h3 className="header header__board text-uppercase">
          <span className="text-x">x </span>
          <span className="text-o">o</span>
        </h3>

        <Button className="bg-gray" onClick={()=>{ReloadHandeler();}}>
          <img src="./arrow-clockwise.svg" alt="reload" />
        </Button>
      </div>
      <div className="d-flex align-items-center board-body">
        <div className="board-body__container w-100 ">
          {bordCells.map((val, indx) => (
            <BoardCell
              key={indx}
              user={val}
              indx={indx}
              active={winner && winnerLine && winnerLine.includes(indx)}
            />
          ))}
        </div>
      </div>
      <div className="board-main my-5">
        <Button className="bg-red">
          <p>x ({activeUser === "x" ? "you" : "cpu"})</p>
          <strong>{ties.x}</strong>
        </Button>
        <Button className="bg-gray">
          <p>ties</p>
          <strong>{ties.x + ties.o + ties.n}</strong>{" "}
        </Button>
        <Button className="bg-skyBlue">
          <p>o ({activeUser === "o" ? "you" : "cpu"})</p>
          <strong>{ties.o}</strong>
        </Button>
      </div>
      <BoardModel
        show={open}
        onHide={hideHandeler}
        ReloadHandeler={ReloadHandeler}
      />
    </>
  );
};

export default BoardPage;
