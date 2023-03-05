import {
  checkCompletion,
  lowestAvailableCellInColumn,
  setCellValueInGrid,
  allAvailableMoves,
  max,
} from '../helpers';

export function treeSearch(searchDepth) {
  return (grid, playerIndex) => {
    console.log('treesearch ai was run');
    const availableMoves = allAvailableMoves(grid);
    const movePoints = availableMoves.map((move) => ({
      move: move,
      points: evaluateMove(grid, playerIndex, move, searchDepth),
    }));
    const maxPoints = max(movePoints.map((m) => m.points));
    const bestMoves = movePoints.filter((move) => move.points === maxPoints);
    const moveToUse = bestMoves[Math.floor(Math.random() * bestMoves.length)];
    return moveToUse.move;
  };
}

function evaluateMove(grid, playerIndex, move, depth) {
  console.log('evaluateMove', { playerIndex, move: move, depth });
  const { newGrid, newMove } = simulateMove(move, grid, playerIndex);
  const isWinningMove =
    checkCompletion(newGrid, newMove, playerIndex) === playerIndex;
  return isWinningMove ? 1 : 0;
}

function simulateMove(move, grid, playerIndex) {
  const newGrid = setCellValueInGrid(move, playerIndex, grid);
  const newMove = { ...move, value: playerIndex };
  return { newGrid, newMove };
}
