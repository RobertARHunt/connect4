import { lowestAvailableCellInColumn } from '../helpers';

export function randomPickerAI(gridState) {
  while (true) {
    const columnToPick = Math.floor(Math.random() * 7);
    const cellToPick = lowestAvailableCellInColumn(columnToPick, gridState);
    if (cellToPick) return cellToPick;
  }
}
