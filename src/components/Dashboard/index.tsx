import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import React from 'react';
import Typography from '@mui/material/Typography';
import Title from '../GeneralComponents/Title';
import Card from '../StatisticsComponents/SectorsCard';


const mdTheme = createTheme();

function Dashboard() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Title>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    Dashboard
                </Typography>
            </Title>
            <Divider />
            <Card />
        </ThemeProvider>
    );
}
export default function Index() {
    return <Dashboard />;
}



