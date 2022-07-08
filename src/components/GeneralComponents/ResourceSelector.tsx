//Selectors - Componente com 1 seletor para a escolha e seleção de setor para a busca de informações 
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function ResourceSelector() {
  const [resource, setResource] = React.useState('');

  const handleChangeResource = (event: SelectChangeEvent) => {
    setResource(event.target.value);
  };
 
  return (
    <div>
      <FormControl sx={{ m: '0.5rem', minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Máquina</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={resource}
          label= 'Máquina'
          onChange={handleChangeResource}
          sx={{height: '3rem'}}
        >
          <MenuItem value={10}>PC02</MenuItem>
          <MenuItem value={20}>PC04</MenuItem>
          <MenuItem value={30}>PC08</MenuItem>
          <MenuItem value={40}>PC09</MenuItem>
          <MenuItem value={50}>PC10</MenuItem>
          <MenuItem value={60}>PC11</MenuItem>
          <MenuItem value={70}>PC18</MenuItem>
          <MenuItem value={70}>PC19</MenuItem>
          <MenuItem value={70}>PC20</MenuItem>
          <MenuItem value={70}>PC21</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
