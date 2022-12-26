function getEmptyCell(props) {
  return {
    ...props,
    value: 0,
  };
}

export function getStartState() {
  const cells = [];
  for (let row = 0; row < 6; row++) {
    for (let column = 0; column < 7; column++) {
      const newCell = getEmptyCell({
        row,
        column,
      });
      // console.log(newCell);
      cells.push(newCell);
    }
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
