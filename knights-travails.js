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

function knightMoves(start, end) {
  let queue = [[start, null]]; // Initializing the queue with the start square and putting null as its parent
  let visited = [start]; // Marking it as visited
  let found = false;
  let targetSquare = null;

  while (queue.length > 0 && !found) {
    // While our queue is not empty and we haven't found the square we want
    let curr = queue.shift();
    if (curr[0][0] === end[0] && curr[0][1] === end[1]) {
      found = true; // If it's the target, we stop
      targetSquare = curr; // targetSquare receives the current (final) square, this is necessary because we need it to reconstruct the path (curr contains the parent as well)
    }
    let neighborsList = neighbors(curr[0]); // We generate his neighbors

    for (let i = 0; i < neighborsList.length; i++) {
      if (
        !visited.some(
          (pos) =>
            pos[0] === neighborsList[i][0] && pos[1] === neighborsList[i][1],
        )
      ) {
        // We first check the neighbor hasn't been visited (i.e. : enqueud) yet
        queue.push([neighborsList[i], curr]); // If not, we enqueue it while putting the current square as its parent
        visited.push(neighborsList[i]); // We then mark it as visited
      }
    }
  }

  // Reconstructing the path
  let path = [];
  let square = targetSquare;
  while (square[0][0] !== start[0] && square[0][1] !== start[1]) {
    path.push(square[0]);
    square = square[1];
  }
  path.push(square[0]);
  path.reverse();

  return path;
}

console.log(knightMoves([0, 0], [3, 3]));
