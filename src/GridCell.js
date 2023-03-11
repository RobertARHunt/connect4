import styled, { css } from 'styled-components';

function GridCell({ cell, onClick, currentPlayerIndex }) {
  return (
    <StyledCell
      value={cell.value}
      onClick={onClick}
      currentPlayerIndex={currentPlayerIndex}
    ></StyledCell>
  );
}

const StyledCell = styled.div`
  // border: 1px solid gray;
  cursor: pointer;

  ${(props) =>
    props.value === undefined
      ? props.currentPlayerIndex === 0
        ? css`
            background-color: lightgray;
            border: 1px solid green;
          `
        : props.currentPlayerIndex === 1 &&
          css`
            background-color: lightgray;
            border: 1px solid red;
          `
      : props.value === 0
      ? css`
          background-color: green;
        `
      : props.value === 1 &&
        css`
          background-color: red;
        `}
`;

export default GridCell;
