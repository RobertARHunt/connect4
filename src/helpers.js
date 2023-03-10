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
    // console.log(newCell);
    cells.push(newCell);
  }
  // console.log(cells);
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
  var counter = 35;
  while (counter >= 0) {
    if (grid[counter + column].value === undefined)
      return grid[counter + column];
    counter -= 7;
  }
}

export function checkCompletion(cells, cell, currentPlayer) {
  var directions = [
    { dir: 'DIAGONAL_LEFT', xChange: -1, yChange: 1 },
    { dir: 'VERTICAL', xChange: 0, yChange: 1 },
    { dir: 'DIAGONAL_RIGHT', xChange: 1, yChange: 1 },
    { dir: 'HORIZONTAL', xChange: 1, yChange: 0 },
  ];

  for (let direction of directions) {
    var dir = 1;
    var checkedCell = cell;
    var counter = 1;
    while (checkedCell.value === currentPlayer && counter < 4) {
      var nextX = checkedCell.x + direction.xChange * dir;
      var nextY = checkedCell.y + direction.yChange * dir;
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
  var highest = 0;
  array.forEach((i) => {
    if (i >= highest) {
      highest = i;
    }
  });
  return highest;
}
