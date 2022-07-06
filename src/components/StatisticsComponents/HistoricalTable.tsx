import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column {
  id: 'date' | 'time' | 'partsPerMinute' | 'totalProduction' | 'status';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: 'date', label: 'Data', minWidth: 170 },
  { id: 'time', label: 'Hora', minWidth: 100 },
  {
    id: 'partsPerMinute',
    label: 'Peças por Minuto',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'totalProduction',
    label: 'Produção Total',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'status',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  date: string;
  time: string;
  partsPerMinute: number;
  totalProduction: number;
  status: string;
}

function createData(
  date: string,
  time: string,
  partsPerMinute: number,
  totalProduction: number,
  status: string,
): Data {

  return { date, time, partsPerMinute, totalProduction, status };
}

const rows = [
  createData('06-07-2022', '08:00:00', 54, 7263, 'Produzindo'),
  createData('06-07-2022', '09:00:00', 50, 7313, 'Produzindo'),
  createData('06-07-2022', '10:00:00', 0, 7313, 'Parada'),
  createData('06-07-2022', '11:00:00', 0, 7313, 'Parada'),
  createData('06-07-2022', '12:00:00', 0, 0, 'Sem Dados'),
  createData('06-07-2022', '13:00:00', 0, 7313, 'Sem Programação'),
  createData('06-07-2022', '14:00:00', 0, 7313, 'Parada'),
  createData('06-07-2022', '15:00:00', 50, 7363, 'Produzindo'),
  createData('06-07-2022', '16:00:00', 54, 7417, 'Produzindo'),
  createData('06-07-2022', '17:00:00', 0, 7417, 'Parada'),
  createData('06-07-2022', '18:00:00', 0, 0, 'Sem Dados'),
  createData('06-07-2022', '19:00:00', 0, 0, 'Sem Dados'),
  createData('06-07-2022', '20:00:00', 0, 0, 'Sem Programação'),
  createData('06-07-2022', '21:00:00', 0, 0, 'Sem Programação'),
  createData('06-07-2022', '22:00:00', 0, 0, 'Sem Programação'),
 
];

export default function ColumnGroupingTable() {
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
    <Paper sx={{ maxWidth: '50rem', borderRadius: '1rem', mx: '0.5rem'}}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={5}  sx={{color: '#1976d2', fontSize: '1.2rem'}} >
                Tabela Históricos 
              </TableCell>
              
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
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
