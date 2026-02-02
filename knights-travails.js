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
  
      let neighbors = neighbors(curr[0]); // We generate his neighbors
      
      for (let i = 0; i < neighbors.length; i++) {
        if (!visited.some(pos => pos[0] === neighbors[0] && pos[1] === neighbors[1])) {  // We first check the neighbor hasn't been visited (i.e. : enqueud) yet
          queue.push([neighbors[i], curr]); // If not, we enqueue it while putting the current square as its parent
          visited.push(neighbors[i]); // We then mark it as visited
        }
      }
    
  }
}

/*
    // Generate neighbors
    let nextSquares = neighbors(currPos);

    // Enqueue unvisited neighbors
    for (let i = 0; i < nextSquares.length; i++) {
      let neighbor = nextSquares[i];
      // Only enqueue if not visited
      if (!visited.some(pos => pos[0] === neighbor[0] && pos[1] === neighbor[1])) {
        queue.push([neighbor, [currPos, parent]]); // Keep track of parent
        visited.push(neighbor);                    // Mark visited when enqueueing
      }
    }
  }
}
