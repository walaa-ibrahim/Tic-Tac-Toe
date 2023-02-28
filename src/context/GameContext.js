import { createContext, useEffect, useState, useContext } from "react";
import { calcSquar, calcCompWon, calcBestMove } from "../helper/CalcSquar";
import { ModelContext } from "./ModelContext";
export const GameContext = createContext();
const GameState = ({ children }) => {
  const { modalShow, modalHide } = useContext(ModelContext);
  const [screen, setScreen] = useState("start");
  const [activeUser, setActiveUser] = useState("x");
  const [bordCells, setBoardCells] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winnerLine, setWinnerLine] = useState(null);
  const [ties, setTies] = useState({ x: 0, o: 0, n: 0 });
  const currentPlayer = xTurn ? "o" : "x";
  const handelCellClick = (indx) => {
    if (bordCells[indx] || winner) {
      return;
    }
    let newcells = [...bordCells];
    newcells[indx] =
      newcells[indx] === null
        ? activeUser === "x" && !xTurn
          ? "x"
          : "o"
        : newcells[indx];
    setBoardCells(newcells);
    setActiveUser(currentPlayer);
    setXTurn(!xTurn);
    checkWinner(newcells);
  };

  const computerMove = (index) => {
    let newcells = [...bordCells];

    newcells[index] =
      newcells[index] === null
        ? activeUser === "x" && xTurn
          ? "o"
          : "x"
        : newcells[index];
    setBoardCells([...newcells]);
    setXTurn(!xTurn);
    checkWinner(newcells);
  };

  const emptyIndexes = calcBestMove(bordCells, activeUser === "x" ? "o" : "x");
  const wonCompMove = calcCompWon(bordCells).filter((el) =>
    el.player === activeUser ? "x" : "o"
  );

  useEffect(() => {
    if (currentPlayer !== activeUser && !winner) {
      if (wonCompMove[0]?.player === "x") {
        computerMove(wonCompMove[0]?.winner);
        return;
      } else if (wonCompMove[0]?.player === "o") {
        computerMove(wonCompMove[0]?.winner);
        return;
      }
      computerMove(emptyIndexes);
      !winner && checkNoWinner();
    }
  }, [screen, xTurn, winner, emptyIndexes, wonCompMove]);
  const checkWinner = (squares) => {
    const isWinner = calcSquar(squares);
    let temp = { ...ties };
    if (isWinner[0]) {
      setWinner(isWinner[0].winner);
      setWinnerLine(isWinner[0].line);
      temp[isWinner[0]?.winner] += 1;
      modalShow();
      setTies(temp);

      return;
    }
  };
  const ReloadHandeler = () => {
    console.log("activeuser", activeUser);
    setBoardCells(Array(9).fill(null));
    modalHide();
    setXTurn(true);
    setWinner(null);
    setWinnerLine(null);
  };
  const hideHandeler = () => {
    modalHide();
    setScreen("start");
    setBoardCells(Array(9).fill(null));
    setXTurn(false);
    setTies({ x: 0, o: 0, n: 0 });
    setWinner(null);
    setWinnerLine(null);
  };
  const checkNoWinner = () => {
    const moves = bordCells.filter((square) => square === null);
    if (moves.length === 0) {
      setWinner("no winner");
      let temp = { ...ties };
      temp["n"] += 1;
      modalShow();
      setTies(temp);
    }
  };

  return (
    <GameContext.Provider
      value={{
        screen,
        setScreen,
        xTurn,
        setXTurn,
        activeUser,
        setActiveUser,
        bordCells,
        setBoardCells,
        winnerLine,
        winner,
        handelCellClick,
        ReloadHandeler,
        hideHandeler,
        ties,
        computerMove,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameState;
