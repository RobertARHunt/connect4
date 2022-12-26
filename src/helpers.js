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
  const cellsWithNewValue = cells.map((currentCell) => {
    if (cellToChange === currentCell) {
      return setCellValue(currentCell, newValue);
    } else {
      return currentCell;
    }
  });
  return cellsWithNewValue;
}

function setCellValue(cell, newValue) {
  console.log('Cell Was Clicked!', { cell, newValue });
  return { ...cell, value: newValue };
}
