import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from '@mui/material';

function PlayerController({ playerType, setPlayerType, colour }) {
  const handleChange = (event) => {
    setPlayerType(event.target.value);
  };

  return (
    <StyledContainer>
      <FormControl sx={{ m: 1, minWidth: 130 }}>
        <InputLabel id="player-type-controller">
          {colour} Player Type
        </InputLabel>
        <Select
          labelId="player-type-controller"
          value={playerType}
          label={`${colour} Player Type`}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value={'Player'}>Player</MenuItem>
          <MenuItem value={'AI Random'}>AI Random</MenuItem>
          <MenuItem value={'AI Tree Search: 0'}>AI Tree Search: 0</MenuItem>
          <MenuItem value={'AI Tree Search: 1'}>AI Tree Search: 1</MenuItem>
        </Select>
      </FormControl>
    </StyledContainer>
  );
}

export default PlayerController;

const StyledContainer = styled.div`
  text-align: center;
  z-index: 1;
  width: 33.33333%
  background-color: green;
  color: lightblue;
  font-size: 5vw;
  text-align: center;
  object-align: center;
`;
