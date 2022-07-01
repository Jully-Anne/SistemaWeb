import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';

export default function SelectorData() {
  const [dataInicial, setDataInicial] = React.useState<Date | null>(new Date());
  const [dataFinal, setDataFinal] = React.useState<Date | null>(new Date());

  return (
    <div >

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={2}
          direction='row'
          sx={{
            display: 'flex',
            margin: '5%', 
            width: '36rem'
          

          }}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Data Inicial"
            value={dataInicial}
            inputFormat="dd/MM/yyyy hh:mm a"
            onChange={(newValue) => {setDataInicial(newValue)}}
    
          />
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="Data Final"
            value={dataFinal}
            inputFormat="dd/MM/yyyy hh:mm a"
            onChange={(newValue) => setDataFinal(newValue)}
      
          />
        </Stack>
      </LocalizationProvider>

    </div>
  );
}
