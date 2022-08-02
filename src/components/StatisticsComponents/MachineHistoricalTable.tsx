//Tabela de histórico de produção de máquina
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Brightness1Icon from '@mui/icons-material/Brightness1';

interface Column {
  id: 'date' | 'time' | 'partsPerMinute' | 'totalProduction' | 'status';
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
    id: 'partsPerMinute',
    label: 'Peças por Minuto',
    maxWidth: '5rem',
    align: 'center',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'totalProduction',
    label: 'Produção Total',
    maxWidth: '5rem',
    align: 'center',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'status',
    label: 'Status',
    maxWidth: '5rem',
    align: 'center',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  date: string;
  time: string;
  partsPerMinute: number;
  totalProduction: number;
  status: any;
}

function createData(
  date: string,
  time: string,
  partsPerMinute: number,
  totalProduction: number,
  status: any,
): Data {
  return { date, time, partsPerMinute, totalProduction, status };
}

const rows = [
  createData('06-07-2022', '08:00', 54, 7263, <Brightness1Icon sx={{ color: "#1AC640" }}/>),
  createData('06-07-2022', '09:00', 50, 7313, <Brightness1Icon sx={{ color: "#1AC640" }}/>),
  createData('06-07-2022', '10:00', 0, 7313, <Brightness1Icon sx={{ color: "#FF0000" }}/>),
  createData('06-07-2022', '11:00', 0, 7313, <Brightness1Icon sx={{ color: "#FF0000" }}/>),
  createData('06-07-2022', '12:00', 0, 0, <Brightness1Icon sx={{ color: "#1C1C1C" }}/>),
  createData('06-07-2022', '13:00', 0, 7313, <Brightness1Icon sx={{ color: "#808080" }}/>),
  createData('06-07-2022', '14:00', 0, 7313, <Brightness1Icon sx={{ color: "#FF0000" }}/>),
  createData('06-07-2022', '15:00', 50, 7363, <Brightness1Icon sx={{ color: "#1AC640" }}/>),
  createData('06-07-2022', '16:00', 54, 7417, <Brightness1Icon sx={{ color: "#1AC640" }}/>),
  createData('06-07-2022', '17:00', 0, 7417, <Brightness1Icon sx={{ color: "#FF0000" }}/>),
  createData('06-07-2022', '18:00', 0, 0, <Brightness1Icon sx={{ color: "#1C1C1C" }}/>),
  createData('06-07-2022', '19:00', 0, 0, <Brightness1Icon sx={{ color: "#1C1C1C" }}/>),
  createData('06-07-2022', '20:00', 0, 0, <Brightness1Icon sx={{ color: "#808080" }}/>),
  createData('06-07-2022', '21:00', 0, 0, <Brightness1Icon sx={{ color: "#808080" }}/>),
  createData('06-07-2022', '22:00', 0, 0, <Brightness1Icon sx={{ color: "#808080" }}/>),
 
];

export default function MachineHistoricalTable() {
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
    <Paper sx={{minWidth: "15rem", maxWidth: '50rem', borderRadius: '1rem', mx: '0.5rem'}}>
      <TableContainer sx={{ maxHeight: '25rem', backgroundColor: '#F8F9FA'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={5}  sx={{color: '#1976d2', fontSize: '1.2rem'}} >
                Históricos 
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
