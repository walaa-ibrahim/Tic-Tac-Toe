import { createContext, useContext, useEffect, useState } from "react";
import { CalcSquar, CalcBestMove } from "../helper/CalcSquar";
import { ModelContext } from "./ModelContext";

export const GameContext = createContext();

const GameState = ({ children }) => {
      const { modalShow, modalHide } = useContext(ModelContext);
  const [screen, setScreen] = useState("start");
  const [activeUser, setActiveUser] = useState("x");
  const [playerMode, setPlayerMode] = useState("user");
  const [bordCell, setBoardCell] = useState(Array(9).fill(""));
  const [xnext, setXnext] = useState(false);
  const [winner, setWinner] = useState('');
  const [winnerLine, setWinnerLine] = useState(null);
  const [ties, setTies] = useState({ x: 0, o: 0 });
  const handelPlayerMode = (player) => {
    setPlayerMode(player);
    setScreen("board");
  };
    const currentPlayer = xnext ? "o" : "x";

  const handelCellClick = (indx) => {
    if (bordCell[indx] || winner) {
      return;
    }
    let ns = [...bordCell];
    ns[indx] = ns[indx] === '' && !xnext ? "x" : "o";
    setBoardCell(ns);
    setActiveUser(currentPlayer);
    setXnext(!xnext);
    checkWinner(ns);
  };
  const checkWinner = (squares) => {
    const isWinner = CalcSquar(squares)
    let temp ={...ties}
    if (isWinner) {
    setWinner(isWinner.winner);
      setWinnerLine(isWinner.line);
      temp[isWinner.winner] += 1;
      modalShow();
      setTies( temp );
  }  
  }
   const ReloadHandeler = () => {
     setBoardCell(Array(9).fill(""));
     modalHide();
     setXnext(false);
     setWinner("");
     setWinnerLine(null);

  };
  const hideHandeler = () => {
    modalHide();
    setScreen("start");
    setPlayerMode("user");
    setBoardCell(Array(9).fill(""));
    setXnext(false);
    setTies({x:0,o:0});
    setWinner('');
    setWinnerLine(null);
  };
  const checkNoWinner = () => {
    const moves = bordCell.filter((square) => square === "");
    if (moves.length===0) {
      setWinner('no winner');
      modalShow();
    }
  }
  const cpuNextMove = (sq) => {
    let bestMoves = CalcBestMove(sq, activeUser === "x" ? "o" : "x");
    let ns = [...bordCell];
    ns[bestMoves] = !xnext ? "x" : "o";
    setBoardCell(ns);
    setXnext(!xnext)
    checkWinner(ns)
  }
  useEffect(() => {
    checkNoWinner();
    if (playerMode === "cpu" && currentPlayer !== activeUser && !winner) {
     cpuNextMove(bordCell);
     }
  }, [xnext, winner, screen]);
  
  return (
    <GameContext.Provider
      value={{
        screen,
        setScreen,
        xnext,
        activeUser,
        setActiveUser,
        playerMode,
        setPlayerMode,
        handelPlayerMode,
        bordCell,
        setBoardCell,
        winnerLine,
        winner,
        handelCellClick,
        ReloadHandeler,
        hideHandeler,
        ties,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameState;
