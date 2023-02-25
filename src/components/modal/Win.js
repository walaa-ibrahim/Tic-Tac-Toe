import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";

const Win = () => {
  const { winner } = useContext(GameContext);
  return (
    <div>
      <h3>
        {winner !== "no winner" ? (
          winner === "x" ? (
            <>
              {" "}
              <span style={{ color: "#218fad" }}>x</span> is the winner
            </>
          ) : (
            <>
              {" "}
              <span style={{ color: "#cc5252" }}>o</span> is the winner
            </>
          )
        ) : (
          "no winner yo can try again"
        )}
      </h3>
    </div>
  );
};

export default Win;
