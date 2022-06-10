import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

//Ícone de status de máquina
export function CustomFooterStatusComponent(props: {
  status: 'connected' | 'disconnected';
}) {
  return (
    <Box sx={{ padding: '10px', display: 'flex' }}>
      <FiberManualRecordIcon
        fontSize="small"
        sx={{
          mr: 2,
          color: props.status === 'connected' ? '#4caf50' : '#d9182e',
        }}
      />
      Status {props.status}
    </Box>
  );
}

export function CustomFooters() {
  const [status, setStatus] = React.useState('connected');
  return (
    <Box sx={{ width: 1 }}>
      <Box sx={{ height: 350, width: 1, mb: 2 }}>
      </Box>
      <Button
        color="primary"
        variant="contained"
        onClick={() =>
          setStatus((current) =>
            current === 'connected' ? 'disconnected' : 'connected',
          )
        }
      >
        {status === 'connected' ? 'Disconnect' : 'Connect'}
      </Button>
    </Box>
  );
}
//Estilos aplicados a tabela de status de máquina
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    style={{
      backgroundColor: 'rgba(0, 0, 0, 0.7)',

    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 10,
    marginTop: theme.spacing(1),
    minWidth: 180,

    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,

        ),
      },
    },
  },
}));

//Tabela de status atual de funcionamento das máquinas
export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          backgroundColor: "#FFFFFF",
          color: "#1C1C1C",
          postion: 'absolute',
          height: "100%",
          padding: '0.3rem',
          top: '3px',
          hover: {backgroundColor: "#0060FF"},
          mb: 2
        }}
      >
        STATUS
      </Button>
      <StyledMenu
        id="demo-customized-menu"

        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        </TableRow>
        <TableRow>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>Máquina</TableCell>
                    <TableCell>Tempo</TableCell>
                  </TableRow>
                </TableHead>
                <TableRow>
                  <TableCell>Parada</TableCell>
                  <TableCell>PC02</TableCell>
                  <TableCell>10:05:25</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Funcionando</TableCell>
                  <TableCell>PC04</TableCell>
                  <TableCell> - </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>S/ Programação</TableCell>
                  <TableCell>PC08</TableCell>
                  <TableCell>10:05:25</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Parada</TableCell>
                  <TableCell>PC09</TableCell>
                  <TableCell>10:05:25</TableCell>
                </TableRow>
              </Table>
            </Box>
          </Collapse>
        </TableRow>
      </StyledMenu>
    </div>
  );
}
