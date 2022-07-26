//Furnace Historical Alarms - Tela para consulta de históricos de alarmes do forno selecionado na data selecionada
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Title from '../../GeneralComponents/Title';
import { Box, Container } from '@mui/system';
import { Divider, Grid, Typography } from '@mui/material';
import InitialDateSelector from '../../GeneralComponents/InitialDateSelector'
import FinalDateSelector from '../../GeneralComponents/FinalDateSelector'
import QueryButton from '../../GeneralComponents/QueryButton'
import FurnaceSelector from '../../GeneralComponents/FurnaceSelector'
import FurnaceHistoricalAlarmsTable from '../../StatisticsComponents/FurnaceHistoricalAlarmsTable';
import PrintButton from '../../GeneralComponents/PrintButton';
import ExportExcelButton from '../../GeneralComponents/ExportExcelButton';

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function ResourceHistoricalAnalysis() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <Box>
                    <Title>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Fornos - Consulta Histórico Alarmes
                        </Typography>
                        <Divider sx={{ position: 'relative', top: '0.5rem', left: '0.02rem'}} />
                    </Title>

                    <Container maxWidth="lg" sx={{ mt: '1.5rem' }}>
                        <Grid container spacing={3} >
                            {/* Options */}
                            <Grid item xs={6} md={8} lg={20} >
                                <Grid
                                    sx={{

                                        p: 1,
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        position: 'relative',
                                        flexDirection: 'row',
                                        minHeight: '2rem',
                                        maxHeight: '22rem',
                                        minWidth: '17rem',
                                        maxWidth: "65rem",
                                        alignItems: 'center'
                                    }}
                                >
                                    <FurnaceSelector />
                                    <InitialDateSelector />
                                    <FinalDateSelector />

                                </Grid>

                                {/* Options */}
                                <Grid container spacing={1} >
                                    <Grid item xs={6} md={8} lg={20} >
                                        <Grid
                                            sx={{

                                                p: 1,
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                position: 'relative',
                                                flexDirection: 'row',
                                                minHeight: '2rem',
                                                maxHeight: '22rem',
                                                minWidth: '17rem',
                                                maxWidth: "70rem",
                                                alignItems: 'center'
                                            }}
                                        >
                                            <QueryButton />
                                            <PrintButton />
                                            <ExportExcelButton />
                                        </Grid>
                                    </Grid>
                                    
                                </Grid>
                                <Divider sx={{ position: 'relative', top: '0.5rem', left: '0.02rem', width: '100%' }} />
                            </Grid>

                           
                            {/* FurnaceRealTimeAlarmsTable */}
                            <Grid item xs={10} md={10} lg={10}>
                                <Grid
                                    sx={{
                                        mx: '0.5rem',
                                        mt: 0,
                                        p: 1,
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        flexDirection: 'row',
                                        minHeight: '10rem',
                                        maxHeight: '35rem',
                                        minWidth: '25rem',
                                        maxWidth: "35rem",
                                        border: 'solid',
                                        borderColor: '#DCDCDC',
                                        borderRadius: '1rem'
                                    }}
                                >
                                    <FurnaceHistoricalAlarmsTable />
                                </Grid>

                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Index() {
    return <ResourceHistoricalAnalysis />;
}