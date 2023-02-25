
const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];
export const calcSquar = (squares) => {
  return lines
    .map((line) => {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return { winner: squares[a], line: line };
      }
    })
    .filter((el) => el !== undefined);
}

export const calcCompWon = (squares) => {
 const requiredLine=lines.map((line) => {
    const [a, b, c] = line;
    if (
      (squares[a] && squares[a] === squares[b] &&squares[c] === null
        ) ||
      (squares[b] && squares[b] === squares[c] && squares[a] === null) ||
      (squares[c] && squares[a] === squares[c] && squares[b] === null)
    ) {
      return {
        player:
          squares[a] === null
            ? squares[b]
            : squares[b] === null
            ? squares[c]
            : squares[c] === null && squares[a],
        winner:
          squares[a] === null
            ? a
            : squares[b] === null
            ? b
            : squares[c] === null && c,
        line: line,
      };
    }
  
 }).filter(el => el !== undefined)
return requiredLine;
}

export const calcBestMove = (squares) => {
  const getArray = [];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] || squares[b] || squares[c]) {
      getArray.push([...lines[i]]);
    }
  }
  for (let i = 0; i < getArray.length; i++) {
    let val = getArray[i].find((el) => {
      if (squares[el] === null) {
        return el + '';
      }
      return null;
    });

    if (!val) {
      continue;
    } else {
      return +val;
    }
  }
  return null;
};
 
