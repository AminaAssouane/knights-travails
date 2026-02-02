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

  while (queue.length > 0 && !found) {
    // While our queue is not empty and we haven't found the square we want
    let curr = queue.shift();
    if (curr[0] === end)
      found = true; // If it's the target, we stop
    else if (!visited.includes(curr[0])) {
      // We always check if the square hasn't been visited before we generate his neighbors
      visited.push(curr[0]); // We mark it as visited
      let neighbors = neighbors(curr[0]); // We generate his neighbors
      for (let i = 0; i < neighbors.length(); i++) {
        // We enqueue the non visited neighbors
        if (!visited.includes(neighbors[i])) {
          queue.push([neighbors[i], curr]);
          visited.push(neighbors[i]);
        }
      }
    }
  }
}
