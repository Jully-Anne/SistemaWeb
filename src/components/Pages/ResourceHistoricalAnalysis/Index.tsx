import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Title from '../../GeneralComponents/Title';
import { HistoricalLineChart } from '../../StatisticsComponents/HistoricalLineChart';
import { PieChart } from '../../StatisticsComponents/PieChart';
import { Box, Container } from '@mui/system';
import { Divider, Grid, Typography } from '@mui/material';
import HistoricalDataProgressBar from '../../StatisticsComponents/HistoricalDataProgressBar'
import InitialDateSelector from '../../GeneralComponents/InitialDateSelector'
import FinalDateSelector from '../../GeneralComponents/FinalDateSelector'
import QueryButton from '../../GeneralComponents/QueryButton'
import ResourceSelector from '../../GeneralComponents/ResourceSelector'
import SectorSelector from '../../GeneralComponents/SectorSelector'
import HistoricalTable from '../../StatisticsComponents/HistoricalTable';
import PrintButton from '../../GeneralComponents/PrintButton';
import ExportExcelButton from '../../GeneralComponents/ExportExcelButton';
import TimeSelector from '../../GeneralComponents/TimeSelector';

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
                            Consulta Históricos
                        </Typography>
                        <Divider sx={{ position: 'relative', top: '0.5rem', left: '0.02rem' }} />
                    </Title>


                    <Container maxWidth="lg" sx={{ mt: '1.5rem', mb: '0rem' }}>
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
                                        maxWidth: "70rem",
                                        alignItems: 'center'
                                    }}
                                >
                                    <SectorSelector />
                                    <ResourceSelector />
                                    <InitialDateSelector />
                                    <FinalDateSelector />
                                    <TimeSelector />
                                    <QueryButton />
                                </Grid>
                                <Grid item xs={7} md={8} lg={20} >
                                    <Grid
                                        sx={{

                                            p: 1,
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            position: 'relative',
                                            flexDirection: 'row',
                                            minHeight: '2rem',
                                            maxHeight: '20rem',
                                            minWidth: '17rem',
                                            maxWidth: "70rem",
                                            alignItems: 'center'
                                        }}
                                    > 
                                   
                                        <PrintButton />
                                        <ExportExcelButton />
                                    </Grid>
                                </Grid>
                                <Divider sx={{ position: 'relative', top: '0.5rem', left: '0.02rem' }} />
                            </Grid>

                            {/* DataProgressBar */}
                            <Grid item xs={8} md={12} lg={25}>
                                <Grid
                                    sx={{
                                        mt: 0,
                                        p: 1,
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        position: 'relative',
                                        minWidth: '25rem',
                                        maxWidth: "70rem",
                                        borderRadius: '1rem',
                                    }}
                                >
                                    <HistoricalDataProgressBar />
                                </Grid>
                                <Divider sx={{ position: 'relative', top: '0.5rem', left: '0.02rem' }} />
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
                                    <HistoricalLineChart />
                                </Grid>
                                <Divider sx={{ position: 'relative', top: '0.6rem', left: '0.02rem' }} />
                            </Grid>
                            {/* HistoricalTable */}
                            <Grid item xs={5} md={7} lg={7}>
                                <Grid
                                    sx={{
                                        mt: 0,
                                        p: 1,
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        flexDirection: 'row',
                                        minHeight: '20rem',
                                        maxHeight: '30rem',
                                        minWidth: '35rem',
                                        maxWidth: "35rem",
                                        border: 'solid',
                                        borderColor: '#DCDCDC',
                                        borderRadius: '1rem'
                                    }}
                                >
                                    <HistoricalTable />
                                </Grid>
                                <Divider sx={{ position: 'relative', top: '0.6rem' }} />
                            </Grid>
                            {/* PieChart */}
                            <Grid item xs={12} md={6} lg={1}>
                                <Grid
                                    sx={{
                                        mt: 0,
                                        p: 2,
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        flexDirection: 'row',
                                        minHeight: '23rem',
                                        minWidth: "18rem",
                                        maxWidth: '18rem',
                                        border: 'solid',
                                        borderColor: '#DCDCDC',
                                        borderRadius: '1rem'
                                    }}
                                >
                                    <PieChart />
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