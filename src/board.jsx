import { Tile } from "./tile";
import { useState } from "react";

export default function Board() {
  const [tileValue, setTileValue] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  function handleClick(i) {
    let tempTileValue = tileValue.slice();
    if (tileValue[i]) return;
    if (isX) {
      tempTileValue[i] = "X";
    } else {
      tempTileValue[i] = "O";
    }
    setIsX(!isX);
    setTileValue(tempTileValue);
  }

  function checkWinner() {}

  return (
    <>
      <button onClick={() => setTileValue(Array(9).fill(null))}>Reset</button>

      {tileValue.includes(null) ? (
        <span>{`${isX ? "X" : "O"}'s move`}</span>
      ) : (
        <span>Game Over!</span>
      )}

      <div>
        <Tile
          value={tileValue[0]}
          onClick={() => {
            handleClick(0);
          }}
        />
        <Tile
          value={tileValue[1]}
          onClick={() => {
            handleClick(1);
          }}
        />
        <Tile
          value={tileValue[2]}
          onClick={() => {
            handleClick(2);
          }}
        />
      </div>

      <div>
        <Tile
          value={tileValue[3]}
          onClick={() => {
            handleClick(3);
          }}
        />
        <Tile
          value={tileValue[4]}
          onClick={() => {
            handleClick(4);
          }}
        />
        <Tile
          value={tileValue[5]}
          onClick={() => {
            handleClick(5);
          }}
        />
      </div>

      <div>
        <Tile
          value={tileValue[6]}
          onClick={() => {
            handleClick(6);
          }}
        />
        <Tile
          value={tileValue[7]}
          onClick={() => {
            handleClick(7);
          }}
        />
        <Tile
          value={tileValue[8]}
          onClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </>
  );
}
// 0 1 2
// 3 4 5
// 6 7 8

// 0  => 0 1 2 || 0 3 6 || 0 4 8
// 1  => 0 1 2 || 1 4 7
// 2  => 0 1 2 || 2 5 8 || 2 4 6
// 3  => 0 3 6 || 3 4 5
// 4  => 1 4 7 || 0 4 8 || 2 4 6 || 3 4 5
// 5  => 2 5 8 || 3 4 5
// 6  => 0 3 6 || 6 7 8 || 6 4 2
// 7  => 6 7 8 || 1 4 7
// 8  => 6 7 8 || 2 5 8 || 0 4 8
