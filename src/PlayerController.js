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
          <MenuItem value={'AI lvl 1'}>AI lvl 1</MenuItem>
          <MenuItem value={'AI lvl 2'}>AI lvl 2</MenuItem>
          <MenuItem value={'AI lvl 3'}>AI lvl 3</MenuItem>
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
