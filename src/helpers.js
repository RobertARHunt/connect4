import * as React from 'react';

function getEmptyCell(props) {
  return {
    ...props,
    value: undefined,
  };
}

export function getStartState() {
  const cells = [];
  for (let index = 0; index < 42; index++) {
    const y = Math.floor(index / 7);
    const x = index % 7;
    const newCell = getEmptyCell({
      y,
      x,
      index,
    });
    cells.push(newCell);
  }
  return cells;
}

export function setCellValueInGrid(cellToChange, newValue, cells) {
  if (cellToChange) {
    const cellsWithNewValue = cells.map((currentCell) => {
      if (cellToChange === currentCell) {
        return setCellValue(currentCell, newValue);
      } else {
        return currentCell;
      }
    });
    return cellsWithNewValue;
  } else {
    return cells;
  }
}

function setCellValue(cell, newValue) {
  return { ...cell, value: newValue };
}

export function resetAll(setGridState, setTurnState) {
  setGridState(getStartState());
  setTurnState(0);
}

export function lowestAvailableCellInColumn(column, grid) {
  let counter = 35;
  while (counter >= 0) {
    if (grid[counter + column].value === undefined) {
      return grid[counter + column];
    }
    counter -= 7;
  }
}

export function checkCompletion(cells, cell, currentPlayer) {
  const directions = [
    { dir: 'DIAGONAL_LEFT', xChange: -1, yChange: 1 },
    { dir: 'VERTICAL', xChange: 0, yChange: 1 },
    { dir: 'DIAGONAL_RIGHT', xChange: 1, yChange: 1 },
    { dir: 'HORIZONTAL', xChange: 1, yChange: 0 },
  ];

  for (const direction of directions) {
    let dir = 1;
    let checkedCell = cell;
    let counter = 1;
    while (checkedCell.value === currentPlayer && counter < 4) {
      const nextX = checkedCell.x + direction.xChange * dir;
      const nextY = checkedCell.y + direction.yChange * dir;
      if (getCellFromCoords(cells, nextX, nextY)?.value === currentPlayer) {
        counter++;
        checkedCell = getCellFromCoords(cells, nextX, nextY);
      } else {
        if (dir === 1) {
          dir = -1;
          checkedCell = cell;
        } else {
          checkedCell = { value: undefined };
        }
      }
    }
    if (counter >= 4) {
      return currentPlayer;
    }
  }
}

function getCellFromCoords(cells, x, y) {
  if (x > 6 || x < 0 || y > 5 || y < 0) {
    return undefined;
  } else {
    return cells[y * 7 + x];
  }
}

export function allAvailableMoves(grid) {
  return [0, 1, 2, 3, 4, 5, 6]
    .filter((ix) => grid[ix].value === undefined)
    .map((ix) => lowestAvailableCellInColumn(ix, grid));
}

export function max(array) {
  return array.reduce((a, b) => (a < b ? b : a));
}

export function average(array) {
  let total = 0;
  array.forEach((i) => {
    total += i;
  });
  return total / array.length;
}

export function useAnimationFrame(callback) {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();

  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []); // Make sure the effect runs only once
}
