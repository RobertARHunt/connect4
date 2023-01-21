import styled, { css } from 'styled-components';
import { useState } from 'react';
import GridCell from './GridCell';
import {
  setCellValueInGrid,
  checkCompletion,
  lowestAvailableCellInColumn,
} from './helpers';

function MainGame({ winHandler, gridState, setGridState }) {
  const [turnState, setTurnState] = useState(1);
  return (
    <StyledContainer turnState={turnState}>
      {gridState.map((cell, ix) => {
        return (
          <GridCell
            cell={cell}
            onClick={getOnClickHandler(cell)}
            key={ix}
          ></GridCell>
        );
      })}
    </StyledContainer>
  );
  function getOnClickHandler(cell) {
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
        setTurnState(3 - turnState);
        const winner = checkCompletion(gridState, cellToSet, turnState);
        if (winner) {
          winHandler(winner);
        } else {
          const cellsWithValue = gridState.filter((c) => c.value !== 0);
          if (cellsWithValue.length === gridState.length) {
            winHandler(0);
          }
        }
      }
    };
  }
}

const StyledContainer = styled.div`
  background-color: white;
  height: 501px;
  width: 501px;
  display: grid;
  grid-template-columns: repeat(7, 14.2857142857%);
  grid-template-rows: repeat(6, 16.6666666667%);
  margin: 20px;
  // position: absolute;
  z-index: 10;
  ${(props) =>
    props.turnState === 1
      ? css`
          border: 3px solid green;
        `
      : props.turnState === 2 &&
        css`
          border: 3px solid red;
        `}
`;

export default MainGame;
