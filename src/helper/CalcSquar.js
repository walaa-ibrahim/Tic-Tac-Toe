
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

export const CalcSquar = (squares) => {
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        if (
            squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return { winner: squares[a], line: lines[i] };
            } 
    }
}

export const CalcBestMove = (squares, player) => {
  const getArray = [];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] || squares[b] || squares[c]) {
      getArray.push([...lines[i]]);
    }
  }
  for (let i = 0; i < getArray.length; i++) {
    let val = getArray[i].find((el) => {
      if (squares[el] === "") {
        return el;
      }
      return null;
    });

    if (!val) {
      continue;
    } else {
      return val;
    }
  }
  return null;
};
 
