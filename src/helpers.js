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
      cells.push(newCell);
    }
  }

  return cells;
}
