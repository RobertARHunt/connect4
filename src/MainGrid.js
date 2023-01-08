import styled from 'styled-components';
import { useState } from 'react';
import GridCell from './GridCell';
import {
  getStartState,
  setCellValueInGrid,
  checkCompletion,
  lowestAvailableCellInColumn,
} from './helpers';

function MainGrid() {
  const [gridState, setGridState] = useState(getStartState());
  const [turnState, setTurnState] = useState(1);

  return (
    <StyledContainer>
      {gridState.map((cell, ix) => {
        return (
          <GridCell
            cell={cell}
            onClick={onClickHandler(cell)}
            key={ix}
          ></GridCell>
        );
      })}
    </StyledContainer>
  );
  function onClickHandler(cell) {
    return () => {
      if (cell.value === 0) {
        const cellToSet = lowestAvailableCellInColumn(cell.x, gridState);
        if (!cellToSet) return;
        const newGridState = setCellValueInGrid(
          cellToSet,
          turnState,
          gridState
        );
        setGridState(newGridState);
        cellToSet.value = turnState;
        if (checkCompletion(newGridState, cellToSet, turnState)) {
          if (turnState === 1) {
            alert('Player 1 wins!');
          } else {
            alert('Player 2 wins!');
          }
        }
        setTurnState(3 - turnState);
      }
    };
  }
}

const StyledContainer = styled.div`
  border: 1px solid rgb(199, 45, 45);
  background-color: white;
  height: 501px;
  width: 501px;
  display: grid;
  grid-template-columns: repeat(7, 14.2857142857%);
  grid-template-rows: repeat(6, 16.6666666667%);
  // position: fixed;
`;

export default MainGrid;
