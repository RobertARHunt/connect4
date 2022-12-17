import styled from 'styled-components';
import { useState } from 'react';
import GridCell from './GridCell';
import { getStartState } from './helpers';

function MainGrid() {
  const [gridState, setGridState] = useState(getStartState());

  return (
    <StyledContainer>
      {gridState.map((cell, ix) => {
        return <GridCell cell={cell} key={ix}></GridCell>;
      })}
    </StyledContainer>
  );
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
