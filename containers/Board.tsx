import { useState } from "react";
import Square from "../components/Square";
function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [currentPlayer, setCurrentPlater] = useState<"X" | "0">(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );

  const [winner, setWinner] = useState(null);

  return (
    <div>
      <p>Hey {currentPlayer}, its your turn</p>

      {Array(9)
        .fill(null)
        .map((_, i) => {
          return (
            <Square
              key={i}
              onClick={() => setSquarevalue(i)}
              value={squares[i]}
            />
          );
        })}
    </div>
  );
}

export default Board;
