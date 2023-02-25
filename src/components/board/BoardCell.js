import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import "./board.scss";

const BoardCell = ({ user = "no user", indx, active }) => {
  const { handelCellClick } = useContext(GameContext);
  return (
    <button
      className={`board-body__card ${
        active && user === "x" ? "active-line text-x" : ""
      } ${active && user === "o" ? "active-line text-o" : ""}`}
      onClick={() => handelCellClick(indx)}
    >
      {user === "x" ? "x" : user === "o" ? "o" : ""}
    </button>
  );
};

export default BoardCell;
