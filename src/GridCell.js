import styled, { css } from 'styled-components';

function GridCell({ cell }) {
  return <StyledCell value={cell.value}></StyledCell>;
}

const StyledCell = styled.div`
  font-size: 50px;
  text-align: center;
  border: 1px solid gray;
  cursor: pointer;

  ${(props) =>
    props.value == 0
      ? css`
          background-color: lightgray;
        `
      : props.value == 1
      ? css`
          background-color: green;
        `
      : props.value == 2 &&
        css`
          background-color: red;
        `}
`;

export default GridCell;
