import styled, { css } from 'styled-components';
import { useState } from 'react';
import GridCell from './GridCell';
import {
  getStartState,
  setCellValueInGrid,
  checkCompletion,
  lowestAvailableCellInColumn,
  resetAll,
} from './helpers';

function MainGrid({
  turnState,
  scoreState,
  setTurnState,
  setScoreState,
  winHandler,
}) {
  const [gridState, setGridState] = useState(getStartState());

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
        if (checkCompletion(newGridState, cellToSet, turnState)) {
          if (turnState === 1) {
            alert('Player 1 wins!');
            setScoreState({ ...scoreState, green: scoreState.green + 1 });
            resetAll(setGridState, setTurnState);
          } else {
            alert('Player 2 wins!');
            setScoreState({ ...scoreState, red: scoreState.red + 1 });
            resetAll(setGridState, setTurnState);
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

export default MainGrid;
