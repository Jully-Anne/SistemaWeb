import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function FormRealTimeQuery() {

  const [sector, setSector] = React.useState('');
  const [resource, setResource] = React.useState('');

  const handleChangeSector = (event: SelectChangeEvent) => {
    setSector(event.target.value);
  }
  const handleChangeResource = (event: SelectChangeEvent) => {
    setResource(event.target.value);
  }
  return (
    <div>
     <Box sx={{ maxWidth: 600, width: '100%', position: 'relative', top:'0.8rem', left:'0.02rem' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item minWidth={200} xs={1}>
            <FormControl variant="standard" sx={{ maxWidth: 150, width: '100%'}}>
              <InputLabel id="demo-simple-select-standard-label1">Setor</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label1"
                id="demo-simple-select-standard"
                value={sector}
                onChange={handleChangeSector}
                label="Setor"
                sx={{ width: '100%'}}
              >
                <MenuItem value={1} >PRP ANÉIS</MenuItem>
                <MenuItem value={2}>PRP GUIAS</MenuItem>
                <MenuItem value={3}>SGP</MenuItem>
                <MenuItem value={3}>USI ANÉIS</MenuItem>
                <MenuItem value={3}>USI GUIAS</MenuItem>
                <MenuItem value={3}>SINTER</MenuItem>
                <MenuItem value={3}>PRP GUIAS</MenuItem>
                <MenuItem value={3}>INSP FINAL</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item minWidth={200} xs={1}>
         

          </Grid>
          <Grid item minWidth={150} xs={1}>
            <Stack direction="row" spacing={2} >
            <Button variant="contained" sx={{ maxWidth: 1000, width: '100%', position: 'relative', top:'0.8rem', left:'0.02rem' }}>Consultar</Button>
            </Stack>
          </Grid>
        </Grid>
      </Box >
    </div >
  );
};
