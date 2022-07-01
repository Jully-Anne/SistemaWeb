import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Selectors() {
  const [sector, setSector] = React.useState('');
  const [resource, setResource] = React.useState('');

  const handleChangeSector = (event: SelectChangeEvent) => {
    setSector(event.target.value);
  };
  const handleChangeResource = (event: SelectChangeEvent) => {
    setResource(event.target.value);
  }

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Setor</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={sector}
          label="Setor"
          onChange={handleChangeSector}
        >
      
          <MenuItem value={10}>BALANÇAS</MenuItem>
          <MenuItem value={20}>INSP FINAL</MenuItem>
          <MenuItem value={30}>PRP ANÉIS</MenuItem>
          <MenuItem value={30}>PRP GUIAS</MenuItem>
          <MenuItem value={30}>SGP</MenuItem>
          <MenuItem value={30}>USI GUIAS</MenuItem>
          <MenuItem value={30}>USI ANÉIS</MenuItem>
        </Select>
 
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Máquina</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={resource}
          label="Máquina"
          onChange={handleChangeResource}
        >
          
          <MenuItem value={10}>PC02</MenuItem>
          <MenuItem value={20}>PC04</MenuItem>
          <MenuItem value={20}>PC08</MenuItem>
          <MenuItem value={20}>PC09</MenuItem>
          <MenuItem value={20}>PC10</MenuItem>
          <MenuItem value={20}>PC11</MenuItem>
          <MenuItem value={20}>PC17</MenuItem>
          <MenuItem value={20}>PC18</MenuItem>
          <MenuItem value={20}>PC19</MenuItem>
          <MenuItem value={20}>PC20</MenuItem>
          <MenuItem value={30}>PC21</MenuItem>
        </Select>
     
      </FormControl>
   
    </div>
  );
}
