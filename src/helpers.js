function getEmptyCell(props) {
  return {
    ...props,
    value: 0,
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

export function lowestAvailableCellInColumn(column, cells) {
  var counter = 35;
  while (counter >= 0) {
    if (cells[counter + column].value === 0) return cells[counter + column];
    counter -= 7;
  }
}

export function checkCompletion(cells, cell, colour) {
  var directions = [
    { dir: 'DIAGONAL_TOP_LEFT', xChange: -1, yChange: 1 },
    { dir: 'VERTICAL', xChange: 0, yChange: 1 },
    { dir: 'DIAGONAL_TOP_RIGHT', xChange: 1, yChange: 1 },
    { dir: 'HORIZONTAL', xChange: 1, yChange: 0 },
  ];

  for (let direction of directions) {
    var dir = 1;
    var checkedCell = cell;
    var counter = 1;
    while (checkedCell.value === colour) {
      var nextX = checkedCell.x + direction.xChange * dir;
      var nextY = checkedCell.y + direction.yChange * dir;
      if (getCellFromCoords(cells, nextX, nextY)?.value === colour) {
        counter++;
        checkedCell = getCellFromCoords(cells, nextX, nextY);
      } else {
        if (dir === 1) {
          dir = -1;
          checkedCell = cell;
        } else {
          checkedCell = { value: 0 };
        }
      }
    }
    if (counter >= 4) return true;
  }
}

function getCellFromCoords(cells, x, y) {
  if (x > 6 || x < 0 || y > 5 || y < 0) {
    return undefined;
  } else {
    return cells[y * 7 + x];
  }
}

export function resetAll(setGridState, setTurnState) {
  setGridState(getStartState());
  setTurnState(1);
}

export function winHandler(winner) {}
