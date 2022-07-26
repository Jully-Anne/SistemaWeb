//Sector Selector - Componente com 1 seletor para a escolha e seleção de setor para a busca de informações 
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SectorSelector() {
  const [sector, setSector] = React.useState('');

  const handleChangeSector = (event: SelectChangeEvent) => {
    setSector(event.target.value);
  };
 
  return (
    <div>
      <FormControl sx={{ m: '0.5rem', mt: '0rem', minWidth: '8rem' }}>
        <InputLabel id="demo-simple-select-helper-label">Setor</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={sector}
          label="Setor"
          onChange={handleChangeSector}
          sx={{height: '3rem'}}
        >
          <MenuItem value={10}>BALANÇAS</MenuItem>
          <MenuItem value={20}>INSP FINAL</MenuItem>
          <MenuItem value={30}>PRP ANÉIS</MenuItem>
          <MenuItem value={40}>PRP GUIAS</MenuItem>
          <MenuItem value={50}>SGP</MenuItem>
          <MenuItem value={60}>USI GUIAS</MenuItem>
          <MenuItem value={70}>USI ANÉIS</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
