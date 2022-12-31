function getEmptyCell(props) {
  return {
    ...props,
    value: 0,
  };
}

export function getStartState() {
  const cells = [];
  for (let index = 0; index < 42; index++) {
    const row = Math.floor(index / 7);
    const column = index % 7;
    const newCell = getEmptyCell({
      row,
      column,
      index,
    });
    // console.log(newCell);
    cells.push(newCell);
  }
  // console.log(cells);
  return cells;
}

export function setCellValueInGrid(cellToChange, newValue, cells) {
  cellToChange = lowestAvailableCellInColumn(cellToChange.column, cells);
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

function lowestAvailableCellInColumn(column, cells) {
  var counter = 35;
  while (counter >= 0) {
    if (cells[counter + column].value === 0) return cells[counter + column];
    counter -= 7;
  }
}

export function checkCompletion(cells) {
  const playerCells = cells.filter((c) => c.value === 1);
  const opponentCells = cells.filter((c) => c.value === 2);
  var directions = [
    { dir: 'UPLEFT', index: -8 },
    { dir: 'UP', index: -7 },
    { dir: 'UPRIGHT', index: -6 },
    { dir: 'LEFT', index: -1 },
    { dir: 'RIGHT', index: +1 },
    { dir: 'DOWNLEFT', index: +6 },
    { dir: 'DOWN', index: +7 },
    { dir: 'DOWNRIGHT', index: +8 },
  ];

  directions.forEach((direction) => {
    playerCells.forEach((cell) => {
      var cellIndexToCheck = cell.index + direction.index;
      if (
        cells[cellIndexToCheck] !== undefined &&
        cells[cellIndexToCheck].value === 1
      ) {
        cellIndexToCheck += direction.index;
        if (
          cells[cellIndexToCheck] !== undefined &&
          cells[cellIndexToCheck].value === 1
        ) {
          console.log({ direction, cell, check: cellIndexToCheck });
          cellIndexToCheck += direction.index;
          if (
            cells[cellIndexToCheck] !== undefined &&
            cells[cellIndexToCheck].value === 1
          ) {
            return 1;
          }
        }
      }
    });
    opponentCells.forEach((cell) => {
      var cellIndexToCheck = cell.index + direction.index;
      if (
        cells[cellIndexToCheck] !== undefined &&
        cells[cellIndexToCheck].value === 2
      ) {
        cellIndexToCheck += direction.index;
        if (
          cells[cellIndexToCheck] !== undefined &&
          cells[cellIndexToCheck].value === 2
        ) {
          cellIndexToCheck += direction.index;
          if (
            cells[cellIndexToCheck] !== undefined &&
            cells[cellIndexToCheck].value === 2
          ) {
            return 2;
          }
        }
      }
    });
  });
}
