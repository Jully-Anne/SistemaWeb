import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu, { MenuProps } from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Table, TableCell,TableHead, TableRow, Box, Collapse, Button} from '@mui/material';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import Brightness1Icon from '@mui/icons-material/Brightness1';

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

//Tabela de status atual de funcionamento das máquinas
export default function StatusTable() {
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
          postion: 'absolute',
          height: "100%",
          padding: '0.1rem',
          top: '2.5px',
          mb: 1,
          backgroundColor: "#FFFFFF",//Fundo branco com hover desativado
          color: "#1C1C1C",//Letra preta com hover desativado
          '&:hover': {
            backgroundColor: "#0060FF",//Fundo azul com hover ativado
            color: "#FFFFFF"//Letra branca com hover ativado
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

      <Container sx={{
        "display": 'grid',
        "grid-template-columns": "repeat(6, 2fr)",
        "postion": 'absolute',
        "height": "100%",
      }}>
        {<PlayCircleOutlineIcon sx={{ color: "#1AC640" }} />}
        <Typography> 6 </Typography>
        {<PauseCircleOutlineIcon sx={{ color: "#FF0000" }} />}
        <Typography> 5</Typography>
        {<ErrorOutlineIcon sx={{ color: "#808080" }} />}
        <Typography> 2 </Typography>

      </Container>
    </div>

  );
}