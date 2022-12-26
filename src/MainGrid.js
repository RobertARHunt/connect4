import styled from 'styled-components';
import { useState } from 'react';
import GridCell from './GridCell';
import { getStartState, setCellValueInGrid } from './helpers';

function MainGrid() {
  const [gridState, setGridState] = useState(getStartState());
  const [turnState, setTurnState] = useState(1);

  return (
    <StyledContainer>
      {gridState.map((cell, ix) => {
        return (
          <GridCell
            cell={cell}
            key={ix}
            onClick={onClickHandler(cell, ix)}
          ></GridCell>
        );
      })}
    </StyledContainer>
  );
  function onClickHandler(cell, ix) {
    return () => {
      if (cell.value === 0) {
        setGridState(setCellValueInGrid(cell, turnState, gridState));
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
