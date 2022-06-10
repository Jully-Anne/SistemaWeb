//Botões para realizar consulta, impressão e exportação para excelda tela de consultas
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons() {
    return (

      <Stack direction="row" spacing={2}>
        <Button variant="contained">CONSULTAR</Button>
        <Button variant="contained">IMPRIMIR</Button>
        <Button variant="contained">EXCEL</Button>
      </Stack>
    );
  }