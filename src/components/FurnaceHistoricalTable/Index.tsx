//Tabela de histórico de temperaturas por zona do forno selecionado
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
  id: 'date' | 'time' |'incinerator' | 'conveyor' | 'preZone1' | 'preZone2' | 'zone1' | 'zone2' | 'zone3' | 'zone4' | 'zone5';
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
    id: 'incinerator',
    label: 'Incinerador',
    maxWidth: '5rem',
    align: 'center',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'conveyor',
    label: 'Esteira',
    maxWidth: '5rem',
    align: 'center',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'preZone1',
    label: 'Pré-Zona 1',
    maxWidth: '5rem',
    align: 'center',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'preZone2',
    label: 'Pré-Zona 2',
    maxWidth: '5rem',
    align: 'center',
    format: (value: number) => value.toLocaleString('pt-BR'),
  },
  {
    id: 'zone1',
    label: 'Zona 1',
    maxWidth: '5rem',
    align: 'center',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'zone2',
    label: 'Zona 2',
    maxWidth: '5rem',
    align: 'center',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'zone3',
    label: 'Zona 3',
    maxWidth: '5rem',
    align: 'center',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'zone4',
    label: 'Zona 4',
    maxWidth: '5rem',
    align: 'center',
    format: (value: number) => value.toFixed(2),
  },
  {
    id: 'zone5',
    label: 'Zona 5',
    maxWidth: '5rem',
    align: 'center',
    format: (value: number) => value.toFixed(2),
  }
];

interface Data {
  date: string;
  time: string;
  incinerator: number;
  conveyor: number;
  preZone1: number;
  preZone2: number;
  zone1: number;
  zone2: number;
  zone3: number;
  zone4: number;
  zone5: number;
}

function createData(
  date: string,
  time: string,
  incinerator: number,
  conveyor: number,
  preZone1: number,
  preZone2: number,
  zone1: number,
  zone2: number,
  zone3: number,
  zone4: number,
  zone5: number,
): Data {
  return { date, time, incinerator, conveyor, preZone1, preZone2, zone1, zone2, zone3, zone4, zone5};
}

const rows = [
  createData('06-07-2022', '08:00', 116, 588, 670, 800, 1054, 1110, 1117, 1111, 1110),
  createData('06-07-2022', '09:00', 116, 588, 670, 800, 1054, 1110, 1117, 1111, 1110),
  createData('06-07-2022', '10:00', 116, 588, 670, 800, 1054, 1110, 1117, 1111, 1110),
  createData('06-07-2022', '11:00', 116, 588, 670, 800, 1054, 1110, 1117, 1111, 1110),
  createData('06-07-2022', '12:00', 116, 588, 670, 800, 1054, 1110, 1117, 1111, 1110),
  createData('06-07-2022', '13:00', 116, 588, 670, 800, 1054, 1110, 1117, 1111, 1110),
  createData('06-07-2022', '14:00', 116, 588, 670, 800, 1054, 1110, 1117, 1111, 1110),
  createData('06-07-2022', '15:00', 116, 588, 670, 800, 1054, 1110, 1117, 1111, 1110),
  createData('06-07-2022', '16:00', 116, 588, 670, 800, 1054, 1110, 1117, 1111, 1110),
  createData('06-07-2022', '17:00', 116, 588, 670, 800, 1054, 1110, 1117, 1111, 1110),
  createData('06-07-2022', '18:00', 116, 588, 670, 800, 1054, 1110, 1117, 1111, 1110),
  createData('06-07-2022', '19:00', 116, 588, 670, 800, 1054, 1110, 1117, 1111, 1110),
  createData('06-07-2022', '20:00', 116, 588, 670, 800, 1054, 1110, 1117, 1111, 1110),
  createData('06-07-2022', '21:00', 116, 588, 670, 800, 1054, 1110, 1117, 1111, 1110),
  createData('06-07-2022', '22:00', 116, 588, 670, 800, 1054, 1110, 1117, 1111, 1110),
  createData('06-07-2022', '23:00', 116, 588, 670, 800, 1054, 1110, 1117, 1111, 1110),
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
    <Paper sx={{ minWidth: "15rem", maxWidth: '75rem', borderRadius: '1rem', mx: '0.5rem' }}>
      <TableContainer sx={{ maxHeight: '25rem', backgroundColor: '#F8F9FA' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={11} sx={{ color: '#1976d2', fontSize: '1.2rem' }} >
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