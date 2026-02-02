const moves = [
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
];

// Generates all the possible neighbors of a square
function neighbors(position) {
  const okMoves = moves.filter(
    (move) =>
      position[0] + move[0] >= 0 &&
      position[0] + move[0] <= 7 &&
      position[1] + move[1] >= 0 &&
      position[1] + move[1] <= 7,
  );

  return okMoves.map((move) => [position[0] + move[0], position[1] + move[1]]);
}

function move(position) {}

function knightMoves(start, end) {}
