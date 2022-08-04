//Tabela dos últimos alarmes gerados pelo forno selecionado
import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

interface Column {
  id: 'date' | 'time' | 'alarms';
  label: string;
  minWidth?: string;
  maxWidth?: string;
  align?: 'center';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'date', label: 'Data', maxWidth: '8rem' },
  { id: 'time', label: 'Hora', maxWidth: '6rem' },
  {
    id: 'alarms',
    label: 'Alarmes',
    maxWidth: '5rem',
    align: 'center',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },

];

interface Data {
  date: string;
  time: string;
  alarms: string;
}

function createData(
  date: string,
  time: string,
  alarms: string,

): Data {
  return { date, time, alarms };
}

const rows = [
  createData('06-07-2022', '08:00', 'Falha de Comunicação Pré-Zona 1'),
  createData('06-07-2022', '09:00', 'Comunicação Reestabelecida Pré-Zona 1'),
  createData('06-07-2022', '10:00', 'Temperatura Baixa Zona 4'),
  createData('06-07-2022', '11:00', 'Temperatura Alta Zona 3'),
  createData('06-07-2022', '12:00', 'Temperatura Normalizada Zona 3'),
  createData('06-07-2022', '13:00', 'Falha de Comunicação Incinerador'),
  createData('06-07-2022', '14:00', 'Temperatura Normalizada Zona 4'),
  createData('06-07-2022', '15:00', 'Comunicação Reestabelecida Incinerador'),
  createData('06-07-2022', '16:00', 'Temperatura Alta Zona 1'),

];

export default function FurnaceRealTimeAlarmsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ maxWidth: '50rem', borderRadius: '1rem', mx: '0rem' }}>
      <TableContainer sx={{ maxHeight: '25rem', backgroundColor: '#F8F9FA' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={5} sx={{ color: '#1976d2', fontSize: '1.2rem' }} >
                Alarmes
              </TableCell>

            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.maxWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.date}>
                    {columns.map((Data) => {
                      const value = row[Data.id];
                      return (
                        <TableCell key={Data.id} align={Data.align}>
                          {Data.format && typeof value === 'number'
                            ? Data.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}