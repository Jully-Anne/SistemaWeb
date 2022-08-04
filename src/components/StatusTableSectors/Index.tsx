//Tabela com os status das máquinas em tempo real na tela de dashboard
import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import Menu, { MenuProps } from '@mui/material/Menu'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Table, TableCell, TableHead, TableRow, Box, Collapse, Button, Grid } from '@mui/material'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { Typography } from '@mui/material'
import Brightness1Icon from '@mui/icons-material/Brightness1'

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
    borderRadius: "5%",
    border: "solid",
    borderColor: "#DCDCDC",
    marginTop: theme.spacing(0.5),
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

//Status Table Sectors - Tabela de status em tempo real de funcionamento das m1áquinas no setor selecionado
export default function StatusTableSectors() {
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
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          postion: 'absolute',
          height: "100%",
          width: "6rem",
          padding: '0.1rem',
          top: '0.1rem',
          mb: '0.5rem',
          backgroundColor: "#FFFFFF",
          color: "#1C1C1C",
          '&:hover': {
            backgroundColor: "#1976D2",
            color: "#FFFFFF"
          },
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

        <TableRow>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell> Status </TableCell>
                    <TableCell>Máquina</TableCell>
                    <TableCell>Tempo</TableCell>
                  </TableRow>
                </TableHead>
                <TableRow>
                  <TableCell><Brightness1Icon sx={{ color: "#1C1C1C" }} /></TableCell>
                  <TableCell>PC02</TableCell>
                  <TableCell>10:05:25</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Brightness1Icon sx={{ color: "#1AC640" }} /></TableCell>
                  <TableCell>PC04</TableCell>
                  <TableCell> - </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Brightness1Icon sx={{ color: "#FF0000" }} /></TableCell>
                  <TableCell>PC08</TableCell>
                  <TableCell>10:05:25</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell><Brightness1Icon sx={{ color: "#808080" }} /></TableCell>
                  <TableCell>PC09</TableCell>
                  <TableCell>10:05:25</TableCell>
                </TableRow>
              </Table>
            </Box>
          </Collapse>
        </TableRow>
      </StyledMenu>

      <Grid sx={{
        "display": 'grid',
        "grid-template-columns": "repeat(6, 1.8rem)",
        "postion": 'absolute',
        "flex-direction": "row",
        "justify-items": "center"
      }}>

        {<PlayCircleOutlineIcon sx={{ color: "#1AC640" }} />}
        <Typography> 6 </Typography>
        {<PauseCircleOutlineIcon sx={{ color: "#FF0000" }} />}
        <Typography> 5</Typography>
        {<ErrorOutlineIcon sx={{ color: "#808080" }} />}
        <Typography> 2 </Typography>
      </Grid>
    </div>

  );
}
