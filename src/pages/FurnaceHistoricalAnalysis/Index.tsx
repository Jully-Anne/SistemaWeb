//Tela de análise histórica de temperaturas do forno selecionado
import * as React from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { Box, Container } from '@mui/system'
import { Divider, Grid, Typography } from '@mui/material'
import Title from '../../components/Title/Index'
import FurnaceSelector from '../../components/FurnaceSelector/Index'
import InitialDateSelector from '../../components/InitialDateSelector/Index'
import FinalDateSelector from '../../components/FinalDateSelector/Index'
import TimeSelector from '../../components/TimeSelector/Index'
import QueryButton from '../../components/QueryButton/Index'
import PrintButton from '../../components/PrintButton/Index'
import ExportExcelButton from '../../components/ExportExcelButton/Index'
import { FurnaceHistoricalLineChart } from '../../components/FurnaceHistoricalLineChart/Index'
import FurnaceHistoricalTable from '../../components/FurnaceHistoricalTable/Index'

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

function FurnaceHistoricalAnalysis() {
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
                            Fornos - Consulta Histórico Temperaturas
                        </Typography>
                        <Divider sx={{ position: 'relative', top: '0.5rem', left: '0.02rem', width: '100%', maxWidth: '100%' }} />
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
                                    <TimeSelector />

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


                                        <Divider sx={{ position: 'relative', top: '0.5rem', left: '0.02rem' }} />
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/* LineChart */}
                            <Grid item xs={8} sm={10} md={11} lg={18}>
                                <Grid
                                    sx={{
                                        mt: 0,
                                        p: 1,
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        flexDirection: 'row',
                                        minHeight: '15rem',
                                        maxHeight: '28rem',
                                        minWidth: '5rem',
                                        maxWidth: "70rem",
                                        border: 'solid',
                                        borderColor: '#DCDCDC',
                                        borderRadius: '1rem',

                                    }}
                                >
                                    <FurnaceHistoricalLineChart />
                                </Grid>
                                <Divider sx={{ position: 'relative', top: '0.6rem', left: '0.02rem' }} />
                            </Grid>
                            {/* HistoricalTable */}
                            <Grid item  xs={8} sm={10} md={11} lg={18}>
                                <Grid
                                    sx={{
                                        mt: 0,
                                        p: 1,
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        flexDirection: 'row',
                                        minHeight: '20rem',
                                        maxHeight: '35rem',
                                        minWidth: '5rem',
                                        maxWidth: "70rem",
                                        border: 'solid',
                                        borderColor: '#DCDCDC',
                                        borderRadius: '1rem'
                                    }}
                                >
                                    <FurnaceHistoricalTable />
                                </Grid>
                                <Divider sx={{ position: 'relative', top: '0.6rem' }} />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Index() {
    return <FurnaceHistoricalAnalysis />;
}