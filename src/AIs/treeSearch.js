import {
  checkCompletion,
  setCellValueInGrid,
  allAvailableMoves,
  max,
  average,
} from '../helpers';

export function treeSearch(searchDepth) {
  return (grid, playerIndex) => {
    const availableMoves = allAvailableMoves(grid);
    const movePoints = availableMoves.map((move) => ({
      move,
      points: evaluateMove(grid, playerIndex, move, searchDepth),
    }));
    const maxPoints = max(movePoints.map((m) => m.points));
    const bestMoves = movePoints.filter((move) => move.points === maxPoints);
    const moveToUse = bestMoves[Math.floor(Math.random() * bestMoves.length)];
    return moveToUse.move;
  };
}

function evaluateMove(grid, playerIndex, move, depth) {
  const { newGrid, newMove } = simulateMove(move, grid, playerIndex);
  const isWinningMove =
    checkCompletion(newGrid, newMove, playerIndex) === playerIndex;

  if (isWinningMove) {
    return 1;
  } else {
    if (depth > 0) {
      const availableMoves = allAvailableMoves(newGrid);
      if (availableMoves.length === 0) return 0;
      const movePoints = availableMoves.map((nextMove) => ({
        move: nextMove,
        points: evaluateMove(newGrid, 1 - playerIndex, nextMove, depth - 1),
      }));
      return -average(movePoints.map((m) => m.points));
    } else return 0;
  }
}

function simulateMove(move, grid, playerIndex) {
  const newGrid = setCellValueInGrid(move, playerIndex, grid);
  const newMove = { ...move, value: playerIndex };
  return { newGrid, newMove };
}
