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
      // debugger;
      if (cell.value === undefined) {
        const cellToSet = lowestAvailableCellInColumn(cell.x, gridState);
        if (!cellToSet) return;
        processMove(cellToSet);
      }
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
        const nextCell = currentPlayer.playerFunction(gridState);
        if (nextCell) processMove(nextCell);
      }, 200);

      return () => {
        clearTimeout(timeout);
      };
    }
  });

  return (
    <StyledContainer currentPlayer={currentPlayerIndex}>
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
    props.currentPlayer === 0
      ? css`
          border: 3px solid green;
        `
      : props.currentPlayer === 1 &&
        css`
          border: 3px solid red;
        `}
`;

export default MainGame;
