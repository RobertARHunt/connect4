import styled, { css } from 'styled-components';
import { useState } from 'react';
import GridCell from './GridCell';
import {
  setCellValueInGrid,
  checkCompletion,
  lowestAvailableCellInColumn,
} from './helpers';
import { useEffect } from 'react';

function MainGame({ winHandler, gridState, setGridState, players }) {
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const currentPlayer = players[currentPlayerIndex];

  function getOnClickHandler(cell) {
    if (currentPlayer.playerType !== 'Player') return () => {};

    return () => {
      const cellToSet = lowestAvailableCellInColumn(cell.x, gridState);
      if (!cellToSet) return;
      processMove(cellToSet);
    };
  }

  function processMove(nextCell) {
    const newGridState = setCellValueInGrid(
      nextCell,
      currentPlayerIndex,
      gridState
    );
    setGridState(newGridState);
    nextCell.value = currentPlayerIndex;
    setCurrentPlayerIndex(1 - currentPlayerIndex);
    const winner = checkCompletion(gridState, nextCell, currentPlayerIndex);
    if (winner !== undefined) {
      winHandler(winner);
    } else {
      const cellsWithValue = gridState.filter((c) => c.value !== 0);
      if (cellsWithValue.length === gridState.length) {
        winHandler(0);
      }
    }
  }

  useEffect(() => {
    if (currentPlayer.playerFunction) {
      const timeout = setTimeout(() => {
        const nextCell = currentPlayer.playerFunction(
          gridState,
          currentPlayerIndex
        );
        if (nextCell) processMove(nextCell);
      }, 200);

      return () => {
        clearTimeout(timeout);
      };
    }
  });

  return (
    <StyledContainer currentPlayerIndex={currentPlayerIndex}>
      {gridState.map((cell, ix) => {
        return (
          <GridCell
            cell={cell}
            onClick={getOnClickHandler(cell)}
            key={ix}
            currentPlayerIndex={currentPlayerIndex}
          ></GridCell>
        );
      })}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  background-color: white;
  height: min(90vw, 90vh);
  width: min(90vw, 90vh);
  display: grid;
  grid-template-columns: repeat(7, 14.2857142857%);
  grid-template-rows: repeat(6, 16.6666666667%);
  margin: min(3vw, 3vh);
  z-index: 10;
  ${(props) =>
    props.currentPlayerIndex === 0
      ? css`
          border: min(1vw, 1vh) solid green;
        `
      : props.currentPlayerIndex === 1 &&
        css`
          border: min(1vw, 1vh) solid red;
        `}
`;

export default MainGame;
