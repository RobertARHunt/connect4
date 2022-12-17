import styled from 'styled-components';

function GridCell({ cell: { value } }) {
  return <StyledCell>{value}</StyledCell>;
}

const StyledCell = styled.div`
  font-size: 50px;
  text-align: center;
  border: 1px solid gray;
  cursor: pointer;
`;

export default GridCell;
